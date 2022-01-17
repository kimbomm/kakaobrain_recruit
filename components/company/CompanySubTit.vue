<template>
  <div class="company-sub-tit gl-5 l-ml-3">
    <div class="title">{{title}}</div>
    <div class="sub-title">{{subTitle}}</div>
  </div>
</template>
<script>
export default {
  name:'CompanySubTit',
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
  .company-sub-tit{
    font-weight: 900;
  font-size: 40px;
  line-height: 130%;
  }
</style>