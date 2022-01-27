<template>
  <div class="procedure l-ml-3 gl-5">
    <ul class="item-box">
      <li class="item">
        <div class="item-shape"><span class="icon icon-note"></span></div>
        <div class="item-text">서류 전형</div>
      </li>
      <li class="item"><div class="arrow"></div></li>
      <li class="item">
        <div class="item-shape"><span class="icon icon-game"></span></div>
        <div class="item-text">과제 전형</div>
      </li>
      <li class="item"><div class="arrow"></div></li>
      <li class="item">
        <div class="item-shape"><span class="icon icon-quotation"></span></div>
        <div class="item-text">인터뷰 전형</div>
      </li>
      <li class="item"><div class="arrow"></div></li>
      <li class="item">
        <div class="item-shape"><span class="icon icon-money"></span></div>
        <div class="item-text">처우협상</div>
      </li>
      <li class="item"><div class="arrow"></div></li>
      <li class="item">
        <div class="item-shape "><span class="icon icon-join"></span></div>
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
      margin-bottom:40px;
      text-align: center;
      &:not(:last-child) .item-shape{
        background-color: $surface-2;
      }
      &-box{
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        align-items: center;
      }
      &-shape{
        position: relative;
        width:170px;
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
      .arrow{
        width: 6px;
        height:7px;
        transform: translate(0,-250%);
        background: url(@/assets/images/icon-right-triangle.png)no-repeat;
        background-size:100%;
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
  .icon-join{
    background:url(@/assets/images/icon-join.png) no-repeat;
    background-size: 100%;
  }

  @include pc-large {
    .procedure{
      .item{
        &-box{
          display: flex;
          flex-wrap: wrap;
          justify-content:space-between;
          align-items: center;
        }
        &-shape{
          width:234px;
          height:234px;
          margin-bottom:30px;
        }
        &-text{
          font-size: 22px;
        }
        .arrow{
          width: 8px;
          height:9px;
        }
      }
    }
    .icon{
      width:70px;
      height:70px;
    }
  }
  @include pc-4k {
    .procedure{
      .item{
        &-shape{
          width:362px;
          height:362px;
          margin-bottom:51px;
        }
        &-text{
          font-size: 32px;
        }
        .arrow{
          width: 8px;
          height:9px;
        }
      }
    }
    .icon{
      width:100px;
      height:100px;
    }
  }
  @include tablet {
    .procedure{
      &.gl-5{
        width: getWidth(7) !important;
      }
      &.l-ml-3{
        margin-left: getMargin(2) !important;
      }
      .item{
        &-box{
          display: flex;
          flex-wrap: wrap;
          justify-content:space-between;
          align-items: center;
        }
        &-shape{
          width:100px;
          height:100px;
          margin-bottom:20px;
        }
        &-text{
          font-size: 14px;
        }
        .arrow{
          width: 6px;
          height:7px;
        }
      }
    }
    .icon{
      width:30px;
      height:30px;
    }
  }
  @include mobile {
    .procedure{
      &.gl-5{
        width: 100% !important;
      }
      &.l-ml-3{
        margin-left: 0 !important;
      }
      .item{
        &-box{
          display: flex;
          flex-wrap: wrap;
          justify-content:space-between;
          align-items: center;
        }
        &-shape{
          width:80px;
          height:80px;
          margin-bottom:10px;
        }
        &-text{
          font-size: 12px;
        }
      }
    }
    .icon{
      width:24px;
      height:24px;
    }
  }

</style>