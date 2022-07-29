import { createRouter, createWebHistory } from 'vue-router'
import Blog from '../pages/blog'

export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Blog
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: () => import(/* webpackChunkName: "sobre" */ '../pages/sobre')
    },
    {
      path: '/descricao',
      name: 'Descrição',
      component: () => import(/* webpackChunkName: "descricao" */ '../pages/descricao')
    }
  ]
})
