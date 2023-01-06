import axios from 'axios';

import { localStorage } from '@/utils/utils';

const token = localStorage.getStorage('token') || '';
const delfaultTimeout = 10 * 1000;
axios.defaults.baseURL = 'https://www.brickproxy.net';

// 抽出方法
const toResponeFn = (response, sucessFn, failFn) => {
  if (response.status === 200) {
    sucessFn(response.data);
  } else {
    failFn(response);
  }
};

// 公共方法
const commonRequestFn = (method, url, data, sucessFn, failFn, timeout = delfaultTimeout) => {
  axios({
    method,
    url,
    headers: {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Token': token
    },
    data: JSON.stringify(data),
    timeout
  }).then(function (response) {
    toResponeFn(response, sucessFn, failFn);
  }).catch(function (error) {
    failFn(error);
  });
};

const get = (url, params, sucessFn, failFn, timeout = delfaultTimeout) => {
  axios({
    method: 'get',
    url,
    headers: {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Token': token
    },
    params,
    timeout
  }).then(function (response) {
    toResponeFn(response, sucessFn, failFn)
  }).catch(function (error) {
    failFn(error);
  });
};

const postJson = (url, data, sucessFn, failFn, timeout = delfaultTimeout) => {
  commonRequestFn('post', url, data, sucessFn, failFn, timeout);
};

const putJson = (url, data, sucessFn, failFn, timeout = delfaultTimeout) => {
  commonRequestFn('put', url, data, sucessFn, failFn, timeout);
};

const del = (url, sucessFn, failFn, timeout = delfaultTimeout) => {
  commonRequestFn('delete', url, data, sucessFn, failFn, timeout);
};

export {
  get,
  postJson,
  putJson,
  del
};
