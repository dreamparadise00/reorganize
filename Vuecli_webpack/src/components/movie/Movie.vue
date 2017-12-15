<template>
  <div class="movie">
    <common-header title="movie" bgColor="rgb(33, 150, 243)"></common-header>
    <common-Middlet></common-Middlet>
    <router-view></router-view>
    <div class="loading" v-show="isShow">
      <img src="/static/img/loading.gif" alt="">
    </div>

    <common-footer></common-footer>
  </div>
</template>
<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import CommonFooter from '@/components/common/CommonFooter'
  import CommonMiddlet from '@/components/common/CommonMiddlet'
  import movieList from './movieList.vue'
  import Axios from 'axios'
  export default {
    data () {
      return {
        movieList: [],
      isShow   : false
      }
    },
    components:{
      CommonHeader,
      CommonMiddlet,
      CommonFooter,
      movieList
    }
  }
</script>
<style>
  .list-box{
    margin-top   : 2rem;
    margin-bottom: 1.5rem;
    overflow: auto;
  }
  .loading{
    margin-bottom: 3rem;
    text-align   : center;
  }
</style>
