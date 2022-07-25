<template>
  <div class="header">
    <router-link to="/news">News</router-link> 
    <span class="header__divider"></span>
    <router-link to="/ask">Ask</router-link>
    <span class="header__divider"></span>
    <router-link to="/jobs">Jobs</router-link>
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