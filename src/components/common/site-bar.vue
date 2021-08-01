<template>
  <div class="site-bar">
     <div class="main-site-bar">
     <slot name="name"></slot>
     <slot name="queto"></slot>
     </div>
  </div>
</template>

<script>
export default {
name:'SiteBar'
}
</script>

<style>
@font-face {
  font-family: CfPunk;
  src: url(CfPunk.ttf);
}
.site-bar{
  width: 100%;
  height: 100vh;
  background-image: url('../../assets/img/bcgpictu.jpg');
  background-repeat: no-repeat; 
  background-size:cover;
  margin: 0 auto;
font-family: 'CfPunk', cursive;
font-size: 40px;
}
.site-bar .main-site-bar{
  width: 80vw;
  margin: 0 auto;
  text-align: center;
  padding-top: 35vh;
  color: antiquewhite;
  text-shadow:3px 3px 3px black; 
 
}
</style>