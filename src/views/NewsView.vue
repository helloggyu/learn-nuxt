<template>
  <div><div v-for="(user,i) in users" :key="i">{{user.title}}</div></div>
</template>

<script>
import axious from 'axios'
export default {
  data(){
    return{
      users:[]
    }
  },
  created(){
    var vm=this;
    axious.get('https://api.hnpwa.com/v0/news/1.json')
    .then(response=>vm.users=response.data)
    .catch(error=>console.log(error))
  }
}
//	https://api.hnpwa.com/v0/news/1.json
</script>

<style>

</style>