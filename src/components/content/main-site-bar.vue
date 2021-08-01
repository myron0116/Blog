<template>
  <site-bar id="site">
      <h2 slot="name"></h2>
      <h1 slot="queto">TECHNOLOGY  IS  A  CRAP</h1>
  </site-bar>
</template>

<script>
import SiteBar from '../common/site-bar.vue'
export default {
    name:'MainSiteBar',
    components:{
        SiteBar
    }
}
</script>

<style>

</style>