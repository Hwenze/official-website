/*
 * @Author: HWZ
 * @Date: 2022-07-01
 * @LastEditTime: 2022-10-17 15:29:52
 * @LastEditors: hzy
 * @Description: 路由配置页
 */

import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

const Header = lazy(() => import('./modules/component/header/index'));  // 头部组件

const Home = lazy(() => import('./modules/containers/home/index')); // 主页
const Contact = lazy(() => import('./modules/containers/contact/index')); // 公司介绍
const Services = lazy(() => import('./modules/containers/services/index')); // 产品介绍
const Gallery = lazy(() => import('./modules/containers/gallery/index')); // 发展历史
const About = lazy(() => import('./modules/containers/about/index')); // 关于我们
const NewsMessage = lazy(() => import('./modules/containers/newsMessage/index')); // 新闻咨询 详情

const Footer = lazy(() => import('./modules/component/footer/index')); // 底部组件

const App = () => {
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
          <Route path='/newsMessage/:id' exact element={<NewsMessage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  };

  return <BrowserRouter basename={`/`}>
    {content()}
  </BrowserRouter>;
}

export default App;
