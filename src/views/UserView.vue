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
import { mapState, mapActions } from 'vuex';
export default {
  components:{
    UserDetail,
  },
  computed:{
    ...mapState({
      userInfo:'user'
    }),
  },
  methods:{
    ...mapActions({
      showSpinner:'SHOW_SPINNER',
      hideSpinner:'HIDE_SPINNER',
      fetchUser:'FETCH_USER'
    }),
    _fetchUser:(async function(){
      await this.showSpinner();
      const userName=this.$route.params.id;
      await this.fetchUser(userName)
        .then(async ()=>{
          await this.hideSpinner();
        })
        .catch((error)=>{
          console.log(error);
        })
    }),
  },
  created(){
    this._fetchUser();
  }
  
}
</script>

<style>

</style>