/*
 * @Author: HWZ
 * @Date: 2022-07-01
 * @LastEditTime: 2022-10-17 17:59:09
 * @LastEditors: HWZ
 * @Description: 路由配置页
 */

import { lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import upward from '../src/static/images/upward.png';

import './App.scss';

const Header = lazy(() => import('./modules/component/header/index'));  // 头部组件

const Home = lazy(() => import('./modules/containers/home/index')); // 主页
const Contact = lazy(() => import('./modules/containers/contact/index')); // 公司介绍
const Services = lazy(() => import('./modules/containers/services/index')); // 产品介绍
const Gallery = lazy(() => import('./modules/containers/gallery/index')); // 发展历史
const About = lazy(() => import('./modules/containers/about/index')); // 关于我们

const Footer = lazy(() => import('./modules/component/footer/index')); // 底部组件

let scrollTop = 0;

const App = () => {
  const [backToTopFlag, setBackToTopFlag] = useState(false);

  const getWindowSize = () => {
    if (document?.documentElement && document?.documentElement?.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document?.body) {
      scrollTop = document.body.scrollTop;
    }

    setBackToTopFlag(scrollTop > 99);
  };

  const handleScroll = () => {
    const scrollToptimer = setInterval(function () {
      const top = document.body.scrollTop || document.documentElement.scrollTop;
      const speed = top / 30;
      document.documentElement.scrollTop -= speed;
      if (top === 0) {
        clearInterval(scrollToptimer);
      }
    }, 5);
  };

  useEffect(() => {
    window.addEventListener('scroll', getWindowSize);
    return () => {
      window.removeEventListener('scroll', getWindowSize);
    };
  }, []);

  const content = () => {
    return <div className='Appclanme'>

      <Header />

      <div className='body-box'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/gallery' exact element={<Gallery />} />
          <Route path='/about' exact element={<About />} />
        </Routes>
      </div>

      <Footer />

      {backToTopFlag && <img className='backToTop' onClick={handleScroll} src={upward} alt="" />}

    </div>;
  };

  return <BrowserRouter basename={`/`}>
    {content()}
  </BrowserRouter>;
}

export default App;
