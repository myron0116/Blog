<template>
  <div class="nav-bar">
      <div><slot name="left" class="nav-left-item"></slot></div>
      <div><slot name="center" class="nav-center-item"></slot></div>
      <div><slot name="right" class="nav-right-item"></slot></div>
  </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style>
.nav-bar{
    height: 60px;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:space-between;
    position: sticky;
    top: 0px;
    background-color: white;
    z-index: 20;}
</style>