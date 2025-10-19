import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/Index.vue'
import IndexTwo from '../pages/IndexTwo.vue'
import IndexThree from '../pages/IndexThree.vue'
import IndexFour from '../pages/IndexFour.vue'
import IndexFive from '../pages/IndexFive.vue'
import IndexSix from '../pages/IndexSix.vue'
import IndexSeven from '../pages/IndexSeven'
import RegisterClient from '@/pages/Auth/RegisterClient.vue'
import RegiserConsultant from '@/pages/Auth/RegiserConsultant.vue'
import RegisterOffice from '@/pages/Auth/RegisterOffice.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
   {
    path: '/registerClient',
    name: 'RegisterClient',
    component: RegisterClient,
    props: { initialType: 'client', initialStep: 0 },
  },
  {
    path: '/regiserConsultant', // كما طلبت بالضبط
    name: 'RegiserConsultant',
    component: RegiserConsultant,
    props: { initialType: 'consultant', initialStep: 0 },
  },
  {
    path: '/registerOffice', // كما طلبت بالضبط
    name: 'RegisterOffice',
    component: RegisterOffice,
    props: { initialType: 'consultant', initialStep: 0 },
  },
  // {
  //   path:'/index-three',
  //   name:'index-three',
  //   component:IndexThree
  // },
  // {
  //   path:'/index-four',
  //   name:'index-four',
  //   component:IndexFour
  // },
  // {
  //   path:'/index-five',
  //   name:'index-five',
  //   component:IndexFive
  // },
  // {
  //   path:'/index-six',
  //   name:'index-six',
  //   component:IndexSix
  // },
  // {
  //   path:'/index-seven',
  //   name:'index-seven',
  //   component:IndexSeven
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
