<template>
  <div class="item-view">
    <section>
      <!-- 질문상세 -->
      <div class="item-view__container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="item-view__discription">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{fetchedItem.user}}
          </router-link>
          <div class="item-view__time">{{fetchedItem.time_ago}}</div>
        </div>
      </div>
      <h2>{{fetchedItem.title}}</h2>
      
    </section>

    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"/>
    </section>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed:{
      ...mapGetters(['fetchedItem'])
  },
  created(){
    const id=this.$route.params.id;
    console.log(id)
    this.$store.dispatch('FETCH_ITEM',id);
  }
}
</script>

<style lang="scss" scoped>
.item-view{
  padding: 0.5rem;
  color:#828282;
  word-wrap: break-word;
  word-break:break-word;
  white-space: pre-line; 
  font-size: 1rem;
  &__time{
     font-size: 0.7rem;
  }
}
.item-view__container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user{
  font-size: 2.5rem;
}
.item-view__discription{
  padding-left: 8px;
}
</style>