import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'about',
    component: () => import('../views/home/components/about.vue')
  },
  {
    path: '/Portfolios',
    name: 'portfolios',
    component: () => import('../views/home/components/portfolios.vue')
  },
  {
    path: '/Contact',
    name: 'contact',
    component: () => import('../views/home/components/contact.vue')
  },
  {
    path: '/Team',
    name: 'team',
    component: () => import('../views/home/components/team.vue')
  },
]
const router = createRouter({
  routes,
  //路由模式：history
  history:createWebHistory(),
  //路由模式：hash
  // history: createWebHashHistory(),
  //跳转路由回到顶部
});
router.beforeEach((to,from,next)=>{
  document.body.scrollTo = 0
  document.documentElement.scrollTo = 0
  next()
})
export default router;