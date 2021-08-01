<template>
  <div id="app">
    <main-nav-bar></main-nav-bar>
    <router-view></router-view>
    <main-foot-bar></main-foot-bar>
    <copyright></copyright>
  </div>
</template>
<script>
import MainNavBar from './components/content/main-nav-bar'
import MainFootBar from './components/content/main-foot-bar.vue'
import Copyright from './components/content/copyright.vue'

import AOS from 'aos'
export default{
components:{
  MainNavBar,
  MainFootBar,
  Copyright,
  AOS
},
}
</script>
<style>
@media only screen and (min-width: 1000px) and (max-width: 1367px) {
  #app .nav-bar{justify-content: space-around;}
  #app .site-bar{height: 73vh;}
  #app .main-blog {background-size: contain;}
  #app .movie div img{height: 25vh;}
  #app #carousel div img{width: 22vw;}
  #app #carousel{ overflow-x: hidden}
  #app .single-movie-item .detials {height: 23.8vh;}
  #app .single-movie-item .detials {top:-3.1vh}
  #app .single-movie-item .detials .desc{font-size: 8px; }
  #app .footer .container > div{padding: 2rem 0 0 0;}
}
@media only screen and (max-width: 600px) {

#app .iconfont{font-size: 4vw; padding: 1vw;}
#app .nav .social{width: auto;}
#app .nav .nav-bar{justify-content: space-between;}
#app .nav .nav-items{display: none;}
#app .main-site-bar h1{font-size: .6em;}
#app .main-blog {background-image: url(''); display: initial;}
#app .blog-item{padding-top: 10vh; width: 80vw; text-align: center; margin-left: 10vw;}
#app .blog-item img{width: 80vw;}
#app .blog-nav{padding-top: 1vh; width: ''; margin-left: 10vw;}
#app .blog-nav li{width: 70vw;}
#app .music-bar{padding-top: 20vh;}
#app #carousel{overflow: auto; overflow-x: hidden; padding-top: 10vh}
#app #carousel div img{width: 200px;}
#app .main-movie .movie-title{display: none;}
#app .main-movie .movie{display: initial; }
#app .main-movie .movie .detials{display: none;}
#app .main-movie .movie .single-movie-item{ padding: 5vh; padding-left: 14vh;}
#app .movie div img{width: 40vw; height: auto;}
#app .footer .container{display: initial; }
#app .footer .container > div{padding: 0; width: 50vw;}
#app .footer{padding: 15vw}
}
</style>