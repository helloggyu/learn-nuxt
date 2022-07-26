<template>
  <div>
    <ListItem :list="this.$store.state.news" />
  </div>
  
</template>

<script>
import ListItem from '../components/ListItem.vue'
export default {
  components:{
    ListItem,
  },
  created(){
    this.$store.dispatch('SHOW_SPINNER');
    this.$store.dispatch('FETCH_NEWS');
    this.$store.dispatch('HIDE_SPINNER');
  }
}
</script>

<style lang="scss" scoped>

</style>