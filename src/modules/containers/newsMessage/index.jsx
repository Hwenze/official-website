/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-17 16:01:35
 * @LastEditors: hzy
 * @Description: 公共头部
 */

import './index.scss';
import { newsList } from './models';

const NewsMessage = () => {
  return (
    <div id="NewsMessage">
      {/* 轮播图 */}
      <div className="banner" />
      <div className="news">
        <div className="news-top">
          <div className="message">
            苹果又遭专利诉讼：因Apple TV快速回放功能侵权
          </div>
          <div className="newsDate">发表时间：2019-08-21 14:58</div>
          {newsList.map((item, index) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsMessage;
