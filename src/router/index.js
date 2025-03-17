import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import SettingsPage from '../views/SettingsPage.vue';
import ProfilePage from '../views/settings/ProfilePage.vue';
import NotificationsPage from '../views/settings/NotificationsPage.vue';
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
    path: '/home',
    redirect: '/home-page'
  },
  {
    path: '/home-page',
    name: 'Home',
    component: HomePage, 
    //meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    redirect: '/settings-page'
  },
  {
    path: '/settings-page',
    name: 'Settings',
    component: SettingsPage
  },
  {
    path: '/profile-page',
    name: 'profile',
    component: ProfilePage
  },
  {
    path: '/notifications-page',
    name: 'Notifications',
    component: NotificationsPage
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
