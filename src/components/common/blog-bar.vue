<template>
  <div>
      <slot name="blog-item">
          <slot name="blog-img"></slot>
          <slot name="blog-info"></slot>
      </slot>
      <slot name="blog-nav"></slot>
  </div>
</template>

<script>

export default {
    name:'BlogBar'
}
</script>

<style>

</style>