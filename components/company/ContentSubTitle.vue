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
</style>