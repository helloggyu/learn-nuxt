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
import { mapActions, mapGetters } from 'vuex';
import UserDetail from '../components/UserDetail.vue'
export default {
  components:{
    UserDetail,
  },
  computed:{
    ...mapGetters(['fetchedItem'])
  },
  methods:{
    ...mapActions({
      showSpinner:'SHOW_SPINNER',
      hideSpinner:'HIDE_SPINNER',
      fetchItem:'FETCH_ITEM'
    }),
    _fetchItem:(async function(){
      const id = this.$route.params.id;
      await this.showSpinner();
      await this.fetchItem(id)
        .then(async ()=>{
          await this.hideSpinner();
        })
        .catch((error)=>{
          console.log(error);
        })
    }),
  },
  created(){
    this._fetchItem();
  }
}
</script>

<style lang="scss" scoped>
.item-view{
  padding: 0.5rem;
  color:#828282;
}
</style>