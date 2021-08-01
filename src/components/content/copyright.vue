<template>
  <div class="copyright">
      <p>
        Copyright ©2021 All rights reserved | made by <i class="dev-name">Actopas</i>
      </p>
    </div>
</template>

<script>
export default {
name:'Copyright'
}
</script>

<style>
.copyright{
  text-align: center;
  background-color: black;
  color: rgb(63, 73, 84);
  height: 4vh;
}
.copyright p{
    margin: 0;
}
.copyright p .dev-name{
    color: white;
}
</style>