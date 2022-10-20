import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SuccessView from '../views/SuccessView.vue';
import FailureView from '../views/FailureView.vue';
import TimeoutView from '../views/TimeoutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
    {
      path: '/bad',
      name: 'bad',
      component: FailureView
    },
    {
      path: '/timeout',
      name: 'timeout',
      component: TimeoutView
    }
  ]
})

export default router
