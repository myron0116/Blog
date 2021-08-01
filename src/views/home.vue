<template>
<div>
    <main-site-bar></main-site-bar>
    <main-blog-bar></main-blog-bar>
    <main-music-bar></main-music-bar>
    <main-movie-bar></main-movie-bar>
    </div>
</template>

<script>
import MainSiteBar from '../components/content/main-site-bar'
import MainBlogBar from '../components/content/main-blog-bar.vue'
import MainMusicBar from '../components/content/main-music-bar.vue'
import MainMovieBar from '../components/content/main-movie-bar.vue'

import AOS from 'aos'
export default{
    name:'Home',
components:{
  MainSiteBar,
  MainBlogBar,
  MainMusicBar,
  MainMovieBar,
  AOS
},
}
</script>

<style>

</style>