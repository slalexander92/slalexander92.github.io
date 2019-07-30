import Vue from 'vue'
import VueRouter from 'vue-router'
// import PageNotFound from '@/pages/404/404'
import Home from '../components/Home';
import About from '../components/AboutMe';
import Contact from '../components/ContactForm';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})

export default router
