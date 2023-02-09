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
        {policyList.map((item) => {
          return (
            <>
              <p className='title'>{item.title}</p>
              {item.list.map((it) => {
                return (
                  <p className={`${it.isTitle && 'chapter'}`}>{it.text}</p>
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Policy;
