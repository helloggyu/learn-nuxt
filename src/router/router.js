import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/News.vue'
import AskView from '../views/News.vue'
import JobsView from '../views/News.vue'

Vue.use(VueRouter);

export const router =new VueRouter({
  routes:[
    {
      path:'/news',
      component:'NewsView',
    },
    {
      path:'/ask',
      component:'AskView',
    },
    {
      path:'/jobs',
      component:'JobsView',
    },
  ]
});