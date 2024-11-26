// 指定这是一个客户端组件
'use client'

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation'
import { Form, Col, Row, Typography, Button, Breadcrumb } from '@douyinfe/semi-ui';
import { IconUpload, IconHome } from '@douyinfe/semi-icons';

/**
 * Create 组件，用于在页面上显示文本，并在组件加载时发送 GET 请求。
 * 
 * @returns JSX 元素，包含一个 h1 标题、请求结果和一个按钮。
 */
export default function Create() {
  const { Title } = Typography;
  const { Section, Input, } = Form;
  const style = { width: '90%' };
  const router = useRouter();
  const handleSubmit = async (values) => {
    const params = {
      ...values,
      files: values.files[0].response.extractDir
    }
    try {
      const response = await fetch('/api/create', {
        method: 'POST', // 设置请求方法为 POST
        headers: {
          'Content-Type': 'application/json', // 设置请求头
        },
        body: JSON.stringify(params), // 将表单数据转换为 JSON 字符串
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.data?.id) {
        router.push(`/project`);
      }
      // 可以在这里处理成功响应，例如显示提示信息或重定向
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const validateName = (value) => {

    if (!value) {
      return `请输入项目名称`;
    }
    return '';
  }
  const validatePort = (value) => {

    if (!value) {
      return `请输入端口`;
    }
    return '';
  }

  const validateFiles = (value) => {

    if (!value) {
      return `请先上传文件`;
    }
    return '';
  }


  return (
    <div className='h-screen overflow-hidden'>
      <Title className="text-center p-3">创建新项目</Title>
      <Breadcrumb className="p-6" compact={false}>
        <Breadcrumb.Item href="/project" icon={<IconHome />}></Breadcrumb.Item>
        <Breadcrumb.Item >新建</Breadcrumb.Item>
      </Breadcrumb>
      <div className='p-10'>
        <Form
          // validateFields={syncValidate}
          labelPosition='left'
          style={{ padding: 10, width: '100%' }}
          onSubmit={handleSubmit}
        >
          <Section text={'基本信息'}>
            <Row>
              <Col span={8}>
                <Input
                  validate={validateName}
                  field="name"
                  label="项目名称"

                  style={style}
                  trigger='blur'
                />
              </Col>
              <Col span={8}>
                <Input
                  field="port"
                  label="端口"
                  validate={validatePort}
                  style={style}
                  trigger='blur'
                />
              </Col>
              <Col span={8}>
                <Form.Upload
                  field='files'
                  name='files'
                  label='项目打包文件'
                  validate={validateFiles}
                  action='/api/upload'
                >
                  <Button icon={<IconUpload />} theme="light">
                    点击上传
                  </Button>
                </Form.Upload>
              </Col>
            </Row>
          </Section>
          <Button type="primary" htmlType="submit" className="mr-4">提交</Button>
          <Button htmlType="reset">重置(reset)</Button>
        </Form>
      </div>
    </div>
  );
}
