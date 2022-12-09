import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import InitPage from "@/views/NavBarComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/connexion'
  },
  {
    path: '/bde/',
    component: InitPage,
    children: [
      {
        path: '',
        redirect: '/bde/home'
      },
      {
        path: 'save',
        component: () => import('@/views/SavePage.vue')
      },
      {
        path: 'document',
        component: () => import('@/views/DocumentPage.vue')
      },
      {
        path: 'account',
        component: () => import('@/views/AccountPage.vue')
      },
      {
        path: 'home',
        component: () => import('@/views/EventsPage.vue')
      },
      {
        path: 'calendar',
        component: () => import('@/views/CalendarPage.vue') 
      }
    ]
  },
  {
    path: '/connexion',
    name: "connexion",
    component: () => import('@/views/WelcomePage.vue')
  },
  {
    path: '/identification',
    name: "identification",
    component: () => import('@/views/ConnexionPage.vue')
  },
  {
    path: '/inscription',
    name: "inscription",
    component: () => import('@/views/InscriptionPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
