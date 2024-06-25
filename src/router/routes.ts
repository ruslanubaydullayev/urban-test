import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/Index.vue'),
  },
  {
    path: '/region',
    name: 'Region',
    component: () => import('@/pages/region/index.vue'),
  },
  {
    path: '/region/edit/:id',
    name: 'RegionEdit',
    component: () => import('@/pages/region/edit/slug.vue'),
  }
] as RouteRecordRaw[]
