/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-17 17:56:51
 * @LastEditors: HWZ
 * @Description: 公共头部
 */

import { useNavigate, useLocation } from 'react-router-dom';

import logo from '../../../static/images/logo.png';

import { headerList } from './data';

import './index.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div id='Header'>
      <img className='logo' src={logo} alt='' />

      <div className='header-list'>
        {headerList.map((item) => {
          return (
            <div
              className={`list-item ${
                location.pathname === item.route && 'active'
              }`}
              key={item.label}
              onClick={() => navigate(item.route)}
            >
              {item.label}
            </div>
          );
        })}
      </div>

      <div className='user-box'>
        <img className='user-avatar' src={logo} alt="" />
        <div
          className='btn'
          onClick={() => {
            window.location.replace(window.location.origin + '/login');
          }}
        >
          LOG IN
        </div>
      </div>
    </div>
  );
};

export default Header;
