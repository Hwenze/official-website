/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-14 16:11:57
 * @LastEditors: HWZ
 * @Description: DASHBOARD
 */

import { useEffect, useState } from 'react';
import { Input, notification, TreeSelect } from 'antd';

import { tableHeader, calculateList } from './model';
import { getOrderList, getBandwidth, getGenerateProxy } from './server';

import './index.scss';

const Dashboard = () => {
  const [number, setNumber] = useState(2000);
  const [orderList, setOrderList] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [treeValue, setTtreeValue] = useState([]); // 已勾选的树
  // 流量
  const [flow, setFlow] = useState({
    totalBandWidth: 0,
    usedBandWidth: 0,
    bwExpireDate: '',
  });

  // 获取历史订单
  const getOrderListFn = () => {
    getOrderList(
      { page, limit: 10 },
      (res) => {
        console.log(res, 123);
      },
      (err) => {}
    );
  };

  // 获取总流量
  const getBandwidthFn = () => {
    getBandwidth(
      {},
      (res) => {
        if (res && res.code === 200) {
          setFlow(res.result);
        } else {
          notification.error({
            message: 'system error',
            description: (res && res.msg) || 'Your login has expired',
          });
        }
      },
      (err) => {}
    );
  };

  // 生成代理
  const getGenerateProxyFn = () => {
    const newArr = [],
      params = [];
    const Proportion = number / treeValue.length; // 每项的比例
    treeValue.forEach((item) => {
      JSON.parse(JSON.stringify(calculateList)).forEach((it) => {
        if (item === it.title) {
          newArr.push(it.value);
        }
      });
    });

    newArr.forEach((item) => {
      item.forEach((it) => {
        it.proxy1Num = Math.ceil(it.proxy1Num * Proportion);
        it.proxy2Num = Math.ceil(it.proxy2Num * Proportion);
      });

      params.push(item[0]);
      if (item[1]) params.push(item[1]);
    });

    setLoading(true);

    getGenerateProxy(params).then(
      (res) => {
        if (res && res.code === 200) {
          const arr = (res.result && res.result.split('\n')) || [];
          setText(res.result);
          setProxy([...arr]);
        } else {
          notification.error({
            message: 'Tips',
            description:
              classify === '3'
                ? 'Coming Soon'
                : res?.message || 'Your login has expired',
          });
        }
        setLoading(false);
      },
      (error) => {
        notification.error({
          message: 'Tips',
          description: "You haven't login , please login first",
        });
        setLoading(false);
      }
    );

    getGenerateProxy(
      { num: number },
      (res) => {},
      (err) => {}
    );
  };

  // number输入
  const numChange = (e) => {
    setNumber(e.target.value);
  };

  // 点击页面跳转
  const pageJumpFn = (type) => {
    if (type === 'up') {
      if (page === 1) return false;
      setPage(page - 1);
    }

    if (type === 'down') {
      if (orderList.length < 10 || page * 10 >= count) return false;
      setPage(page + 1);
    }
  };

  // 复制文本
  const copyTranslateResult = () => {
    const copyDOM = document.querySelector('.text-box');

    if (copyDOM.innerHTML !== '') {
      const range = document.createRange(); //创建一个range

      window.getSelection().removeAllRanges(); //清楚页面中已有的selection

      range.selectNode(copyDOM); // 选中需要复制的节点

      window.getSelection().addRange(range); // 执行选中元素

      const successful = document.execCommand('copy'); // 执行 copy 操作

      if (successful) {
        notification.success({
          message: 'Copy succeeded',
        });
      } else {
        notification.error({
          message: 'Copy failure',
        });
      }

      // 移除选中的元素
      window.getSelection().removeAllRanges();
    } else {
      notification.info({
        message: 'No content',
      });
    }
  };

  // 处理打乱后下载的格式
  const cdText = () => {
    let str = '';
    proxy.forEach((item) => {
      str = str + '' + item + '\n';
    });
    return [str];
  };

  // 下载文本
  const downloadTxtFile = () => {
    if (text) {
      const element = document.createElement('a');
      const file = new Blob(cdText(), { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'proxy.txt';
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    } else {
      notification.info({
        message: 'Please generate proxy',
      });
    }
  };

  // 重置清空
  const initReset = () => {
    setNumber(2000);
  };

  // Country选择
  const treeChange = (value) => {
    setTtreeValue(value);
  };

  const treeDataFn = () => {
    return calculateList.map((item, index) => {
      return {
        title: item.title,
        value: item.title,
        key: index + '',
      };
    });
  };

  // 树组件配置
  const tProps = {
    treeData: treeDataFn(),
    value: treeValue,
    onChange: treeChange,
    treeCheckable: true,
    showCheckedStrategy: 'SHOW_CHILD',
    placeholder: 'Please select',
    maxTagCount: 0,
    style: {
      width: '100%',
      height: '0.7rem',
    },
  };

  useEffect(() => {
    getOrderListFn();
  }, [page]);

  useEffect(() => {
    // getBandwidthFn();
  }, []);

  return (
    <div id='Dashboard'>
      <div className='action-bar'>
        <div className='bar-top'>
          <div className='select-box'>
            <TreeSelect className='select-option' {...tProps} />
            <Input
              className='entering'
              type='number'
              bordered={false}
              value={number}
              onChange={numChange}
            />
          </div>
          <div className='bar-btn'>GENERATE PROXIES</div>
        </div>

        <div className='bar-content'>
          <p>Generated Proxies</p>
        </div>

        <div className='bar-footer'>
          <div className='footer-btn' onClick={() => initReset()}>
            RESET
          </div>
          <div className='footer-btn' onClick={() => copyTranslateResult()}>
            COPY
          </div>
          <div className='footer-btn' onClick={() => downloadTxtFile()}>
            EXPORT
          </div>
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
                <p className='text'>
                  {(flow.totalBandWidth / 1000000000).toFixed(2)}GB
                </p>
              </div>
              <div className='content-li'>
                <p className='title'>Expiry date</p>
                <p className='text'>{flow.bwExpireDate}</p>
              </div>
              <div className='content-li'>
                <p className='title'>Availiable Data</p>
                <p className='text'>
                  {(
                    (flow.totalBandWidth - flow.usedBandWidth) /
                    1000000000
                  ).toFixed(2)}
                  GB
                </p>
              </div>
            </div>

            {/* <div className='content'>
              <div className='content-li'>
                <p className='title'>User Name</p>
                <p className='text'>VeRONaUudamen</p>
              </div>
              <div className='content-li'>
                <p className='title'>Total Data</p>
                <p className='text'>
                  {(flow.totalBandWidth / 1000000000).toFixed(2)}GB
                </p>
              </div>
              <div className='content-li'>
                <p className='title'>Expiry date</p>
                <p className='text'>{flow.bwExpireDate}</p>
              </div>
              <div className='content-li'>
                <p className='title'>Availiable Data</p>
                <p className='text'>
                  {(
                    (flow.totalBandWidth - flow.usedBandWidth) /
                    1000000000
                  ).toFixed(2)}
                  GB
                </p>
              </div>
            </div> */}
          </div>
        </div>

        <div className='orders-history'>
          <div className='history-top'>Orders History</div>

          <div className='table'>
            <div className='table-header'>
              {tableHeader.map((item) => {
                return (
                  <span style={{ width: `${item.width}rem` }} key={item.title}>
                    {item.title}
                  </span>
                );
              })}
            </div>

            {orderList.map((item, index) => {
              return (
                <div className='table-header table-content' key={`${index}e`}>
                  {tableHeader.map((it) => {
                    return (
                      <span
                        className='table-column'
                        style={{ width: `${it.width}rem` }}
                        title={item[it.value]}
                        key={item[it.value]}
                      >
                        {item[it.value]}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div className='history-footer'>
            <div
              className='footer-btn long-btn'
              onClick={() => pageJumpFn('up')}
            >
              PREVIOUS
            </div>
            <div className='footer-btn' onClick={() => pageJumpFn('down')}>
              NEXT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
