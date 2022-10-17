/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-17 17:25:16
 * @LastEditors: hzy
 * @Description: 公共头部
 */

import { newsList, newsArr } from './models';
import './index.scss';
import { LeftOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const Services = () => {
  const [showDetail, setShowDetail] = useState(true);
  return (
    <div id="Services">
      {/* 轮播图 */}
      <div className="banner" />
      {/* 实时关注资讯 */}
      <div className="news">
        <div className="news-top">
          {showDetail ? (
            <>
              <div className="message">实时关注资讯</div>
              {newsList.map((item, index) => {
                return (
                  <div className="news-item" key={index} onClick={() => {setShowDetail(false)}}>
                    <div className="news-title">
                      {item.title} <span>{item.newsDate}</span>
                    </div>
                    <div className="news-text">{item.text}</div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div className="topTitle">
                苹果又遭专利诉讼：因Apple TV快速回放功能侵权
                <span className="back" onClick={() => {setShowDetail(true)}}>
                  <LeftOutlined className="icon" />
                  返回
                </span>
              </div>
              <div className="newsDate">发表时间：2019-08-21 14:58</div>
              {newsArr.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
