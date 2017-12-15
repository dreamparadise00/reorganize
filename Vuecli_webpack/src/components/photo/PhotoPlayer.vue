<template>
  <div class="bg">
    <v-touch class='player'@swiperight="prev" @swipeleft="next">
      {{photoIndex}}
    <!--  <div class="add">
        <button @click="add()">add</button>
      </div>
      <div class="prev">
        <button @click="prev()">prev</button>
      </div>-->
      <img :src="photoList[photoIndex].src " @ v-if="isShow">
    </v-touch>
  </div>



</template>
<script>
  import Axios from 'axios'
export default {
  data(){
    return {
      photoList:[],
      isShow:false,
      photoIndex:
          this.$route.params.index

    }
  },
  mounted(){
    Axios.get('/static/photo-data.json')
      .then((res)=>{
        this.photoList = res.data.photoData;
        this.isShow = true;
      })
  },
  methods :{
        /*add :function () {
          console.log("add");
          this.photoIndex++;
          if(this.photoIndex == 24){
              this.photoIndex = 0;
          }
        },
        prev:function () {
          this.photoIndex--;
          if(this.photoIndex == -1){
            this.photoIndex = 23;
          }
        }*/
    next(){
      if(this.photoIndex == this.photoList.length - 1){
        this.photoIndex= 0;
      }else{
        this.photoIndex++;
      }
    },
    prev(){
      if(this.photoIndex == 0){
        this.photoIndex = this.photoList.length - 1;
      }else{
        this.photoIndex--;
      }
    }
  }
}
</script>
<style>
  .bg{
    width: 100%;
    height: 10rem;
    background: #000000;
    padding-top:2rem;

  }
    .player{
        margin-top: 1rem;
    }
    .add {
      margin-top: 2rem;
      float: left;
    }
  .prev{
    margin-top: 2rem;
    float: right;
  }
</style>
