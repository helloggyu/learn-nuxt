<template>
  <div class="user-datail">
    <div class="user-datail__container">
      <div>
         <i class="fas fa-user"></i>
      </div>
      <div class="user-datail__discription">
        <slot name="userInfo"></slot>
        <div class="user-datail__time">
         <slot name="time"></slot>
        </div>
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