/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-17 17:56:51
 * @LastEditors: HWZ
 * @Description: 公共头部
 */

import { useNavigate, useLocation } from 'react-router-dom';

import { ChromeOutlined } from '@ant-design/icons';

import { headerList } from './data';

import './index.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // 选中的

  return (
    <div id='Header'>
      <ChromeOutlined
        className='header-logo'
        style={{ fontSize: '32px', color: '#eb2f96' }}
      />

      <div className='header-list'>
        {headerList.map((item) => {
          return (
            <div
              className='list-item'
              style={{
                color: location.pathname === item.route ? '#8b0eea' : '',
              }}
              key={item.label}
              onClick={() => navigate(item.route)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
