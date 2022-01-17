<template>
  <div class="company-sub-txt gl-5 l-ml-3">
    <div class="text">{{text}}</div> 
  </div>
</template>
<script>
export default {
  name:'CompanySubTxt',
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
  .company-sub-txt{
    .text{
      font-size: 16px; 
      line-height: 150%;
    }
  }
</style>