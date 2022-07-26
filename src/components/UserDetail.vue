<template>
   <div class="item-view">
    <div class="item-view__container">
      <i class="fas fa-user"></i>
    </div>
    <div class="item-view__discription">
          <!-- <router-link :to="`/user/${fetchedItem.user}`">
            {{fetchedItem.user}}
          </router-link>
          <div class="item-view__time">{{fetchedItem.time_ago}}</div> -->
    </div>
  </div>
</template>

<script>
export default {

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
.fa-user{
  font-size: 2.5rem;
}
</style>