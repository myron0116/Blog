<template>
    <div class="music-bar" id="music">
    <music-bar id="carousel">
       <div slot="recordsOne" :class="hhLeft" @click="itemClickHHLeft()">
        <img src="../../assets/img/album/clash.jpg">
      </div>
       <div slot="recordsTwo" :class="hLeft" @click="itemClickHLeft()">
        <img src="../../assets/img/album/cure.jpg">
      </div>

      <div slot="recordsThree" :class="pLeft" @click="itemClickPLeft()">
        <img src="../../assets/img/album/jamc.jpg">
      </div>

      <div slot="recordsFour" :class="prev" @click="itemClickPrev()">
        <img src="../../assets/img/album/libertines.jpg">
      </div>

      <div slot="recordsFive" :class="selected" @click="itemClickSelected()">
        <img src="../../assets/img/album/pulp.jpg">
      </div>

      <div slot="recordsSix" :class="next" @click="itemClickNext()">
        <img src="../../assets/img/album/smashingpumpkin.jpg">
      </div>

      <div slot="recordsSeven" :class="nRight" @click="itemClickNRight()">
        <img src="../../assets/img/album/smiths.jpg">
      </div>

      <div slot="recordsEight" :class="hRight" @click="itemClickHRight()">
        <img src="../../assets/img/album/sonicyouth.jpg">
      </div>
      <div slot="recordsNine" :class="hhRight" @click="itemClickHHRight()">
        <img src="../../assets/img/album/stoneroses.jpg">
      </div>
        <div slot="recordsTen" :class="hhhRight" @click="itemClickHHHRight()">
        <img src="../../assets/img/album/velvetunderground.jpg">
      </div>
    </music-bar>
    </div>
</template>

<script>
import MusicBar from '../common/music-bar.vue'
export default {
    name:"MainMusicBar",
    components:{
        MusicBar
    },
data() {
  return {
    hhLeft:"hidehideLeft",
    hLeft:"hideLeft",
    pLeft:"prevLeftSecond",
    prev:"prev",
    selected: 'selected',
    next: "next",
    nRight:"nextRightSecond",
    hRight:"hideRight",
    hhRight:"hidehideRight",
    hhhRight: "hidehidehideRight",
  }
},
methods:{
  itemClickHHLeft(){
    this.nRight = "hideLeft"
     this.hRight = "hideLeft"
    this.hhRight = "prevLeftSecond"
    this.hhhRight ="prev"
    this.hhLeft = "selected"
    this.hLeft = "next"
    this.pLeft = "nextRightSecond"
    this.prev = "hideRight"
    this.selected = "hidehideRight"
    this.next = "hidehidehideRight"
  },
  itemClickHLeft(){
    this.hRight = "hidehideLeft"
    this.hhRight = "hideLeft"
    this.hhhRight ="prevLeftSecond"
    this.hhLeft = "prev"
    this.hLeft = "selected"
    this.pLeft = "next"
    this.prev = "nextRightSecond"
    this.selected = "hideRight"
    this.next = "hidehideRight"
    this.nRight = "hidehidehideRight"
  },
  itemClickPLeft(){
    this.hhRight = "hidehideLeft"
    this.hhhRight ="hideLeft"
    this.hhLeft = "prevLeftSecond"
    this.hLeft = "prev"
    this.pLeft = "selected"
    this.prev = "next"
    this.selected = "nextRightSecond"
    this.next = "hideRight"
    this.nRight = "hidehideRight"
    this.hRight = "hidehidehideRight"
  },
  itemClickPrev(){
    this.prev = "selected"
    this.selected = 'next'
    this.next = "nextRightSecond"
    this.nRight = "hideRight"
    this.hRight = "hidehideRight"
    this.hhRight = "hidehidehideRight"
    this.hhhRight = "hidehideLeft"
    this.hhLeft = "hideLeft"
    this.hLeft = "prevLeftSecond"
    this.pLeft = "prev"
  },
 itemClickSelected(){
   this.selected = "selected"
    this.next = "next"
    this.nRight = "nextRightSecond"
    this.hRight = "hideRight"
    this.hhRight = "hidehideRight"
    this.hhhRight = "hidehidehideRight"
    this.hhLeft = "hidehideLeft"
    this.hLeft = "hideLeft"
    this.pLeft = "prevLeftSecond"
    this.prev = "prev"
  },
itemClickNext(){

    this.hLeft = "hidehideLeft"
    this.pLeft = "hideLeft"
    this.prev = "prevLeftSecond"
    this.selected = "prev"
    this.next = "selected"
    this.nRight = "next"
    this.hRight = "nextRightSecond"
    this.hhRight = "hideRight"
    this.hhhRight ="hidehideRight"
    this.hhLeft = "hidehidehideRight"
},
itemClickNRight(){
    this.pLeft = "hidehideLeft"
    this.prev = "hideLeft"
    this.selected = "prevLeftSecond"
    this.next = "prev"
    this.nRight = "selected"
    this.hRight = "next"
    this.hhRight = "nextRightSecond"
    this.hhhRight ="hideRight"
    this.hhLeft = "hidehideRight"
    this.hLeft = "hidehidehideRight"
},
itemClickHRight(){
      
    this.prev = "hidehideLeft"
    this.selected = "hideLeft"
    this.next = "prevLeftSecond"
    this.nRight = "prev"
    this.hRight = "selected"
    this.hhRight = "next"
    this.hhhRight ="nextRightSecond"
    this.hhLeft = "hideRight"
    this.hLeft = "hidehideRight"
    this.pLeft = "hidehidehideRight"
},
itemClickHHRight(){
      
    this.selected = "hidehideLeft"
    this.next = "hideLeft"
    this.nRight = "prevLeftSecond"
    this.hRight = "prev"
    this.hhRight = "selected"
    this.hhhRight ="next"
    this.hhLeft = "nextRightSecond"
    this.hLeft = "hideRight"
    this.pLeft = "hidehideRight"
    this.prev = "hidehidehideRight"
},
itemClickHHHRight(){

    this.next = "hidehideLeft"
    this.nRight = "hideLeft"
    this.hRight = "prevLeftSecond"
    this.hhRight = "prev"
    this.hhhRight ="selected"
    this.hhLeft = "next"
    this.hLeft = "nextRightSecond"
    this.pLeft = "hideRight"
    this.prev = "hidehideRight"
    this.selected = "hidehidehideRight"
}
}
}
</script>
</script>

