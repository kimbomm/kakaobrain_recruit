<template>
  <div class="company-small-tit gl-5 l-ml-3">
    <div class="title" v-html="title"></div>
  </div>
</template>
<script>
export default {
  name:'CompanySmallTit',
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
  .company-small-tit{
    margin-bottom:40px;
    font-weight: 700;
    font-size: 26px;
    line-height: 140%;
  }
</style>