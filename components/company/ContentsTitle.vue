<template>
  <div class="contents-title gl-5 l-ml-3">
    <div class="title" v-html="title"></div>
  </div>
</template>
<script>
export default {
  name:'ContentsTitle',
  props:{
    title:{
      type:String,
      default:'',
      required:true
    }
  }
}
</script>
<style lang="scss" scoped>
  .contents-title{
    font-weight: 900;
    font-size: 40px;
    line-height: 130%;
  }
  @include pc-large {
    .contents-title{
      font-size: 52px;
    }
  }
  @include pc-4k {
    .contents-title{
      font-size: 80px;
    }
  }
  @include tablet {
    .contents-title{
      font-size: 38px;
      &.gl-5{
        width: getWidth(7) !important;
      }
      &.l-ml-3{
        margin-left: getMargin(2) !important;
      }
    }
  }
  @include mobile {
    .contents-title{
      font-size: 30px;
      &.gl-5{
        width: 100% !important;
      }
      &.l-ml-3{
        margin-left: 0 !important;
      }
    }
  }
</style>