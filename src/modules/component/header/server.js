import { get } from '@/axios/axios';

// 获取token
export function getToken(params, success, fail) {
    return get(`/api/Check/DiscordLogin`, params, success, fail);
}
