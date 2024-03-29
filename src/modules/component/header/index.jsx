/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-17 17:56:51
 * @LastEditors: HWZ
 * @Description: 公共头部
 */

import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { notification } from 'antd';

import { localStorage } from '../../../utils/utils.js';

import logo from '../../../static/svg/logo.svg';

import { headerList } from './data';
import { getToken, getUserName } from './server';

import './index.scss';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let showLogin = localStorage.getStorage('token');

  // 获取用户信息
  const getUserNameFn = () => {
    getUserName(
      {},
      (res) => {
        if (res && res.code === 200) {
          localStorage.setStorage('userInfo', res.result);
        } else {
          notification.error({
            message: 'system error',
            description: (res && res.message) || 'Your login has expired',
          });
        }
      },
      () => {
        notification.error({
          message: 'system error',
          description: 'Please contact the administrator',
        });
      }
    );
  };

  // 路由变化判断
  useEffect(() => {
    if (window.location.search.indexOf('code') !== -1) {
      const code = window.location.search.split('=')[1].split('#')[0];

      getToken(
        { code },
        (res) => {
          if (res && res.code === 200) {
            localStorage.setStorage('token', res.token);
            showLogin = true;
            setTimeout(() => {
              navigate('/');
            }, 500);
          }
        },
        () => {}
      );
    }
  }, [pathname]);

  // 登入登出
  const loginFn = () => {
    if (showLogin) {
      localStorage.delStorage('token');
      navigate('/');
    } else {
      window.location.replace(window.location.origin + '/login');
    }
  };

  useEffect(() => {
    if (showLogin) getUserNameFn();
  }, []);

  return (
    <div id='Header'>
      <img className='logo' src={logo} alt='' />

      <div className='header-list'>
        {headerList.map((item) => {
          return (
            <div
              className={`list-item ${pathname === item.route && 'active'}`}
              key={item.label}
              onClick={() => navigate(item.route)}
            >
              {item.label}
            </div>
          );
        })}
      </div>

      <div className='user-box'>
        {showLogin && <img className='user-avatar' src={logo} alt='' />}
        <div
          className='btn'
          onClick={() => {
            loginFn();
          }}
        >
          {showLogin ? 'LOG OUT' : 'LOG IN'}
        </div>
      </div>
    </div>
  );
};

export default Header;
