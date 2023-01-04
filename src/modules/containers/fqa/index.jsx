/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-17 17:53:22
 * @LastEditors: hwz
 * @Description: 公共头部
 */

import { fqaList } from './model';

import './index.scss';

const Fqa = () => {
  // 当前项目范围类型
  return (
    <div id='Fqa'>
      {fqaList.map((item) => {
        return (
          <div className='content-box' key={item.title}>
            <img src={item.img} alt='' />
            <div className='content'>
              <p className='content-title'>{item.title}</p>
              <p className='content-text'>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Fqa;
