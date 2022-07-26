<template>
   <div>
    <UserDetail :info="userInfo">
      <template #userInfo>
        <div>name: {{userInfo.id}}</div>
        <div>karma: {{userInfo.karma}}</div>
      </template>
      <template #time>
        {{userInfo.created}}
      </template>
    </UserDetail>
   </div>
</template>

<script>
import UserDetail from '../components/UserDetail';
export default {
  components:{
    UserDetail,
  },
  computed:{
    userInfo(){
      return this.$store.state.user;
    }
  },
  created(){
    const userName=this.$route.params.id;
    this.$store.dispatch('FETCH_USER',userName);
  }
  
}
</script>

<style>

</style>