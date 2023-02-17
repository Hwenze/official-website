/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-19 16:48:47
 * @LastEditors: HWZ
 * @Description: 登录页
 */

import { useState, useEffect } from 'react';

import bigLogo from '../../../static/svg/big_logo.svg';

import './index.scss';

const Login = () => {
  const [height, setHeight] = useState(0);

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
        <div
          className='login-btn'
          onClick={() => {
            window.location.href =
              'https://discord.com/api/oauth2/authorize?client_id=1060132522282983424&redirect_uri=https%3A%2F%2Fwww.brickproxy.net%2F%23%2Flogin&response_type=code&scope=identify%20guilds%20guilds.join%20email';
          }}
        >
          LOG IN WITH DISCORD
        </div>
      </div>
    </div>
  );
};

export default Login;
