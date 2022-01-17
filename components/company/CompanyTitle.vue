<template>
  <div class="company-title gl-6 l-ml-2">
    <div class="title">{{title}}</div>
    <div class="sub-title">{{subTitle}}</div>
  </div>
</template>
<script>
export default {
  name:'CompanyTitle',
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
.company-title{
  font-weight: 900;
  font-size: 90px;
  line-height: 120%;
}
  
</style>