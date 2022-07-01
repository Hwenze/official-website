/*
 * @Author: HWZ
 * @Date: 2022-07-01
 * @LastEditTime: 2022-07-01
 * @LastEditors: HWZ
 * @Description: 主入口
 */

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import AppComponent from './App';
import './index.scss';

const docEle = document.documentElement;

const fn = function () {
  const width = window.innerWidth;
  width && (docEle.style.fontSize = 16 * (width / 1920) + 'px');
};

window.onresize = fn;
window.addEventListener('orientationchange', fn, false);
document.addEventListener('DOMContentLoaded', fn, false);

//遮罩问题
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

const renderFn = Component => <React.StrictMode>
  <div>
    {/* If this slows down the app in dev disable it and enable when required  */}
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  </div>
</React.StrictMode>

rootElement.render(renderFn(AppComponent));
