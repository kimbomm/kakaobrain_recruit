<template>
  <div class="contents-text gl-5 l-ml-3">
    <div class="text" v-html="text"></div> 
  </div>
</template>
<script>
export default {
  name:'ContentsText',
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
  .contents-text{
    .text{
      font-size: 16px; 
      line-height: 150%;
    }
  }
</style>