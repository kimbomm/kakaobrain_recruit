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
    margin-bottom:40px;
    font-weight: 700;
    font-size: 26px;
    line-height: 140%;
  }
</style>