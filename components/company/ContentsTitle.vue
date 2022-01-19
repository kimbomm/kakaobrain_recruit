<template>
  <div class="contents-title gl-5 l-ml-3">
    <div class="title">{{title}}</div>
    <div class="sub-title">{{subTitle}}</div>
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
    },
    subTitle:{
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
</style>