<template>
  <div class="main-title-text gl-5 l-ml-3">
    <div class="text">{{text}}</div>
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
  
</style>