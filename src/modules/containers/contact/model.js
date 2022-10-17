/*
 * @Descripttion: 
 * @Author: yqy
 * @Date: 2022-10-17 14:12:00
 * @LastEditors: yqy
 * @LastEditTime: 2022-10-17 17:54:51
 */

import cycle from '../../../static/images/cycle.png'
import ecology from '../../../static/images/ecology.png'
import process from '../../../static/images/process.png'

// 模式说明
export const modelData = [
    {img: cycle, type: '全周期', text: '从生产生命周期到用户全生命周期解决了企业边际效益递减的问题'},
    {img: process, type: '全流程', text: '从串联到并联，解决了大规模制造与个性化定制间的矛盾'},
    {img: ecology, type: '全生态', text: '从封闭到开放，用户—资源—企业共创共赢共享，非线性矩阵发展'}
];

export const typeList = [
    {name: '市场营销', value: 1}, 
    {name: '研发设计', value: 2}, 
    {name: '用户服务', value: 3}
];

export const projectData = {
    1: [
        {name: 'FID-KISA', text: '集成式多场景角色社群交互中心'},
        {name: 'TASK-FICO', text: '多任务协同设计中心'},
        {name: 'MCM-FICO', text: '多场景社群交互矩阵用户交互'},
        {name: 'NICE-FI', text: '情景感知引擎，成套配置器协同'},
        {name: 'ROPE-SDI', text: '交易订单处理中台交互系统'},
        {name: 'CUBA-UNC', text: '大规模定制业务运营门户支撑系统'}
    ],
    2: [
        {name: 'RAPHAE', text: '产品创新设计的众创孵化中心'},
        {name: 'RAPHAE1', text: '产品创新设计的众创孵化中心'},
        {name: 'DOCIS', text: '依托超级计算机集成在云端'},
        {name: 'AAA-C', text: '实现物流全周期商务过程管理'},
        {name: 'CAS-S', text: '效率管理的全方位管理'},
        {name: 'COX-X', text: '高扩展性的构建分布式系统'}
    ],
    3: [
        {name: 'ZVN-A', text: '数字化生产制造执行系统'},
        {name: 'RITV-A', text: '数字化生产制造执行系统'},
        {name: 'LSO-A', text: '实验室信息管理系统'},
        {name: 'CIVO-N', text: '智能排产解决方案'},
        {name: 'WWOI-A', text: '生产过程控制与调度自动化系统'},
        {name: 'COID-SA', text: '一个弹性的基于云的工业物联网'}
    ]
} 