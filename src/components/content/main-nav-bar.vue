<template>
  <nav-bar class="nav">
      <div slot="left"><span class="nav-brand">Actopas</span></div>
      <div slot="center">
        <ul class="nav-items">
          <li class="nav-link"><a href="#site">Home</a></li>
          <li class="nav-link"><a href="#blog">Views</a></li>
          <li class="nav-link"><a href="#music">Musics</a></li>
          <li class="nav-link"><a href="#movie">Movies</a></li>
        </ul>
      </div>
      <div slot="right" class="social">
        <a href="https://www.douban.com/people/myron0116/">
        <i 
        @mouseover="doubanIconMouseOver" 
        @mouseout="doubanIconMouseOut"
        class='iconfont i-el-icon-default-douban'
        :style="{color:doubanColor}"></i></a>
        <a href="https://weibo.com/myron0116/">
        <i 
        @mouseover="weiboIconMouseOver" 
        @mouseout="weiboIconMouseOut"
        class='iconfont i-el-icon-default-Weibo'
        :style="{color:weiboColor}"></i></a>
        <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU1NDcwMjcwOQ==&scene=124&uin=&key=&devicetype=Windows+10+x64&version=63030073&lang=zh_CN&a8scene=7&fontgear=2">
        <i 
        @mouseover="weixinIconMouseOver" 
        @mouseout="weixinIconMouseOut"
        class='iconfont i-el-icon-default-WeChat'
        :style="{color:weixinColor}"></i></a>
        <a href="https://twitter.com/MYRONSUEN">
        <i 
        @mouseover="twitterIconMouseOver" 
        @mouseout="twitterIconMouseOut"
        class='iconfont i-ei-icon-default-twitter'
        :style="{color:twitterColor}"></i></a>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from '../common/nav-bar'

export default {
    name:'MainNavBar',
  data() {
    return {
      doubanColor:'',
      weixinColor:'',
      weiboColor:'',
      twitterColor:''
    };
  },
  components:{
    NavBar
  },
  methods:{
    doubanIconMouseOver(){
      this.doubanColor = 'rgb(88, 203, 106)'

    },
    doubanIconMouseOut(){
      this.doubanColor = ''
    },
    weixinIconMouseOver(){
      this.weixinColor = 'rgb(141, 200, 27)'

    },
    weixinIconMouseOut(){
      this.weixinColor = ''
    },
    weiboIconMouseOver(){
      this.weiboColor = 'rgb(245, 100, 103)'

    },
    weiboIconMouseOut(){
      this.weiboColor = ''
    },
    twitterIconMouseOver(){
      this.twitterColor = 'rgb(93, 215, 252)'

    },
    twitterIconMouseOut(){
      this.twitterColor = ''
    }
  }
}
</script>

<style>
@import "nav-bar.css";
:root{

    /*      Theme colors        */
    --text-gray: #3f4954;
    --text-light : #686666da;
    --bg-color: #0f0f0f;
    --white: #ffffff;
    --midnight: #104f55;
}
body{
  margin: 0;
  padding: 0;
}

</style>