import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CommonHeader from '@/components/common/CommonHeader'
import CommonFooter from '@/components/common/CommonFooter'
import Movie from '@/components/movie/Movie'
import Music from "@/components/music/Music"
import Book from "@/components/book/Book"
import Photo from "@/components/photo/Photo"
import ComponentsA from  "@/components/ComponentsA"
import MovieTop250 from '@/components/movie/MovieTop250'
import Albums from '@/components/music/musicList'
import Player from '@/components/music/MusicPlayer'
import photoData from '@/components/photo/photoList'
import PhotoPlayer from '@/components/photo/PhotoPlayer'
Vue.use(Router)



export default new Router({
  routes: [
    {
      path     : '/',
     redirect:'/movie/top250'
    },
    {
      path     : '/movie',
      component: Movie,
      children : [
        {path:'/movie/top250',component:MovieTop250},
        {path:'/movie/hot',component:MovieTop250},
        {path:'/movie/coming',component:MovieTop250}
      ]

    },
    {
      path     : '/music',
      component: Music,
      redirect : '/music/music_albums',
      children : [
        {path:'/music/music_albums',component:Albums},
        {path:'/music/music_player/:id/:name',component:Player}
      ]
    },
    {
      path     : '/book',
      component: Book
    },
    {
      path     : '/photo',
      component: Photo,
      redirect : '/photo/photo_photoData',
      children : [
        {path:'/photo/photo_photoData',component:photoData},
        {path:'/photo/photo_player/:index',component:PhotoPlayer}
        ]
    }
  ]
})
