<template>

  <blog-bar class="main-blog" id="blog">
      <div class="blog-item" slot="blog-item">
      <img src="../../assets/img/blog-cover.jpg" alt="" data-aos="fade-right" data-aos-delay="125" slot="blog-img">
      <div class="blog-info" slot="blog-info">
      <h2 data-aos="fade-up-left" data-aos-delay="125">Pale Saints︱I Just Want to Make a Record</h2>
      <p data-aos="fade-up-left"  data-aos-delay="150">我看见暴风雨中的涟漪，将我卷入；我会将危险扔向暗处， 不沾染你，跟我走吧，带你航行这片声音之海。 </p>
      </div>
    </div>
    <div class="blog-nav" slot="blog-nav">
      <ul>
        <li >人围的舞台，暂时很大</li>
        <li>罗恩的一天#the day of the Ron</li>
        <li>外星人打算用大手笔收购此网站</li>
        <li>做好损益表，慢慢调研</li>
        <li>Here Comes Tonic</li>
        <li>Johnny Unusual</li>
        <li>过滤水，酸中带碱​​​</li>
        <li>鱼的时代将要结束</li>
        <li>吸管终将果肉撕裂</li>
        <li>合法外卖，马上洗牌</li>
      </ul>
    </div>
</blog-bar>
</template>

<script>
import BlogBar from '../common/blog-bar.vue'
import AOS from 'aos'
export default {
    name:"MainBlogBar",
components:{
    BlogBar,
}
}
AOS.init()
</script>

<style>
.main-blog{
  height: 100vh;
  background: url('../../assets/img/bcgblog.jpg') no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-around;
}
.blog-item{
  padding-top: 35vh;
  width: 50vw;
}
.blog-item img{
width: 50vw;
}
.blog-nav{
 padding-top: 22vh;
 width: 20vw;
 padding-right: 10vw;
}
.blog-info{
 transform:skewY(173deg)
}
.blog-nav ul{
   padding-left: 1vw;
}
.blog-nav li{
  font-style:initial;
  font-weight: 1000;
    list-style-type: none;
  margin: 2vh;
  padding: 1vh;
  color:rgb(204 , 51 , 66);
   transform:skewY(173deg);
   position: relative;
   background: url(../../assets/img/list-bcg.jpg) no-repeat;
   background-position-y: 20px;
}
.blog-nav li::before {
    content: '';
    position: absolute;
    top: 30px;
    width: 100%;
    height: 1em;
    background:
        linear-gradient(135deg, transparent, transparent 45%, #0B5287, transparent 55%, transparent 100%),
        linear-gradient(45deg, transparent, transparent 45%, #04CDD7, transparent 55%, transparent 100%);
    background-size: 0.5em 0.5em;
    background-repeat: repeat-x, repeat-x;}
</style>