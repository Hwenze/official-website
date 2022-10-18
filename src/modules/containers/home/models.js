/*
 * @Author: HWZ
 * @Date: 2022-10-14 16:09:31
 * @LastEditors: HWZ
 * @LastEditTime: 2022-10-14 17:28:24
 * @FilePath: \official-website\src\modules\containers\home\models.js
 * @Description: 
 * 
 * Copyright (c) 2022 by SIE, All Rights Reserved. 
 */

import personal from '../../../static/images/personal.png';
import enterprise from '../../../static/images/enterprise.png';
import data from '../../../static/images/data.png';
import news1 from '../../../static/images/news1.png';
import news2 from '../../../static/images/news2.png';
import news3 from '../../../static/images/news3.png';
import honor1 from '../../../static/images/2014.png';
import honor2 from '../../../static/images/2016.png';
import honor3 from '../../../static/images/2018.png';

export const fullmeasureList = [
    { img: personal, title: '个人用户', text: '模块制定、众创定制、专属定制满足您的多种个性化需求' },
    { img: enterprise, title: '企业用户', text: '为您提供跨行业跨领域的多种企业解决方案及云服务' },
    { img: data, title: '平台支撑', text: '平台为您提供各种开发工具，数据化运营，持续创新' },
];

export const newsList = [
    { img: news1, title: '企业IT规划发展的三个时期', text: 'IT规划不是摆设，它必须在得到切实可行的实施之后才能发挥出促进业务、提升管理的作用，否则就是一堆废纸。因此，“落地' },
    { img: news2, title: '前苹果高管: 微软本可避免WP失败', text: '日前，Medium专栏作者、前苹果高管Jean-Louis Gassée在一篇关于微软Windows Phone的' },
    { img: news3, title: '看3D电影能让你的大脑更灵活', text: '看3D电影让人享受新奇的视觉体验，英国伦敦戈德史密斯大学一项研究显示，这还有助脑力提升研究人员招募100多名志愿者' },
];

export const honorList = [
    { img: honor1, text: '2014XXX互联网年度产品' },
    { img: honor2, text: '2016XXX互联网年度产品' },
    { img: honor3, text: '2018XXX互联网年度产品' }
];
