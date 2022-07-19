<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
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
  padding: 8px;
  .router-link-exact-active{
    color: #fd616d;
  }
}
a{
  color: white;
}
</style>