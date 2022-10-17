/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-17 15:43:44
 * @LastEditors: hzy
 * @Description: 公共头部
 */

import { newsList } from './models';
import './index.scss';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  return (
    <div id="Services">
      {/* 轮播图 */}
      <div className="banner" />

      {/* 实时关注资讯 */}
      <div className="news">
        <div className="news-top">
          <div className="message">实时关注资讯</div>
          {newsList.map((item, index) => {
            return (
              <div
                className="news-item"
                key={index}
                onClick={() => navigate(`/newsMessage/${item.id}`)}
              >
                <div className="news-title">
                  {item.title} <span>{item.newsDate}</span>
                </div>
                <div className="news-text">{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;