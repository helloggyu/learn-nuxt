<template>
<div id="app">
  <ToolBar></ToolBar>
  <transition name="page">
    <router-view></router-view>
  </transition>
  
</div>
</template>

<script>

import ToolBar from './components/ToolBar';
export default {
  components:{
    ToolBar,
  },
}

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
