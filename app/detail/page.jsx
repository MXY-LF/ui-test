// 指定这是一个客户端组件
'use client'

import { useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'
import { Modal, Card, Typography, Button, SideSheet, MarkdownRender, Image, Breadcrumb, ImagePreview } from '@douyinfe/semi-ui';
import { IconPlus, IconHome } from '@douyinfe/semi-icons';
/**
 * Create 组件，用于在页面上显示文本，并在组件加载时发送 GET 请求。
 * 
 * @returns JSX 元素，包含一个 h1 标题、请求结果和一个按钮。
 */
export default function Create() {
  const { Title, Text } = Typography;
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter()

  // 在组件挂载时发送 GET 请求
  useEffect(() => {
    async function fetchData() {
      try {
        const id = searchParams.get('id')

        const response = await fetch(`/api/detail?id=${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);
        setData(responseData.data.testCases);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  const [visible, setVisible] = useState(false);
  const [scriptValue, setValue] = useState('')
  const [videoValue, setVideoValue] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const changeModal = (video) => {
    setModalVisible(true)
    setVideoValue(video)
  }
  const changeValue = (script) => {
    setVisible(true)
    setValue(script)
  }
  const goCreate = () => {
    router.push('/detail/create?id=' + searchParams.get('id'))
  }
  const doTestAgain = (testId) => {

    fetch('/api/detail/doTest', {
      method: 'POST', // 设置请求方法为 POST
      headers: {
        'Content-Type': 'application/json', // 设置请求头
      },
      body: JSON.stringify({ testId }), // 将表单数据转换为 JSON 字符串
    });


  }
  return (
    <div className='h-screen overflow-y-scroll'>
      <Modal title="录屏" fullScreen visible={modalVisible} onOk={() => setModalVisible(false)} onCancel={() => setModalVisible(false)}>
        <video controls width="1000" height="800">
          <source src={videoValue} type="video/mp4" />
        </video>
      </Modal>
      <SideSheet title="脚本数据" visible={visible} onCancel={() => setVisible(false)} size='large'>
        <MarkdownRender raw={`\`\`\`js \n${scriptValue}\n\`\`\``} />
      </SideSheet>
      <Title className="text-center p-3">项目详情</Title>
      <Breadcrumb className="p-6" compact={false}>
        <Breadcrumb.Item href="/project" icon={<IconHome />}></Breadcrumb.Item>
        <Breadcrumb.Item >项目详情</Breadcrumb.Item>
      </Breadcrumb>
      <div className='p-10'>
        <div className="w-full h-full  grid grid-cols-2 gap-4">
          {data.map((item, index) => (
            <Card
              key={item.name}
              title={item.name}
              style={{ width: '100%', height: 360 }}
              headerExtraContent={
                <Text link onClick={() => doTestAgain(item.id)}>
                  重新执行
                </Text>
              }
            >
              <div className='text-cyan-400 mb-4'>测试图片:</div>
              <ImagePreview className='flex  gap-1  mb-4'>
                {item.images?.map((img, index) => (
                  <div >

                    <Image
                      width={120}
                      height={100}
                      src={img}
                    />
                  </div>
                ))}
              </ImagePreview>
              <div className='text-red-500 mb-4'>测试变更异常图片:</div>
              <ImagePreview className='flex  gap-1  mb-4'>
                {item.diffImgs?.map((img, index) => (
                  <div >

                    <Image
                      width={120}
                      height={100}
                      src={img}
                    />
                  </div>
                ))}
              </ImagePreview>
              <Button onClick={() => changeValue(item.script)} className='mr-5'>脚本数据</Button>
              <Button onClick={() => changeModal(item.video)}>测试录屏</Button>
            </Card>
          ))}
          <Card
            style={{ width: 360, height: 360 }}
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}

          >
            <span className='mr-4 text-orange-600 font-bold'>新增测试用例</span>
            <IconPlus className='cursor-pointer' onClick={goCreate} />
          </Card>
        </div>
      </div>
    </div>
  );
}
