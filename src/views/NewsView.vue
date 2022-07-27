<template>
  <div>
    <ListItem :list="newsList" />
  </div>
  
</template>

<script>
import ListItem from '../components/ListItem.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components:{
    ListItem,
  },
  computed:{
    ...mapState({
      newsList:'news'
    }),
  },
  methods:{
    ...mapActions({
      showSpinner:'SHOW_SPINNER',
      hideSpinner:'HIDE_SPINNER',
      fetchNews:'FETCH_NEWS'
    }),

    _fetchNews:(async function(){
      await this.showSpinner();

      await this.fetchNews()
        .then(async ()=>{
          await this.hideSpinner();
        })
        .catch((error)=>{
          console.log(error);
        })
    }),
  },

  created(){
    this._fetchNews();
  },
}
</script>

<style lang="scss" scoped>
</style>