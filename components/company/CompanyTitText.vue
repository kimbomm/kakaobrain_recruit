<template>
  <div class="company-tit-text gl-5 l-ml-3">
    <div class="text">{{text}}</div>
  </div>
</template>
<script>
export default {
  name:'CompanyTitle',
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
.company-tit-text{
  font-size: 16px;
  line-height: 150%;
}
  
</style>