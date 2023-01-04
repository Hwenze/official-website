/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-14 16:11:57
 * @LastEditors: HWZ
 * @Description: DASHBOARD
 */

import { Input } from 'antd';

import { tableHeader } from './model';

import './index.scss';

const Dashboard = () => {
  return (
    <div id='Dashboard'>
      <div className='action-bar'>
        <div className='bar-top'>
          <div>
            <Input className='entering' type='number' bordered={false} />
            <div className='tips'>number</div>
          </div>
          <div className='bar-btn'>GENERATE PROXIES</div>
        </div>

        <div className='bar-content'>
          <p>Generated Proxies</p>
        </div>

        <div className='bar-footer'>
          <div className='footer-btn'>COPY</div>
          <div className='footer-btn'>EXPORT</div>
        </div>
      </div>

      <div className='display-bar'>
        <div className='active-plan'>
          <div className='plan-top'>Active Plan</div>
          <div className='plan-content'>
            <div className='content'>
              <div className='content-li'>
                <p className='title'>User Name</p>
                <p className='text'>VeRONaUudamen</p>
              </div>
              <div className='content-li'>
                <p className='title'>Total Data</p>
                <p className='text'>0.00GB</p>
              </div>
              <div className='content-li'>
                <p className='title'>Expiry date</p>
                <p className='text'>YYYY-MM-DD</p>
              </div>
              <div className='content-li'>
                <p className='title'>Availiable Data</p>
                <p className='text'>0GB</p>
              </div>
            </div>

            <div className='content'>
              <div className='content-li'>
                <p className='title'>User Name</p>
                <p className='text'>VeRONaUudamen</p>
              </div>
              <div className='content-li'>
                <p className='title'>Total Data</p>
                <p className='text'>0.00GB</p>
              </div>
              <div className='content-li'>
                <p className='title'>Expiry date</p>
                <p className='text'>YYYY-MM-DD</p>
              </div>
              <div className='content-li'>
                <p className='title'>Availiable Data</p>
                <p className='text'>0GB</p>
              </div>
            </div>
          </div>
        </div>

        <div className='orders-history'>
          <div className='history-top'>Orders History</div>

          <div className='table'>
            <div className='table-header'>
              {tableHeader.map((item) => {
                return (
                  <span style={{ width: `${item.width}rem` }}>
                    {item.title}
                  </span>
                );
              })}
            </div>
          </div>

          <div className='history-footer'>
            <div className='footer-btn long-btn'>PREVIOUS</div>
            <div className='footer-btn'>NEXT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
