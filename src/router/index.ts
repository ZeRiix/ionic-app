import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import HomePage from "@/views/HomePage.vue";
import InitPage from "@/views/InitPage.vue";
import connexionPage from "@/views/ConnexionPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/connexion'
  },
  {
    path: '/ionic/',
    component: InitPage,
    children: [
      {
        path: '',
        redirect: '/ionic/home'
      },
      {
        path: 'store',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'message',
        component: () => import('@/views/MessagePage.vue')
      },
      {
        path: 'contact',
        component: () => import('@/views/ContactPage.vue')
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue')
      }
    ]
  },
  {
    path: '/connexion',
    name: "connexion",
    component: () => import('@/views/ConnexionPage.vue')
  },
  {
    path: '/identification',
    name: "identification",
    component: () => import('@/views/IdentificationPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
