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

<style lang="scss">
@import '@/scss/reset.scss';
a{
  text-decoration: none;
  font-weight: 600;
  color: #34495e;
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
