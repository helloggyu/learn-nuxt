<template>
  <div class="ask-view">
    <p v-for="(item,i) in fetchedAsk" :key="i">
      <router-link :to="`item/${item.id}`">{{item.title}}</router-link>
      <small>( {{item.time_ago}} by {{item.user}} )</small>
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

<style lang="scss" scoped>
.ask-view{
  padding: 0.5rem;
}
</style>