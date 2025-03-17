import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import SettingPage from '../views/SettingPage.vue';
import ProfilePage from '../views/settings/ProfilePage.vue';
import NotificationPage from '../views/settings/NotificationPage.vue';
import LanguagePage from '../views/settings/LanguagePage.vue';
import DesignPage from '../views/settings/DesignPage.vue';
import InfoPage from '../views/settings/InfoPage.vue';
import HelpPage from '../views/settings/HelpPage.vue';
import SafetyPage from '../views/settings/SafetyPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/login-page'
  },
  {
    path: '/login-page',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/home-page',
    name: 'Home',
    component: HomePage, 
    //meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    redirect: '/setting-page'
  },
  {
    path: '/setting-page',
    name: 'Settings',
    component: SettingPage
  },
  {
    path: '/profile-page',
    name: 'profile',
    component: ProfilePage
  },
  {
    path: '/notification-page',
    name: 'Notification',
    component: NotificationPage
  },
  {
    path: '/language-page',
    name: 'Language',
    component: LanguagePage
  },
  {
    path: '/design-page',
    name: 'Design',
    component: DesignPage
  },
  {
    path: '/info-page',
    name: 'Info',
    component: InfoPage
  },
  {
    path: '/help-page',
    name: 'Help',
    component: HelpPage
  },
  {
    path: '/safety-page',
    name: 'Safety',
    component: SafetyPage
  }
]





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('jwt');
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Umleitung auf die Login-Seite, wenn der Benutzer nicht authentifiziert ist
    next('/login-page');
  } else {
    next(); // Weiter zur angeforderten Seite
  }
});

export default router
