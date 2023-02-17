/*
 * @Author: HWZ
 * @Date: 2022-07-01
 * @LastEditTime: 2022-10-17 17:59:09
 * @LastEditors: HWZ
 * @Description: 路由配置页
 */

import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

const Header = lazy(() => import('./modules/component/header/index'));  // 头部组件

const Home = lazy(() => import('./modules/containers/home/index')); // HOME
const Pricing = lazy(() => import('./modules/containers/pricing/index')); // Pricing
const Fqa = lazy(() => import('./modules/containers/fqa/index')); // FQA
const Dashboard = lazy(() => import('./modules/containers/dashboard/index')); // Dashboard
const Policy = lazy(() => import('./modules/containers/policy/index')); // Policy
const Login = lazy(() => import('./modules/containers/login/index')); // 登录页

const App = () => {
  const content = () => {
    const isLogin = window.location.href.includes('/login') && !window.location.href.includes('#/login');

    return <div className='Appclanme'>

      {!isLogin && <Header />}

      <div className='body-box'>
        <Routes>
          <Route path='/' exact element={<Home />} />

          <Route path='/home' exact element={<Home />} />
          <Route path='/pricing' exact element={<Pricing />} />
          <Route path='/fqa' exact element={<Fqa />} />
          <Route path='/dashboard' exact element={<Dashboard />} />
          <Route path='/policy' exact element={<Policy />} />

          <Route path='/login' exact element={<Login />} />
        </Routes>
      </div>
    </div>;
  };

  return <BrowserRouter basename={`/`}>
    {content()}
  </BrowserRouter>;
};

export default App;
