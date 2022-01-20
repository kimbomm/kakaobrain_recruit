<template>
  <div class="notice-item">
    <div class="item-category">
      <div class="category">{{data.category}}</div>
    </div>
    <div class="item-con">
      <div class="title">{{data.itemTit}}</div>
      <div class="date">{{data.itemDate}}</div>
      <div class="day">{{data.itemDay}}</div>
    </div>
    <div class="item-type">
      <div class="type">{{data.itemType}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'NoticeList',
  props:{
    data:{
      type:Object,
      default:() => [],
      require: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .notice{
    &-item{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding:20px 0 0;
      border-top: 1px solid $gray-9;
      box-sizing: border-box;
    }
  }
  .item-category{
    .category{
      font-size: 20px;
      font-weight:400;
      line-height: 130%;
    }
  }
  .item-con{
    .title{
      margin-bottom:10px;
      font-size: 20px;
      font-weight:400;
      line-height: 130%;
    }
    .date{
      margin-bottom:10px;
      font-size: 12px;
      font-weight:400;
      line-height: 130%;
      color: $gray-5;
    }
    .day{
      width:58px;
      height:28px;
      padding:6px 12px;
      border-radius: 50px;
      background-color: $surface-8;
      line-height: 130%;
      font-weight: 900;
      font-style: italic;
      font-size: 12px;
      color:$gray-0;
    }
  }
  .item-type{
    .type{
      width:58px;
      height:28px;
      padding:6px 11px;
      background-color: $gray-9;
      font-weight: 900;
      font-size: 12px;
      line-height: 130%;
      color:$gray-0;
    }
  }
</style> 