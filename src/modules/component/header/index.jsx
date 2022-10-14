/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-14 16:11:35
 * @LastEditors: HWZ
 * @Description: 公共头部
 */

import { useNavigate } from 'react-router-dom';

import { ChromeOutlined } from '@ant-design/icons';

import { headerList } from './data';

import './index.scss';

const Header = () => {
  const navigate = useNavigate();
  // 选中的

  return (
    <div id='Header'>
      <ChromeOutlined className='header-logo' style={{ fontSize: '32px', color: '#eb2f96' }} />

      <div className='header-list'>
        {headerList.map((item) => {
          return (
            <div
              className='list-item'
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
