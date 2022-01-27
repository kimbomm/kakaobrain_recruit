<template>
  <div class="main-title gl-6 l-ml-2">
    <div class="title" v-html="title"></div>
  </div>
</template>
<script>
export default {
  name:'MainTitle',
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
  .main-title{
    font-weight: 900;
    font-size: 90px;
    line-height: 120%;
  }
  @include pc-large {
    .main-title{
      font-size:120px;
    }
  }
  @include pc-4k {
    .main-title{
      font-size:180px;
    }
  }
  @include tablet {
    .main-title{
      font-size:50px;
    }
  }
  @include mobile {
    .main-title{
      font-size:40px;
      &.gl-6{
        width:100% !important;
      }
      &.l-ml-2{
        margin-left:0 !important;
      }
    }
  }
</style>