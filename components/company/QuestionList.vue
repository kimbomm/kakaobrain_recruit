<template>
  <div class="item gl-2">
    <img :src="require(`@/assets/images/question-list-item_1.png`)" />
    <div class="item-text-box gl-6">
      <div class="item-title" v-html="data.title"></div>
      <div class="item-text" v-html="data.text"></div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    data:{
      type: Object,
      default:() =>{},
      require:true
    }
  }
}
</script>
<style lang="scss" scoped>
  .item{
    position: relative;
    margin: 0 auto;
    text-align: center;
    box-shadow: 3 0px 30px 50px -10px rgba(0,0,0,0.2);
    color:$gray-0;
    &-text-box{
      position:absolute;
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
    &-title{
      margin-bottom:30px;
      font-weight: 900;
      font-size: 50px;
      line-height: 130%;
    }
    &-text{
      font-size: 16px;
      line-height: 150%;
    }
    img{
      width:100%;
    }
  }
</style>