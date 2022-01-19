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
  
</style>