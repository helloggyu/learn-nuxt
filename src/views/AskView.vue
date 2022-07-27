<template>
  <div class="ask-view">
     <ListItem :list="fetchedAsk" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ListItem from '../components/ListItem.vue'
export default {
  components:{
    ListItem, 
  },
  computed:{
    // ...mapState({
    //   fetchedAsk: state=>state.asks
    // })
    ...mapGetters([
      'fetchedAsk'
    ]),
  },
  methods:{
    ...mapActions({
      showSpinner:'SHOW_SPINNER',
      hideSpinner:'HIDE_SPINNER',
      fetchAsk:'FETCH_ASK'
    }),
    _fetchAsk:(async function(){
      await this.showSpinner();

      await this.fetchAsk()
        .then(async ()=>{
          await this.hideSpinner();
        })
        .catch((error)=>{
          console.log(error);
        })
    }),
  },
  created(){
    this._fetchAsk();
  }
}
</script>

<style lang="scss" scoped>
</style>