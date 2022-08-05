<template>
  <div class="header">
    <v-btn to="/news" :ripple="false" text> News </v-btn>
    <span class="header__divider"></span>
    <v-btn to="/ask" :ripple="false" text> Ask </v-btn>
    <span class="header__divider"></span>
     <v-btn to="/jobs" :ripple="false" text> Jobs </v-btn>
  </div>
</template>

<script>
export default {
name:'ToolBar'
}
</script>

<style lang="scss" scoped>
.header{
  color: white;
  background: #29b59b;
  display: flex;
  padding: 10px;
  .router-link-exact-active{
    color: #273849;;
  }
  display: flex;
  align-items: center;
}
a{
  color: white;
}
a:hover{
  color: white;
}
.header__divider{
  width: 2px;
  height: 15px;
  background: #fff;
  margin: 0 5px;
}
</style>