<template>
  <div class="company-text-tit gl-5 l-ml-3">
    <div class="tit">{{tit}}</div> 
  </div>
</template>
<script>
export default {
  name:'CompanyTextTit',
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
  .company-text-tit{
    .tit{
      font-weight: 900;
      font-size: 20px;
      line-height: 130%;
    }
  }
</style>