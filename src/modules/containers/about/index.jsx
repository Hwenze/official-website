/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-19 16:42:51
 * @LastEditors: yangjiaxin
 * @Description: 公共头部
 */

import './index.scss';
import { introduceRowList } from './models';
import React, { useState } from 'react';

const About = () => {
  return (
    <div id='About'>
      {/* banner背景 */}
      <div className='banner-board'></div>
      {/* 第一行 */}
      <div className='introduce-row '>
        {/* 版心 */}
        <div className='introduce-main introduce-top'>
          <title>{introduceRowList.top.title}</title>
          {introduceRowList.top.content.map((p, index) => {
            return <p>{p}</p>;
          })}
          <div className='img-box'>
            {introduceRowList.top.imgArr.map((img, index) => {
              return <img src={img} alt='wait...' />;
            })}
          </div>
        </div>
      </div>
      {/* 第二行 */}
      <div className='introduce-row introduce-back-img'>
        <div className='introduce-main introduce-middle'>
          <title>{introduceRowList.middle.title}</title>
          {introduceRowList.middle.content.map((p, index) => {
            return <p className='text-left'>{p}</p>;
          })}
          <div className='img-box'>
            {introduceRowList.middle.imgArr.map((img, index) => {
              return <img src={img} alt='wait...' />;
            })}
          </div>
        </div>
      </div>
      {/* 第三行 */}
      <div className='introduce-row'>
        <div className='introduce-main introduce-bottom'>
          <div className='introduce-bag'>
            <title>{introduceRowList.bottom.title}</title>
            {introduceRowList.bottom.content.map((p, index) => {
              return <p className='text-left'>{p}</p>;
            })}
          </div>
          <div className='img-box'>
            <img src={introduceRowList.bottom.imgArr[0]} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
