<template>
<div class="movie-route">
  <ul>
      <li>
           <img src="../assets/img/movie/1.jpg" alt=""></li>
      <li> 
           <img src="../assets/img/movie/2.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/3.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/4.jpg" alt=""></li>
      <li> 
           <img src="../assets/img/movie/5.jpg" alt=""></li>
      <li> 
           <img src="../assets/img/movie/6.jpg" alt=""></li>
      <li> 
           <img src="../assets/img/movie/7.jpg" alt=""></li>
      <li>
            <img src="../assets/img/movie/8.jpg" alt=""></li>
      <li>
            <img src="../assets/img/movie/9.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/10.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/11.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/12.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/13.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/14.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/15.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/16.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/17.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/18.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/19.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/20.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/21.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/22.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/23.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/24.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/25.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/26.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/27.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/28.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/29.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/30.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/31.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/32.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/33.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/34.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/35.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/36.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/37.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/38.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/39.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/40.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/41.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/42.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/43.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/44.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/45.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/46.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/47.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/48.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/49.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/50.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/51.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/52.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/53.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/54.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/55.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/56.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/57.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/58.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/59.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/60.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/61.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/62.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/63.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/64.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/65.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/66.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/67.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/68.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/69.jpg" alt=""></li>
      <li>
           <img src="../assets/img/movie/70.jpg" alt=""></li>
  </ul>
  </div>
</template>

<script>
export default {
name:'Movie'
}
</script>

<style>
:root {
  --columns: 3;
  --yellow: rgba(238, 188, 31, 1);
  --pink: rgba(255, 82, 145, 1);
  --blue: rgba(64, 98, 187, 1);
  --green: rgba(6, 141, 126, 1);
  --white: rgba(248, 255, 229, 1);
}

 .movie-route body{
  background-color: #182028;
}

.movie-route ul{
  display:grid;
  grid-template-columns: repeat(var(--columns),1fr);
  margin: 200px -40px;
}

.movie-route li{
  grid-column-end: span 2;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  margin-top: -50%;
list-style-type:none
}

.movie-route li:nth-child(2n){
  grid-column-start:2;
}

.movie-route li::before, .movie-route  li::after {
  content:'';
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-size: 50% 100%,50% 100%;
  background-position: left, right;
}

.movie-route li::before{
  z-index: -10;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  -webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  background-repeat: no-repeat;
  background-image: linear-gradient(-45deg,var(--yellow) 53.5%,var(--green) 53.5%,var(--green) 60%,var(--yellow) 60%), linear-gradient(45deg,var(--yellow) 53.5%,var(--green) 53.5%,var(--green) 60%,var(--yellow) 60%);
}

.movie-route li::after{
  clip-path: polygon(100% 50%, 50% 100%, 0 50%, 20% 50%, 50% 80%,80% 50%);
  -webkit-clip-path: polygon(100% 50%, 50% 100%, 0 50%, 20% 50%, 50% 80%,80% 50%);
  background-repeat: no-repeat;
  background-image: linear-gradient(45deg,var(--yellow) 40%,var(--green) 40%), linear-gradient(-45deg,var(--yellow) 40%,var(--green) 40%);
}

.movie-route li:nth-child(2n)::before{
  background-image: linear-gradient(-45deg,var(--pink) 53.5%,var(--blue) 53.5%,var(--blue) 60%,var(--pink) 60%), linear-gradient(45deg,var(--pink) 53.5%,var(--blue) 53.5%,var(--blue) 60%,var(--pink) 60%);
}

.movie-route li:nth-child(2n)::after{
  background-image: linear-gradient(45deg,var(--pink) 40%,var(--blue) 40%), linear-gradient(-45deg,var(--pink) 40%,var(--blue) 40%);
}

.movie-route li:nth-child(5n)::before{
  background-image: linear-gradient(-45deg,var(--green) 53.5%,var(--pink) 53.5%,var(--pink) 60%,var(--green) 60%), linear-gradient(45deg,var(--green) 53.5%,var(--pink) 53.5%,var(--pink) 60%,var(--green) 60%);
}

.movie-route li:nth-child(5n)::after{
  background-image: linear-gradient(45deg,var(--green) 40%,var(--pink) 40%), linear-gradient(-45deg,var(--green) 40%,var(--pink) 40%);
}

.movie-route li:nth-child(7n)::before,.movie-route  li:nth-child(7n-4)::before{
  background-image: linear-gradient(-45deg,var(--blue) 53.5%,var(--white) 53.5%,var(--white) 60%,var(--blue) 60%), linear-gradient(45deg,var(--blue) 53.5%,var(--white) 53.5%,var(--white) 60%,var(--blue) 60%);
}

.movie-route li:nth-child(7n)::after, .movie-route li:nth-child(7n-4)::after{
  background-image: linear-gradient(45deg,var(--blue) 40%,var(--white) 40%), linear-gradient(-45deg,var(--blue) 40%,var(--white) 40%);
}

.movie-route li:nth-child(9n)::before,.movie-route li:nth-child(9n-5)::before{
  background-image: linear-gradient(-45deg,var(--white) 53.5%,var(--green) 53.5%,var(--green) 60%,var(--white) 60%), linear-gradient(45deg,var(--white) 53.5%,var(--green) 53.5%,var(--green) 60%,var(--white) 60%);
}

.movie-route li:nth-child(9n)::after,.movie-route li:nth-child(9n-5)::after{
  background-image: linear-gradient(45deg,var(--white) 40%,var(--green) 40%), linear-gradient(-45deg,var(--white) 40%,var(--green) 40%);
}

.movie-route img{
  position: absolute;
  width: 43%;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-60%);
  box-shadow: 5px -5px 10px rgba(0, 0, 0, 0.3);
  transition-property: transform;
  transition-duration: .3s;
}

.movie-route img:hover{
  transform: translateX(-40%) translateY(-70%) rotatez(25deg);
}
@media (min-width:450px){
  .movie-route ul{
    margin: 190px 40px;
  }
}
@media (min-width:600px){
  :root {
    --columns: 5;
  }
  .movie-route li:nth-child(2n){
    grid-column-start:auto;
  }
  .movie-route li:nth-child(4n-1){
    grid-column-start:2;
  }
}
@media (min-width:900px){
  :root {
    --columns: 7;
  }
 .movie-route li:nth-child(4n-1){
    grid-column-start:auto;
  }
  .movie-route li:nth-child(6n-2){
    grid-column-start:2;
  }
}
@media (min-width:1200px){
  :root {
    --columns: 9;
  }
 .movie-route li:nth-child(6n-2){
    grid-column-start:auto;
  }
 .movie-route li:nth-child(8n-3){
    grid-column-start:2;
  }
}
@media (min-width:1500px){
  :root {
    --columns: 11;
  }
 .movie-route li:nth-child(8n-3){
    grid-column-start:auto;
  }
 .movie-route li:nth-child(10n-4){
    grid-column-start:2;
  }
}
@media (min-width:1800px){
  :root {
    --columns: 13;
  }
 .movie-route li:nth-child(10n-4){
    grid-column-start:auto;
  }
 .movie-route li:nth-child(12n-5){
    grid-column-start:2;
  }
}
@media (min-width:2100px){
  :root {
    --columns: 15;
  }
 .movie-route li:nth-child(12n-5){
    grid-column-start:auto;
  }
 .movie-route li:nth-child(14n-6){
    grid-column-start:2;
  }
}



</style>