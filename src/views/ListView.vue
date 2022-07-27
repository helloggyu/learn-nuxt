<template>
    <ListItem :list="list"/>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import { mapState, mapActions } from 'vuex';
export default {
  components:{
    ListItem,
  },
  computed:{
      ...mapState(['list']),
    },
    methods:{
      ...mapActions({
        showSpinner:'SHOW_SPINNER',
        hideSpinner:'HIDE_SPINNER',
        fetchList:'FETCH_LIST'
      }),
  
      _fetchList:(async function(){
        await this.showSpinner();
  
        await this.fetchList(this.$route.name)
          .then(async ()=>{
            await this.hideSpinner();
          })
          .catch((error)=>{
            console.log(error);
          })
      }),
    },
  
    created(){
      this._fetchList();
    },
}
</script>

<style>

</style>