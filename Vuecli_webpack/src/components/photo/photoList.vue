<template>
    <div class="photo-list">
        <ul class='photoData'>

            <li v-for='(obj,index) in photoList' :key="index">
                <router-link :to="'/photo/photo_player/'+ index">
                    <img :src="obj.src" alt="">
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return {
            photoList: []
        }
    },
    mounted(){
        Axios.get('/static/photo-data.json')
        .then((res)=>{
            this.photoList = res.data.photoData;
        })
    },
}
</script>
<style>
    .photoData{
        position: absolute;
        top     : 1rem;
        bottom  : 1rem;
        width   : 100%;
    }
    .photoData li{
        width : 50%;
        height: 33.33%;
        float : left;
      background: #000000;
    }
    .photoData li img{
         width : 100%;
         height: 100%;
    }
</style>

