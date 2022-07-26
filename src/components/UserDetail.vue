<template>
  <div class="user-datail">
    <div class="user-datail__container">
      <div>
         <i class="fas fa-user"></i>
      </div>
      <div class="user-datail__discription">
        <div>name: {{info.id}}</div>
        <div>karma: {{info.karma}}</div>
        <div>created: {{info.created}}</div>
          <!-- <router-link :to="`/user/${userInfo.user}`">
            {{userInfo.user}}
          </router-link>
        <div class="user-datail__time">{{userInfo.time_ago}}</div>  -->
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name:'UserDetail',
  props:{
    info:{
      type: [Array,Object],
      default: () => ({}),
    }
  }
}
</script>

<style lang="scss" scoped>
.user-datail{
  padding: 0.5rem;
  color:#828282;
  font-size: 1rem;
  &__time{
     font-size: 0.7rem;
  }
}
.user-datail__container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user{
  font-size: 2.5rem;
}
.user-datail__discription{
  padding-left: 8px;
}
</style>