/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-19 16:48:47
 * @LastEditors: HWZ
 * @Description: 首页
 */

import { useNavigate } from 'react-router-dom';

import { fullmeasureList, newsList, honorList } from './models';

import world_map from '../../../static/images/world_map.png';

import './index.scss';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div id='Home'>
      {/* 轮播图 */}
      <div className='banner'></div>

      {/* 平台介绍 */}
      <div className='fullmeasureOuterContent'>
        {fullmeasureList.map((item) => {
          return (
            <div className='fullmeasureOuter-item' key={item.title}>
              <img src={item.img} alt='' />
              <div className='copywriting'>
                <p>{item.title}</p>
                <span>{item.text}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 新闻资讯 */}
      <div className='news-info'>
        <p className='info-title'>新闻资讯</p>

        <div className='content-box'>
          {newsList.map((item) => {
            return (
              <div className='content-list' key={item.title}>
                <img src={item.img} alt='' />
                <p>{item.title}</p>
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 社区 */}
      <div className='community'>
        <p className='community-title'>社区</p>
        <p className='community-info'>
          我们希望为提供一个纯粹、高质的技术交流的平台，与一起学习、交流与成长
        </p>
        <div className='community-btn' onClick={() => navigate('/contact')}>
          了解详情
        </div>
      </div>

      {/* 荣誉 */}
      <div className='honor'>
        <p className='honor-title'>荣获多项荣誉</p>
        <div className='honor-box'>
          {honorList.map((item) => {
            return (
              <div className='honor-item' key={item.text}>
                <img src={item.img} alt='' />
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 地图分布 */}
      <div className='world-map'>
        <p className='map-title'>我们的业务遍布世界各地</p>
        <p className='map-info'>
          高精度指引下的率，大数据基础上的小数据，从生产生命周期到用户全生命周期解决了企业边际效益递减的问题，从串联到并联，解决了大规模制造与个性化定制间的矛盾从封闭到开放，用户-资源-企业共创共赢共享，非线性矩阵发展
        </p>
        <img src={world_map} alt='' />
      </div>
    </div>
  );
};

export default Home;
