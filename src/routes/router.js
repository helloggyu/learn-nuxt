import Vue from 'vue'
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
//import createListView from '../views/CreateListView';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

 const router = new VueRouter({
   mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/news',
    },
    {
      path:'/news',
      name:'news',
      component:NewsView,
      // component:createListView('NewsView'),
    },
    {
      path:'/ask',
      name:'ask',
      component:AskView,
      //component:createListView('AskView'),
    },
    {
      path:'/jobs',
      name:'jobs',
      component:JobsView,
      //component:createListView('JobsView'),
    },
    {
      path:'/item/:id',
      component:ItemView,
    },
    {
      path:'/user/:id',
      component:UserView,
    }
  ],
});

export default router;
