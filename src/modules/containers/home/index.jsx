/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-19 16:48:47
 * @LastEditors: HWZ
 * @Description: 首页
 */

import { lazy } from 'react';
import { useNavigate } from 'react-router-dom';

import PURCHASE from '../../../static/images/PURCHASE.png';
import { fullmeasureList, brandList } from './models';

import './index.scss';

const Footer = lazy(() => import('../../component/footer/index')); // 底部组件

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id='Home'>
        {/* 轮播图 */}
        <div className='banner'>
          <img className='banner-btn' src={PURCHASE} alt='' />
        </div>

        {/* 平台介绍 */}
        <div className='fullmeasureOuterContent'>
          <div className='title'>What can Damenbe used for</div>

          <div className='content'>
            {fullmeasureList.map((item) => {
              return (
                <div className='fullmeasureOuter-item' key={item.title}>
                  <img src={item.img} alt='' />
                  <p className='item-title'>{item.title}</p>
                  <p className='item-text'>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 社区 */}
        <div className='community'>
          <p className='community-title'>SUPPORT SITE</p>
          <div className='community-brand'>
            {brandList.map((item) => {
              return <img src={item} alt='' />;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
