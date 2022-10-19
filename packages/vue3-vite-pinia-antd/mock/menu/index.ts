import { MockMethod } from 'vite-plugin-mock';
import { BASE_URL } from '../../src/config';
import { resultSuccess } from '../_util';

const menuList = [
  {
    name: '首页',
    icon: 'home',
    url: `${BASE_URL}home`,
    id: 'sub1',
  },
  {
    name: '组件示例',
    icon: 'AppstoreOutlined',
    url: '',
    id: 'sub2',
    children: [
      {
        name: '组件1',
        icon: '',
        id: 'sub2-1',
        url: `${BASE_URL}assembly/demo1`,
      },
    ],
  },
  {
    name: '插件示例',
    icon: 'icon',
    url: '',
    id: 'sub3',
    children: [
      {
        name: '插件1',
        icon: '',
        id: 'sub3-1',
        url: `${BASE_URL}pluginunit/demo1`,
      },
      {
        name: '视频',
        icon: '',
        id: 'sub3-2',
        url: `${BASE_URL}pluginunit/video`,
      },
    ],
  },
  {
    name: '图表',
    icon: 'icon',
    url: '',
    id: 'sub4',
    children: [
      {
        name: '折线图',
        icon: '',
        id: 'sub4-1',
        url: `${BASE_URL}chart/line/demo1`,
      },
      {
        name: '面积图',
        icon: '',
        id: 'sub4-2',
        url: `${BASE_URL}chart/area/demo1`,
      },
      {
        name: '柱形图',
        icon: '',
        id: 'sub4-3',
        url: `${BASE_URL}chart/column/demo1`,
      },
      {
        name: '条形图',
        icon: '',
        id: 'sub4-4',
        url: `${BASE_URL}chart/bar/demo1`,
      },
      {
        name: '饼图',
        icon: '',
        id: 'sub4-5',
        url: `${BASE_URL}chart/pie/demo1`,
      },
      {
        name: '双轴图',
        icon: '',
        id: 'sub4-6',
        url: `${BASE_URL}chart/dualAxes/demo1`,
      },
      {
        name: '仪表盘',
        icon: '',
        id: 'sub4-7',
        url: `${BASE_URL}chart/gauge/demo1`,
      },
      {
        name: '水波图',
        icon: '',
        id: 'sub4-8',
        url: `${BASE_URL}chart/liquid/demo1`,
      },
      {
        name: '子弹图',
        icon: '',
        id: 'sub4-9',
        url: `${BASE_URL}chart/bullet/demo1`,
      },
      {
        name: '散点图',
        icon: '',
        id: 'sub4-10',
        url: `${BASE_URL}chart/scatter/demo1`,
      },
      {
        name: '玫瑰图',
        icon: '',
        id: 'sub4-11',
        url: `${BASE_URL}chart/rose/demo1`,
      },
      {
        name: '玫瑰图',
        icon: '',
        id: 'sub4-12',
        url: `${BASE_URL}chart/heatmap/demo1`,
      },
      {
        name: '雷达图',
        icon: '',
        id: 'sub4-13',
        url: `${BASE_URL}chart/radar/demo1`,
      },
      {
        name: '矩形树图',
        icon: '',
        id: 'sub4-14',
        url: `${BASE_URL}chart/treemap/demo1`,
      },
      {
        name: '漏斗图',
        icon: '',
        id: 'sub4-15',
        url: `${BASE_URL}chart/funnel/demo1`,
      },
      {
        name: '瀑布图',
        icon: '',
        id: 'sub4-16',
        url: `${BASE_URL}chart/waterfall/demo1`,
      },
      {
        name: '词云图',
        icon: '',
        id: 'sub4-17',
        url: `${BASE_URL}chart/wordCloud/demo1`,
      },
      {
        name: '旭日图',
        icon: '',
        id: 'sub4-18',
        url: `${BASE_URL}chart/sunburst/demo1`,
      },
      {
        name: '对称条形图',
        icon: '',
        id: 'sub4-19',
        url: `${BASE_URL}chart/bidirectionalBar/demo1`,
      },
      {
        name: '玉珏图',
        icon: '',
        id: 'sub4-20',
        url: `${BASE_URL}chart/radialBar/demo1`,
      },
      {
        name: '箱型图',
        icon: '',
        id: 'sub4-21',
        url: `${BASE_URL}chart/box/demo1`,
      },
      {
        name: '股票图',
        icon: '',
        id: 'sub4-22',
        url: `${BASE_URL}chart/stock/demo1`,
      },
    ],
  },
  {
    name: '结果页',
    icon: 'icon',
    url: '',
    id: 'sub5',
    children: [
      {
        name: '成功',
        icon: '',
        id: 'sub5-1',
        url: `${BASE_URL}result/success`,
      },
      {
        name: '失败',
        icon: '',
        id: 'sub5-2',
        url: `${BASE_URL}result/error`,
      },
      {
        name: 'page403',
        icon: '',
        id: 'sub5-3',
        url: `${BASE_URL}result/page403`,
      },
      {
        name: 'page404',
        icon: '',
        id: 'sub5-4',
        url: `${BASE_URL}result/page404`,
      },
      {
        name: 'page500',
        icon: '',
        id: 'sub5-5',
        url: `${BASE_URL}result/page500`,
      },
    ],
  },
  {
    name: '关于',
    icon: 'FileOutlined',
    url: `${BASE_URL}about`,
    id: 'sub6',
  },
];

export default [
  {
    url: '/mock-api/menu/list',
    timeout: 1000,
    method: 'get',
    response: () => resultSuccess(menuList),
  },
] as MockMethod[];
