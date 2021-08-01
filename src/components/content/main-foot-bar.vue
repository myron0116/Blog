<template>
   <div class="footer">
      <div class="container">
        <foot-bar data-aos="fade-right" data-aos-delay="200">
          <h2 slot="title">About us</h2>
          <p slot="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis iure, autem nulla tenetur repellendus.</p>
        </foot-bar>
        <foot-bar data-aos="fade-right" data-aos-delay="200">
          <h2 slot="title">New Letters</h2> 
          <div slot="para">
            <p>Stay update with our latest</p>
            <input type="text" placeholder="Email" class="email-input">
            <span>
                <i class="iconfont i-queding"></i>
            </span>
          </div>
        </foot-bar>
        <foot-bar data-aos="fade-left" data-aos-delay="200">
          <h2 slot="title">Developer</h2>
          <img :src='img' alt="developer" class="dev-pic" slot="para">
          </foot-bar>
        <foot-bar data-aos="fade-left" data-aos-delay="200">
          <h2 slot="title">Video Media</h2>
          <div class="footer-soc" slot="para">
            <p>If You'd Like to</p>
            <a href="https://www.youtube.com/channel/UCAM2FRgx1QhLP-TBwv-gGDw">
            <i class='iconfont i--youtube'></i></a>
            <a href="https://space.bilibili.com/5158257">
            <i class='iconfont i-bilibili'></i></a>
          </div>
        </foot-bar>
      </div>
  </div>
</template>

<script>
import FootBar from '../common/foot-bar.vue'
import AOS from 'aos'

export default {
  name:'MainFootBar',
  components:{
      FootBar
  },
data() {
  return {
    img: require("@/assets/img/developer-img.jpg"),
  };
},
}
AOS.init();
</script>

<style>
@import 'foot-bar.css'
</style>