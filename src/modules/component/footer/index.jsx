/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-08-17 15:27:36
 * @LastEditors: HWZ
 * @Description: 底部组件
 */

import { useNavigate } from 'react-router-dom';

import { footerList, useList, imgList } from './data';

import './index.scss';

const Footed = () => {
  const navigate = useNavigate();

  return (
    <div id='Footed'>
      <span className='site-name'>BRICK PROXY</span>

      <div className='independent navigation'>
        {footerList.map((item) => {
          return (
            <p key={item.label} onClick={() => navigate(item.route)}>
              {item.label}
            </p>
          );
        })}
      </div>

      <div className='independent use-list'>
        {useList.map((item) => {
          return (
            <p key={item.label} onClick={() => navigate(item.route)}>
              {item.label}
            </p>
          );
        })}
      </div>

      <div className='independent'>
        <div className='img-box'>
          {imgList.map((item, index) => {
            return <img src={item.img} key={index} alt='' />;
          })}
        </div>
        <span>Email：xxxxx@xxx.com</span>
      </div>
    </div>
  );
};

export default Footed;
