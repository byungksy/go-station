import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{path: '', component: () => import('pages/Login.vue')}],
  },
  {
    path: '/channels',
    component: () => import('layouts/MainLayout.vue'),
    children: [{path: '', component: () => import('pages/Index.vue')}],
  },
  {
    path: '/channel',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: 'stream', component: () => import('pages/Index.vue')},
      {path: 'record', component: () => import('pages/Index.vue')},
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
