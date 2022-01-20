<template>
  <div class="procedure l-ml-3 gl-5">
    <ul class="item-box">
      <li class="item gl-1">
        <div class="item-shape"><span class="icon icon-note"></span></div>
        <div class="item-text">서류 전형</div>
      </li>
      <li class="item gl-1">
        <div class="item-shape"><span class="icon icon-game"></span></div>
        <div class="item-text">과제 전형</div>
      </li>
      <li class="item gl-1">
        <div class="item-shape"><span class="icon icon-quotation"></span></div>
        <div class="item-text">인터뷰 전형</div>
      </li>
      <li class="item gl-1">
        <div class="item-shape"><span class="icon icon-money"></span></div>
        <div class="item-text">처우협상</div>
      </li>
      <li class="item gl-1">
        <div class="item-shape "></div>
        <div class="item-text">입사확정</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'Procedure',
}
</script>
<style lang="scss" scoped>
  .procedure{
    .item{
      text-align: center;
      &:not(:last-child) .item-shape{
        background-color: $surface-2;
        &::before{
          content: "";
          width: 6px;
          height:7px;
          position: absolute;
          right:-13px;
          top:50%;
          transform: translate(0,-50%);
          background: url(@/assets/images/icon-right-triangle.png)no-repeat;
          background-size:100%;
        }
      }
      &-box{
        display: flex;
        justify-content:space-between;
      }
      &-shape{
        position: relative;
        width:100%;
        height:170px;
        margin-bottom:20px;
        border-radius: 50%;
        background-color:$gray-9;
      }
      &-text{
      font-size: 16px;
      font-weight:700;
      line-height: 120%; 
      }
    }
  }
  .icon{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    width:50px;
    height:50px;
  }
  .icon-note{
    background:url(@/assets/images/icon-note.png) no-repeat;
    background-size: 100%;
  }
  .icon-game{
    background:url(@/assets/images/icon-game.png) no-repeat;
    background-size: 100%;
  }
  .icon-quotation{
    background:url(@/assets/images/icon-quotation.png) no-repeat;
    background-size: 100%;
  }
  .icon-money{
    background:url(@/assets/images/icon-money.png) no-repeat;
    background-size: 100%;
  }
</style>