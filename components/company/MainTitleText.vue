<template>
  <div class="main-title-text gl-5 l-ml-3">
    <div class="text" v-html="text"></div>
  </div>
</template>
<script>
export default {
  name:'MainTitleText',
  props:{
    text:{
      type:String,
      default:'',
      required:true
    }
  }
}
</script>
<style lang="scss" scoped>
  .main-title-text{
    font-size: 16px;
    line-height: 150%;
  }
  @include pc-large {
    .main-title-text{
      font-size: 22px;
    }
  }
  @include pc-4k {
    .main-title-text{
      font-size: 32px;
    }
  }
  @include tablet {
    .main-title-text{
      font-size: 14px;
      &.l-ml-3{
        margin-left: getMargin(2) !important;
      }
    }
  }
  @include mobile {
    .main-title-text{
      &.gl-5{
        width:100% !important;
      }
      &.l-ml-3{
        margin-left:0 !important;
      }
    }
  }
  
</style>