<style>
.music-bar{
  padding-bottom: 30vh;
  padding-top: 30vh;
  background: url('../../assets/img/musiclive.jpg') no-repeat;
  background-size: cover;
  }
</style>
<style lang="sass">
html, body, main
  width: 100%
  height: 100%
  margin: 0
  padding: 0

#carousel
  position: relative
  height: 44vh
  top: 50%
  overflow: hidden

  div
    position: absolute
    transition: transform 1s, left 1s, opacity 1s, z-index 0s
    opacity: 1

    img
      width: 400px
      transition: width 1s

    &.hidehideLeft
      left: 0%
      opacity: 0
      transform: translateY(50%) translateX(-50%)

      img
        width: 200px

    &.hideLeft
      left: 0%
      opacity: 0
      transform: translateY(50%) translateX(-50%)

      img
        width: 200px

    &.hideRight
      left: 100%
      opacity: 0
      transform: translateY(50%) translateX(-50%)
      img
        width: 200px

    &.hidehideRight
      left: 100%
      opacity: 0
      transform: translateY(50%) translateX(-50%)
      img
        width: 200px

    &.hidehidehideRight
      left: 100%
      opacity: 0
      transform: translateY(50%) translateX(-50%)
      img
        width: 200px

    &.prev
      z-index: 5
      left: 30%
      transform: translateY(50px) translateX(-50%)

      img
        width: 300px

    &.prevLeftSecond
      z-index: 4
      left: 15%
      transform: translateY(50%) translateX(-50%)
      opacity: .7

      img
        width: 200px

    &.selected
      z-index: 10
      left: 50%
      transform: translateY(0px) translateX(-50%)

    &.next
      z-index: 5
      left: 70%
      transform: translateY(50px) translateX(-50%)

      img
        width: 300px

    &.nextRightSecond
      z-index: 4
      left: 85%
      transform: translateY(50%) translateX(-50%)
      opacity: .7

      img
        width: 200px
</style>