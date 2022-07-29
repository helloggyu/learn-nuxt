import Vue from 'vue'
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
//import createListView from '../views/CreateListView';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
<<<<<<< HEAD
=======

>>>>>>> 1e1fee36428752037b325c1891bc74a38f99b532

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
<<<<<<< HEAD
      component:AskView,
=======
     component:AskView,
>>>>>>> 1e1fee36428752037b325c1891bc74a38f99b532
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
