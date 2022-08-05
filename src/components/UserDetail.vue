<template>
  <div class="user-datail">
    <v-card class="user-datail__container">
      <div>
         <i class="fas fa-user"></i>
      </div>
     <div class="user-datail__discription">
        <slot name="userInfo"></slot>
        <div class="user-datail__time">
         <slot name="time"></slot>
        </div>
      </div>           
    </v-card>
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
  margin-top: 100px; 
  color:#828282;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  &__time{
     font-size: 0.8rem;
  }

}
.user-datail__container{
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 300px;
  
}
.fa-user{
  font-size: 2rem;
}
.user-datail__discription{
  padding-left: 15px;
}
</style>