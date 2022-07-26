<template>
  <div class="ask-view">
     <ListItem :list="fetchedAsk" />
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue'
export default {
  components:{
    ListItem,
  },
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
   &__list{
    margin: 0;
    padding: 0;
   }
  &__post{
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  &__points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b882;
  }
  &__title{
    margin: 0;
  }
  &__info{
    color: #828282;
  }
}
</style>