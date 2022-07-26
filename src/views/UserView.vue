<template>
   <div>
    <!-- <p>name: {{userInfo.id}}</p>
    <p>karma: {{userInfo.karma}}</p>
    <p>created: {{userInfo.created}}</p> -->
    <UserDetail :info="userInfo"></UserDetail>
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