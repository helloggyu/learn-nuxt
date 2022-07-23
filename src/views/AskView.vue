<template>
  <div>
    <p v-for="(item,i) in fetchedAsk" :key="i">
      <a :href="item.url"> {{item.title}} </a>
      <small>{{item.time_ago}} by {{item.user}} </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters([
      'fetchedAsk'
    ]),
    // ...mapState({
    //   fetchedAsk: state=>state.asks
    // })
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>