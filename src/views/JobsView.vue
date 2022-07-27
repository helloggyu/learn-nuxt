<template>
  <div>
    <ListItem :list="jobList"  />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ListItem from '../components/ListItem.vue'

export default {
  components:{
    ListItem,
  },
  computed:{
    ...mapState({
      jobList:'jobs'
    }),
  },
  methods:{
    ...mapActions({
      showSpinner:'SHOW_SPINNER',
      hideSpinner:'HIDE_SPINNER',
      fetchJobs:'FETCH_JOBS'
    }),
    _fetchJobs:(async function(){
      await this.showSpinner();

      await this.fetchJobs()
        .then(async ()=>{
          await this.hideSpinner();
        })
        .catch((error)=>{
          console.log(error);
        })
    }),
  },
  created(){
    this._fetchJobs();
  }
  
}
</script>

<style lang="scss" scoped>

</style>