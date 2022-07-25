<template>
  <div class="ask-view">
    <ul class="ask-view__list">
      <li v-for="(item,i) in fetchedAsk" :key="i" class="ask-view__post">
        <div class="ask-view__points">
          {{item.points}}
        </div>
        <div>
          <p class="ask-view__title"><router-link :to="`item/${item.id}`">{{item.title}}</router-link></p>
          <small class="ask-view__info">( {{item.time_ago}} by {{item.user}} )</small>
        </div>
      </li>
    </ul>
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
}
</style>