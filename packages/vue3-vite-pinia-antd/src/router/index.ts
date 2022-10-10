import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { type App } from 'vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/assembly/demo1',
    name: 'assembly-demo1',
    component: () => import('@/views/assembly/demo1')
  },
  {
    path: '/chart/line/demo1',
    name: `chart-line-demo1`,
    component: () => import('@/views/chart/line/demo1')
  },
  {
    path: '/chart/area/demo1',
    name: `chart-area-demo1`,
    component: () => import('@/views/chart/area/demo1')
  },
  {
    path: '/chart/column/demo1',
    name: `chart-column-demo1`,
    component: () => import('@/views/chart/column/demo1')
  },
  {
    path: '/chart/pie/demo1',
    name: `chart-pie-demo1`,
    component: () => import('@/views/chart/pie/demo1')
  },
  {
    path: '/chart/bar/demo1',
    name: `chart-bar-demo1`,
    component: () => import('@/views/chart/bar/demo1')
  },
  {
    path: '/chart/dualAxes/demo1',
    name: `chart-dualAxes-demo1`,
    component: () => import('@/views/chart/dualAxes/demo1')
  },
  {
    path: '/chart/gauge/demo1',
    name: `chart-gauge-demo1`,
    component: () => import('@/views/chart/gauge/demo1')
  },
  {
    path: '/chart/liquid/demo1',
    name: `chart-liquid-demo1`,
    component: () => import('@/views/chart/liquid/demo1')
  },
  {
    path: '/chart/bullet/demo1',
    name: `chart-bullet-demo1`,
    component: () => import('@/views/chart/bullet/demo1')
  },
  {
    path: '/chart/scatter/demo1',
    name: `chart-scatter-demo1`,
    component: () => import('@/views/chart/scatter/demo1')
  },
  {
    path: '/chart/heatmap/demo1',
    name: `chart-heatmap-demo1`,
    component: () => import('@/views/chart/heatmap/demo1')
  },
  {
    path: '/chart/wordCloud/demo1',
    name: `chart-wordCloud-demo1`,
    component: () => import('@/views/chart/wordCloud/demo1')
  },
  {
    path: '/chart/sunburst/demo1',
    name: `chart-sunburst-demo1`,
    component: () => import('@/views/chart/sunburst/demo1')
  },
  {
    path: '/chart/radialBar/demo1',
    name: `chart-radialBar-demo1`,
    component: () => import('@/views/chart/radialBar/demo1')
  },
  {
    path: '/chart/box/demo1',
    name: `chart-box-demo1`,
    component: () => import('@/views/chart/box/demo1')
  },
  {
    path: '/chart/bidirectionalBar/demo1',
    name: `chart-bidirectionalBar-demo1`,
    component: () => import('@/views/chart/bidirectionalBar/demo1')
  },
  {
    path: '/chart/waterfall/demo1',
    name: `chart-waterfall-demo1`,
    component: () => import('@/views/chart/waterfall/demo1')
  },
  {
    path: '/chart/funnel/demo1',
    name: `chart-funnel-demo1`,
    component: () => import('@/views/chart/funnel/demo1')
  },
  {
    path: '/chart/treemap/demo1',
    name: `chart-treemap-demo1`,
    component: () => import('@/views/chart/treemap/demo1')
  },
  {
    path: '/chart/radar/demo1',
    name: `chart-radar-demo1`,
    component: () => import('@/views/chart/radar/demo1')
  },
  {
    path: '/chart/rose/demo1',
    name: `chart-rose-demo1`,
    component: () => import('@/views/chart/rose/demo1')
  },
  {
    path: '/chart/stock/demo1',
    name: `chart-stock-demo1`,
    component: () => import('@/views/chart/stock/demo1')
  },
  {
    path: '/pluginunit/demo1',
    name: `pluginunit-demo1`,
    component: () => import('@/views/pluginunit/demo1')
  },
  {
    path: '/pluginunit/video',
    name: `pluginunit-video`,
    component: () => import('@/views/pluginunit/video/index.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('@/views/todo')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about')
  },
  {
    path: '/result/page404',
    name: '404',
    component: () => import('@/views/result/page404')
  },
  {
    path: '/result/page403',
    name: '403',
    component: () => import('@/views/result/page403')
  },
  {
    path: '/result/page500',
    name: '500',
    component: () => import('@/views/result/page500')
  },
  {
    path: '/result/error',
    name: 'error',
    component: () => import('@/views/result/error')
  },
  {
    path: '/result/success',
    name: 'success',
    component: () => import('@/views/result/success')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: '404'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export async function setupRouter(app: App) {
  app.use(router);

  // 路由准备就绪后挂载APP实例
  // await router.isReady();
}
export default router;
