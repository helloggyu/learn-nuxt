<template>
  <div><div v-for="(user,i) in users" :key="i">{{user.title}}</div></div>
</template>

<script>
import {fetchNewsList} from '../api/index'
export default {
  data(){
    return{
      users:[]
    }
  },
  created(){
    var vm=this;
   fetchNewsList()
    .then(response=>vm.users=response.data)
    .catch(error=>console.log(error))
  }
}
//	https://api.hnpwa.com/v0/news/1.json
</script>

<style>

</style>