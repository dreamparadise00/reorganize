<template>
  <div>
        <!--{{$store.state.count}}-->
    {{count}}
    <button @click="addAction">add</button>
    <button @click="reduceAction"> reduce</button>
  </div>
</template>

<script>
import ComponentsB from "./ComponentsB.vue";
import ComponentsC from "./ComponentsC.vue";
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
    data(){
        return {
            c:"111"
        }
    },
  /*methods:{
        change(c){
            this.c = c;
        }
  },*/
  /*method:mapMutations(["add","reduce"]),*/
  method:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction'])
  },
  /*computed:{
    count(){
      return this.$store.state.count;
    }
  },*/


    /*computed:mapState({
      count:state=>state.count
    }),*/
  /*computed:mapState(["count"]),*/
  computed  : {
    ...mapState(["count","count1"]),
    ...mapGetters(['count2'])
  },


components:{
    ComponentsB,
    ComponentsC
  }
}
</script>
<style>


</style>
