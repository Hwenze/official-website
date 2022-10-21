/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-14 16:11:57
 * @LastEditors: HWZ
 * @Description: 公共头部
 */

import './index.scss';
import { modelData } from './model';
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  InputNumber,
} from 'antd';
import { useState } from 'react';
import partnerImg from '../../../static/images/partner.png';
const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
const Gallery = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [cities, setCities] = useState([]); //省份
  const onClose = () => {
    setOpen(false);
  };
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    form.setFieldsValue({
      city: '',
    });
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div id="Gallery">
      {/* 轮播图 */}
      <div className="banner" />
      {/* 荣誉 */}
      <div className="news">
        <div className="news-top">
          <div className="message">荣获多项荣誉</div>
          <div className="mode-content">
            {modelData.map((item) => {
              return (
                <div className="mode-item" key={item.type}>
                  <img src={item.img} alt="" />
                  <div>{item.type}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 合作伙伴 */}
      <div className="partner">
        <div className="partner-top">
          <div className="message">成为合作伙伴</div>
          <div className="partner-button">
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              申请加入
            </button>
          </div>
        </div>
      </div>
      {/* 选择 */}

      <div className="news">
        <div className="news-top">
          <div className="message">我们是您更好的选择</div>
          <p className="choose-text">
            从微信小程序诞生后就一直专注小程序开发，我们用专业与勤劳为一个个客户带去了品牌的传播，销量的提升。企业所需要的不是今天销量，而是持续性的品牌竞争力。我们坚信
          </p>
          <p className="choose-text">品牌的力量，我们是您更好的选择</p>
          <div className="choose-flex">
            <div className="choose-item">
              <img src={partnerImg} alt="" />
              <div className="item-title">合作伙伴收益</div>
              <p className="item-text">
                合作伙伴社区、应用市场、合伙人管理、合伙人咨询委员会、技术支持资源、联合客户服务计划联合市场营销计划、联合商业拓展计划、营销支持等
              </p>
            </div>
            <div className="choose-item">
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                autoComplete="off"
              >
                <Form.Item
                  label="姓名"
                  name="zhName"
                  rules={[
                    { required: true, message: 'Please input your username!' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="手机"
                  name="iphone"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                  label="备注"
                  name="ramark"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item >
                  <Button  className="choose-button" >
                    提交
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>

      {/* 申请加入、抽屉弹框 */}
      <Drawer
        title="合作加盟"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose} type="primary">
              提交
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Name"
                label="姓名"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="phone" label="电话" rules={[{ required: true }]}>
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="cardId"
                label="身份证"
                rules={[{ required: true }]}
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="province"
                label="省份"
                rules={[{ required: true }]}
              >
                <Select onChange={handleProvinceChange}>
                  {provinceData.map((province) => (
                    <Option key={province}>{province}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="city" label="城市" rules={[{ required: true }]}>
                <Select>
                  {cities.map((city) => (
                    <Option key={city}>{city}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default Gallery;
