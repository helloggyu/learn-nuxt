<template>
  <div class="news-view">
    <ul class="news-view__list">
      <li v-for="(item,i) in this.$store.state.news" :key="i" class="news-view__post">
        <!-- 포인트 영역 -->
        <div class="news-view__points">
          {{item.points}}
        </div>

        <!-- 기타 정보영역 -->
        <div>
          <p class="news-view__title">
            <a :href="item.url">{{item.title}}</a>
          </p>
          <small class="news-view__link">
            {{item.time_ago}} by <router-link :to="`/user/${item.user}`" class="news-view__link"> {{item.user}}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  created(){
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style lang="scss" scoped>
.news-view{
  &__list{
    margin: 0;
    padding: 0;
  }
  &__post{
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
  &__link{
    color: #828282;
  }
}
</style>