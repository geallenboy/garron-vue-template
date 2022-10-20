import { createRouter, createWebHistory } from 'vue-router';
import { BASE_URL } from '@/config';


const routes= [
  {
    path: `${BASE_URL}`,
    name: 'home',
    component: () => import('@/views/home/index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export async function setupRouter(app) {
  app.use(router);

}
export default router;
