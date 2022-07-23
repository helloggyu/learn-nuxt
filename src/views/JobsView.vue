<template>
  <div><div v-for="(job,i) in jobs" :key="i">{{job.title}}</div></div>
</template>

<script>
import { fetchJobsList } from '../api/index'
export default {
  data(){
    return{
      jobs:[]
    }
  },
  created(){
    var vm=this;
   fetchJobsList()
    .then(response=>vm.jobs=response.data)
    .catch(error=>console.log(error))
  }
  
}
</script>

<style>

</style>