import { get } from '@/axios/axios';

// 获取token
export function getToken(params, success, fail) {
    return get(`/api/Check/DiscordLogin`, params, success, fail);
}

// 获取用户信息
export function getUserName(params, success, fail) {
    return get(`/api/Check/GetUserName`, params, success, fail);
}