// 指定这是一个客户端组件
'use client'

import { useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'
import { Form, Col, Row, Typography, Button, Breadcrumb } from '@douyinfe/semi-ui';
import { IconHome } from '@douyinfe/semi-icons';

/**
 * Create 组件，用于在页面上显示文本，并在组件加载时发送 GET 请求。
 * 
 * @returns JSX 元素，包含一个 h1 标题、请求结果和一个按钮。
 */
export default function Create() {
  const { Title } = Typography;
  const { Section, Input, TextArea } = Form;
  const style = { width: '90%' };
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleSubmit = async (values) => {
    const id = searchParams.get('id')

    try {
      const response = await fetch('/api/detail/create', {
        method: 'POST', // 设置请求方法为 POST
        headers: {
          'Content-Type': 'application/json', // 设置请求头
        },
        body: JSON.stringify({ ...values, projectId: id }), // 将表单数据转换为 JSON 字符串
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.status === 'S') {

        router.push(`/detail?id=${responseData.id}`);
      }
      // 可以在这里处理成功响应，例如显示提示信息或重定向
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const goProjectDetail = () => {
    router.push('/detail?id=' + searchParams.get('id'))
  }
  return (
    <div className='h-screen overflow-hidden'>
      <Title className="text-center p-3">创建新项目</Title>
      <Breadcrumb className="p-6" compact={false}>
        <Breadcrumb.Item href="/project" icon={<IconHome />}></Breadcrumb.Item>
        <Breadcrumb.Item onClick={goProjectDetail}>项目详情</Breadcrumb.Item>
        <Breadcrumb.Item >新建测试用例</Breadcrumb.Item>
      </Breadcrumb>
      <div className='p-10'>
        <Form
          labelPosition='left'
          style={{ padding: 10, width: '100%' }}
          onSubmit={handleSubmit}
        >

          <Row>
            <Col span={8}>
              <Input

                field="name"
                label="名称（Input）"
                style={style}
                trigger='blur'
              />
            </Col>
          </Row>
          <TextArea
            style={{ ...style, height: 800 }}
            rows={40}
            maxCount={10000}
            field='script'
            label='脚本'
            placeholder='请填写测试脚本'
          />
          <Button type="primary" htmlType="submit" className="ml-8 mr-4">提交</Button>
          <Button htmlType="reset">重置(reset)</Button>
        </Form>
      </div>
    </div>
  );
}
