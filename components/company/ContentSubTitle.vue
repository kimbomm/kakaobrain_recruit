<template>
  <div class="content-sub-title gl-5 l-ml-3">
    <div class="tit">{{tit}}</div> 
  </div>
</template>
<script>
export default {
  name:'ContentSubTitle',
  props:{
    tit:{
      type:String,
      default:'',
      required:true
    }
  }
}
</script>
<style lang="scss" scoped>
  .content-sub-title{
    .tit{
      font-weight: 900;
      font-size: 20px;
      line-height: 130%;
    }
  }
  @include pc-large {
    .content-sub-title{
      .tit{
        font-size: 30px;
      }
    }
  }
  @include pc-4k {
    .content-sub-title{
      .tit{
        font-size: 42px;
      }
    }
  }
  @include tablet {
    .content-sub-title{
      &.gl-5{
        width: getWidth(7) !important;
      }
      &.l-ml-3{
        margin-left: getMargin(2) !important;
      }
      .tit{
        font-size: 20px;
      }
    }
  }
  @include mobile {
    .content-sub-title{
      &.gl-5{
        width: 100% !important;
      }
      &.l-ml-3{
        margin-left: 0 !important;
      }
    }
  }
</style>