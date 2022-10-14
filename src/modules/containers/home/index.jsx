/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-14 17:11:50
 * @LastEditors: HWZ
 * @Description: 公共头部
 */

import { fullmeasureList, newsList } from './models';

import './index.scss';

const Home = () => {
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
              <div className='content-list'>
                <img src={item.img} alt='' />
                <p>{item.title}</p>
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
