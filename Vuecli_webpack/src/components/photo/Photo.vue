<template>
  <div class="photo">
      <common-header title="photo" bgColor="rgb(63, 81, 181)"></common-header>
    <router-view>
    </router-view>
      <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import Axios from 'axios'
export default {
    data(){
        return {
            photoList:[]
        }
    },

  components:{
      CommonHeader,
      CommonFooter
  }
}
</script>
<style>

</style>
