/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-19 16:42:51
 * @LastEditors: HWZ
 * @Description: 公共头部
 */

import { policyList } from './models';

import './index.scss';

const Policy = () => {
  return (
    <div id='Policy'>
      <div className='content-box'>
        <p className='title'>Privacy policy</p>
        {policyList.map((item) => {
          return <p className={`${item.isTitle && 'chapter'}`}>{item.text}</p>
        })}
      </div>
    </div>
  );
};

export default Policy;
