/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-18 17:50:50
 * @LastEditors: HWZ
 * @Description: 公共头部
 */
import { useNavigate } from 'react-router-dom';

import { fullmeasureList, newsList, honorList } from './models';

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
    </div>
  );
};

export default Home;
