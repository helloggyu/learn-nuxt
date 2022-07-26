<template>
   <div>
    <UserDetail :info="userInfo">
      <template #userInfo>
        <div>name: {{userInfo.id}}</div>
      </template>
      <span name='time'>
        {{'Joined ' + userInfo.created}}, {{userInfo.karma}}
      </span>
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