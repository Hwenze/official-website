/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-19 16:48:47
 * @LastEditors: HWZ
 * @Description: 登录页
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import bigLogo from '../../../static/svg/big_logo.svg';

import './index.scss';

const Login = () => {
  const [height, setHeight] = useState(0);
  const navigate = useNavigate();

  const fn = () => {
    setHeight(
      document.documentElement.clientHeight || document.body.clientHeight
    );
  };

  window.onresize = fn;
  window.addEventListener('orientationchange', fn, false);
  document.addEventListener('DOMContentLoaded', fn, false);

  useEffect(() => {
    fn();
  }, []);

  return (
    <div id='Login' style={{ height: `${height}px` }}>
      <div className='login-box'>
        <img src={bigLogo} alt='' />
        <p>BRICK PROXY</p>
        <div className='login-btn'>LOG IN WITH DISCORD</div>
      </div>
    </div>
  );
};

export default Login;
