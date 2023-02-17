import axios from 'axios';

import { localStorage } from '@/utils/utils';

const token = localStorage.getStorage('token') || '';
const delfaultTimeout = 10 * 1000;
axios.defaults.baseURL = 'https://www.brickproxy.net:81';

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
  (response) => {
    if (response && response.status === 200) {
      return response;
    } else {
      return {
        data: {
          code: 401,
          message: "token过期"
        },
        status: 401
      };
    }
  },
  (error) => {
    const err = JSON.parse(JSON.stringify(error));
    if (err.message.indexOf('401') !== -1) {
      window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1060132522282983424&redirect_uri=https%3A%2F%2Fwww.brickproxy.net%2F%23%2Flogin&response_type=code&scope=identify%20guilds%20guilds.join%20email'
    }
  }
);

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
