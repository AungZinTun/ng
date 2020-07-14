import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/Index.vue'),
    },
    {
      path: '/about',
      name: 'About Us',
      component: () => import('@/views/about/Index.vue'),
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('@/views/portfolio/Index.vue'),
    },
    {
      path: '/Articles',
      name: 'Articles',
      component: () => import('@/views/blog/Index.vue'),
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: () => import('@/views/job/Index.vue'),
    },
    {
      path: '/meeting',
      name: 'Meeting',
      component: () => import('@/views/meeting/Index.vue'),
    },
    {
      path: '/publications',
      name: 'Publications',
      component: () => import('@/views/publication/Index.vue'),
    },
    {
      path: '/blog-post',
      name: 'Blog Post',
      component: () => import('@/views/blog-post/Index.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/contact/Index.vue'),
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: () => import('@/views/pricing/Index.vue'),
    },
  ],
})
