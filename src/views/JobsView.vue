<template>
  <div class="jobs-view">
    <p v-for="(item,i) in this.$store.state.jobs" :key="i">
      <a :href="item.url"> {{item.title}} </a>
      <small>{{item.time_ago}}, {{item.domain}} </small>
    </p>
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('FETCH_JOBS');
  }
  
}
</script>

<style lang="scss" scoped>
.jobs-view{
  padding: 0.5rem;
}
</style>