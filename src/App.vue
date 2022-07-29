<template>
  <v-app id="app">
    <SpinnerView v-if="spinnerVisible"></SpinnerView>
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar';
import SpinnerView from './components/SpinnerView';
import { mapState} from 'vuex';
export default {
  name: 'App',

  components: {
    ToolBar,
    SpinnerView,
  },

    computed:{
    ...mapState(['spinnerVisible']),

  },

  data: () => ({
    //
  }),
};
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  font-weight: 600;
  color: #34495e;
}
a:hover{
  color: #42b882;
  text-decoration: underline;
}
a.router-link-exact-active{
  text-decoration: underline;
}
/* router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

</style>
