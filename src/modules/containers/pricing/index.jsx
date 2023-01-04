/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-17 17:25:16
 * @LastEditors: HWZ
 * @Description: Pricing
 */

import { pricingList } from './models';

import './index.scss';

const Pricing = () => {
  return (
    <div id='Pricing'>
      {pricingList.map((item) => {
        return (
          <div className='box-li'>
            <div className='box-title'>
              <p className='title'>{item.title}</p>
              <p>{item.explain}</p>
            </div>
            <div className='box-info'>
              <p className='chapter'>General Features</p>
              {item.generalFeatures.map((it) => {
                return <p className='detailed'>{it}</p>;
              })}
              <p className='chapter'>Location</p>
              {item.location.map((it) => {
                return <p className='detailed'>{it}</p>;
              })}
            </div>
            <div className='btn'>Buy Now</div>
          </div>
        );
      })}
    </div>
  );
};

export default Pricing;
