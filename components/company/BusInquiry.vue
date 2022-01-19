<template>
  <div class="bus-inquiry gl-6 l-ml-3">
    <div class="bus-con">
      <div class="tit">주변 버스</div>
      <div class="list">
        <div class="bus-item">
          <div class="bus-tit">일반</div>
          <div class="bus-txt">101 15-1 330 330출 350 357 370 380 382 55 260 390 </div>
        </div>
        <div class="bus-item">
          <div class="bus-tit">마을</div>
          <div>
            <div class="bus-txt">602-1(일반형)(평일) 602-1(일반형)(휴일) 602-1(출퇴근맞춤형) </div>
            <div class="bus-txt">602-2(일반형)(평일) 602-2(출퇴근맞춤형) 71 73 73(맞춤형) 73-1 75 75(맞춤형) 812</div>
          </div>
        </div>
        <div class="bus-item">
          <div class="bus-tit">직행</div>
          <div class="bus-txt">4000 6003 9007 3000 1007 1009 5600 5700 6900 1007-1</div>
        </div>
      </div>
    </div>
    <div class="inquiry">
      <div class="tit">문의</div>
      <div class="txt">contact@kakaobrain.com으로 연락 바랍니다.</div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .bus-inquiry{
    .bus-con{
      margin-bottom:40px;
      .tit{
        margin-bottom:10px;
        font-weight: 900;
        font-size: 20px;
        line-height: 130%;
      }
    }
    .bus{
      &-item{
        display: flex;
        &:not(:last-child){
          margin-bottom:15px;
        }
      }
      &-tit{
        margin-right:15px;
        font-size:16px;
        font-weight:700;
        line-height:150%;
      }
      &-txt{
        font-size:16px;
        font-weight:400;
        line-height:150%;
      }
    }
    .inquiry{
      .tit{
        margin-bottom:10px;
        font-weight: 900;
        font-size: 20px;
        line-height: 130%;
      }
      .txt{
        font-size:16px;
        font-weight:400;
        line-height:150%;
      }
    }
  }
</style>