<template>
   <div>
    <UserDetail :info="userInfo">
      <template #userInfo>
        <div>name: {{userInfo.id}}</div>
      </template>
      <template #time>
        <span>
        {{'Joined ' + userInfo.created}}, {{userInfo.karma}}
        </span>
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
    this.$store.dispatch('SHOW_SPINNER');
    const userName=this.$route.params.id;
    this.$store.dispatch('FETCH_USER',userName);
    this.$store.dispatch('HIDE_SPINNER');
  }
  
}
</script>

<style>

</style>