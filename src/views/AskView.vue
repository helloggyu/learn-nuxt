<template>
  <div>
    <div><div v-for="(ask,i) in asks" :key="i">{{ask.title}}</div></div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index'
export default {
  data(){
    return{
      asks:[]
    }
  },
  created(){
    var vm=this;
    fetchAskList()
    .then(response=>vm.asks=response.data)
    .catch(error=>console.log(error))
  }
}
</script>

<style>

</style>