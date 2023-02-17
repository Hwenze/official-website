import { get } from '@/axios/axios';

// 获取分页查询订单
export function getOrderList(params, success, fail) {
    return get(`/api/OrderList/Load`, params, success, fail);
}

// 获取总流量
export function getBandwidth(params, success, fail) {
    return get(`/api/Usage/GetBandwidth`, params, success, fail);
}

// 生成代理
export function getGenerateProxy(params, success, fail) {
    return get(`/api/ProxyGenerage/GenerateProxy`, params, success, fail);
}
