import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';
import SearchView from '../views/SearchView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [

  {
    path: '/',
    name: 'SearchView',
    component: SearchView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
