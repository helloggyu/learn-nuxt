<template>
  <div class="item-view">
    <p>
      {{itemInfo.title}}
      <small class="item-view__info">{{itemInfo.points}}points by {{itemInfo.user}} {{itemInfo.time_ago}} | {{itemInfo.comments_count}} comments</small>
    </p>
    
    <p>{{itemInfo.content}}</p>
  </div>
</template>

<script>
export default {
  computed:{
    itemInfo(){
      return this.$store.state.item;
    }
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
  color:#828282;
  font-size: 14px;
  padding: 20px;
  word-wrap: break-word;
  word-break:break-word;
  white-space: pre-line; 
}
.item-view__info{
  font-size:9px;
}
</style>