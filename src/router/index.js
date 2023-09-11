import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import artistDetailView from '../views/artist/artistDetailView.vue'
import trackDetailView from '../views/track/trackDetailView.vue'


import SearchView from '../views/searchView.vue'
import artistCreateView from '@/views/artist/artistCreateView.vue'
import artistUpdateViewVue from '@/views/artist/artistUpdateView.vue'
import trackCreateViewVue from '@/views/track/trackCreateView.vue'
import trackUpdateViewVue from '@/views/track/trackUpdateView.vue'
import loginViewVue from '@/views/Acount/loginView.vue'
import registerViewVue from '@/views/Acount/registerView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/artist/:id',
    name: 'artistDetail',
    component: artistDetailView
  },
  {
    path: '/artist/create',
    name: 'artistCreate',
    component: artistCreateView
  },
  {
    path: '/artist/update/:id',
    name: 'artistupdate',
    component: artistUpdateViewVue
  },



  {
    path: '/track/:id',
    name: 'trackDetail',
    component: trackDetailView
  },
  {
    path: '/track/create',
    name: 'trackCreate',
    component: trackCreateViewVue
  },
  {
    path: '/track/update/:id',
    name: 'trackUpdate',
    component: trackUpdateViewVue
  },
  {
    path: '/search/',
    name: 'search',
    component: SearchView
  },
  {
    path: '/login/',
    name: 'login',
    component: loginViewVue
  },
  {
    path: '/register/',
    name: 'register',
    component: registerViewVue
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
