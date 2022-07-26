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
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style lang="scss" scoped>

</style>