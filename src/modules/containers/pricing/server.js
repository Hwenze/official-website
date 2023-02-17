import { get } from '@/axios/axios';

// 获取折扣码
export function getDiscountKeyInfo(params, success, fail) {
    return get(`/api/ProxyBuy/DiscountInfo`, params, success, fail);
}

// 购买代理
export function getProxyBuy(params, success, fail) {
    return get(`/api/ProxyBuy/Get`, params, success, fail);
}
