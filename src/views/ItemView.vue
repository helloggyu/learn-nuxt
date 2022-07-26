<template>
  <div class="item-view">
    <section>
      <UserDetail :info="fetchedItem">
        <template #userInfo>
            <router-link :to="`/user/${fetchedItem.user}`">
              {{fetchedItem.user}}
            </router-link>
        </template>
        <template #time>
           {{'Posted ' + fetchedItem.time_ago}}
        </template>
      </UserDetail>
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
import UserDetail from '../components/UserDetail.vue'
export default {
  components:{
    UserDetail,
  },
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
}
</style>