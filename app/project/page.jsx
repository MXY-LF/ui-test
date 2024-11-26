// 指定这是一个客户端组件
'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { Skeleton, Card, Typography, Breadcrumb } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconPlus, IconHome } from '@douyinfe/semi-icons';
import { IconCascader } from '@douyinfe/semi-icons-lab';
/**
 * Create 组件，用于在页面上显示文本，并在组件加载时发送 GET 请求。
 * 
 * @returns JSX 元素，包含一个 h1 标题、请求结果和一个按钮。
 */
export default function Project() {
  const { Title, Text } = Typography;
  const { Meta } = Card;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  async function fetchData() {
    try {
      const response = await fetch('/api/project');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      setData(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // 在组件挂载时发送 GET 请求
  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  const goDetail = (id) => {
    router.push(`/detail?id=${id}`);
  };

  const goToCreate = () => {

    router.push('/create');
  };

  return (
    <div className='h-screen overflow-hidden'>
      <Title className="text-center p-5 "><IconCascader size='extra-large' /> H5 UI 自动化测试平台</Title>
      <Skeleton className='w-full h-full' placeholder={<Skeleton.Image />} loading={loading} active>
        <div className="w-full h-full p-6 grid grid-cols-5 gap-3 border border-gray-300 shadow-md">
          {data.map((item, index) => (
            <Card
              key={index}
              style={{ width: 360, height: 60 }}
              bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div className='flex flex-row gap-1 justify-center items-center'>
                <IconSemiLogo />
                <Meta title={item.name} />
              </div>
              <Text>Port：<span className='text-cyan-400'>{item.port}</span></Text>
              <Text link onClick={() => goDetail(item.id)}>测试案例详情</Text>
            </Card>
          ))}
          <Card
            style={{ width: 360, height: 60 }}
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}

          >
            <span className='mr-4 text-orange-600 font-bold'>新增项目</span>
            <IconPlus onClick={goToCreate} className='cursor-pointer' />
          </Card>
        </div>
      </Skeleton>
    </div>
  );
}