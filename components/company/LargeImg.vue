<template>
  <div class="large-img gl-8 l-ml-1">
    <img src="@/assets/images/large-img.png">
  </div>
</template>
<script>
export default {
  name:'LargeImg',
}
</script>
<style lang="scss" scoped>
  .large-img{
    img{
      width:100%;
    }
  }
  @include mobile {
    .large-img{
      &.gl-8{
        width:100% !important;
      }
      &.l-ml-1{
        margin-left: 0 !important;
      }
    }
  }
</style>