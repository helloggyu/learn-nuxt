<template>
  <div class="jobs-view">
    <ListItem :list="this.$store.state.jobs" :viewJobs="true" />
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
export default {
  components:{
    ListItem,
  },
  created(){
    this.$store.dispatch('FETCH_JOBS');
  }
  
}
</script>

<style lang="scss" scoped>
.jobs-view{
  &__list{
    margin: 0;
    padding: 0;
  }
  &__post{
    list-style: none;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;

  }
  &__points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b882;
  }
  &__info{
    color: #828282;
  }
}
</style>