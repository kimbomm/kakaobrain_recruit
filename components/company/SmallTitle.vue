<template>
  <div class="small-title gl-5 l-ml-3">
    <div class="title" v-html="title"></div>
  </div>
</template>
<script>
export default {
  name:'SmallTitle',
  props:{
    title:{
      type:String,
      default:'',
      required:true
    },
  },
  
  
}
</script>
<style lang="scss" scoped>
  .small-title{
    font-weight: 700;
    font-size: 26px;
    line-height: 140%;
  }
  @include pc-large {
    .small-title{
      font-size: 30px;
    }
  }
  @include pc-4k {
    .small-title{
      font-size: 42px;
    }
  }
  @include tablet {
    .small-title{
      font-size: 24px;
      &.gl-5{
        width: getWidth(7) !important;
      }
      &.l-ml-3{
        margin-left: getMargin(2) !important;
      }
    }
  }
  @include mobile {
    .small-title{
      font-size: 20px;
      &.gl-5{
        width:100% !important;
      }
      &.l-ml-3{
        margin-left:0 !important;
      }
    }
  }
</style>