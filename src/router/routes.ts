import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{path: '', component: () => import('pages/Index.vue')}],
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    // component: () => import('layouts/LoginLayout.vue'),
    children: [
      {name: 'login', path: '', component: () => import('pages/Login.vue')},
    ],
  },
  {
    name: 'channels',
    path: '/channels',
    component: () => import('layouts/MainLayout.vue'),
    children: [{path: '', component: () => import('pages/Index.vue')}],
  },
  {
    path: '/channel',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'live-channel',
        path: 'stream',
        component: () => import('pages/Index.vue'),
      },
      {
        name: 'record-channel',
        path: 'record',
        component: () => import('pages/Index.vue'),
      },
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
