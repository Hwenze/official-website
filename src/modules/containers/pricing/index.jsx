/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-17 17:25:16
 * @LastEditors: HWZ
 * @Description: Pricing
 */

import { useState } from 'react';
import { Input, Modal } from 'antd';

import { pricingList } from './models';

import './index.scss';

const Pricing = () => {
  const [code, setCode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // code输入
  const codeChange = (e) => {
    setCode(e.target.value);
  };

  // 获取折扣后价格
  const proxyBuyFn = (type) => {
    const params = {
      discountKey: code,
      shopType: selVal,
    };

    setApplyLoad(true);

    discountInfo(params).then(
      (result) => {
        if (result && result.code === 200) {
          proxyBuy(params).then(
            (res) => {
              if (res && res.code === 200) {
                setPricepriceData({
                  ...res.result,
                  feeDao: result.result.feeDao,
                  fee: result.result.fee,
                });
                if (type === 'wechat') {
                  setIsModalVisible(true);
                } else if (type === 'stripe') {
                  window.payFn(res.result.checkoutSessionid);
                }
              } else {
                notification.error({
                  message: 'system error',
                  description: (res && res.message) || 'Your login has expired',
                });
              }
              setApplyLoad(false);
            },
            (error) => {
              notification.error({
                message: 'Tips',
                description: "You haven't login , please login first",
              });
              setApplyLoad(false);
            }
          );
        } else {
          notification.error({
            message: 'system error',
            description: (result && result.message) || 'Your login has expired',
          });
          setApplyLoad(false);
        }
      },
      (error) => {
        notification.error({
          message: 'Tips',
          description: "You haven't login , please login first",
        });
        setApplyLoad(false);
      }
    );
  };

  return (
    <>
      <div id='Pricing'>
        {pricingList.map((item) => {
          return (
            <div className='box-li' key={item.title}>
              <div className='box-title'>
                <p className='title'>{item.title}</p>
                {/* <p>{item.explain}</p> */}
              </div>
              <div className='box-info'>
                <p className='chapter'>General Features</p>
                {item.generalFeatures.map((it) => (
                  <p className='detailed' key={it}>
                    {it}
                  </p>
                ))}
                <p className='chapter'>Location</p>
                {item.location.map((it) => (
                  <p className='detailed' key={it}>
                    {it}
                  </p>
                ))}
              </div>
              <div className='btn' onClick={showModal}>
                Buy Now
              </div>
            </div>
          );
        })}
      </div>

      {/* 弹窗 */}
      <Modal
        centered={true}
        closable={false}
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        wrapClassName='Pricing-Modal-Box'
      >
        <div id='Pricing-Modal'>
          <p>Discount Code</p>
          <div className='entering-box'>
            <Input
              className='modal-entering'
              placeholder='Type here'
              bordered={false}
              value={code}
              onChange={codeChange}
            />
            <div className='entering-btn'>APPLY</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Pricing;
