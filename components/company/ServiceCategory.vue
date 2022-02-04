<template>
  <div class="service gl-6 l-ml-2">
    <div class="service-list">
      <div class="service-item">
        <div class="service-title">
          우리의<br/>일하는 방식.
        </div>
        <div class="service-text l-ml-1">
          자기 주도적으로 성장할 수 있는 좋은 기회가 많이 주어지고,<br/>
          훌륭한 동료들을 통해 함께 성장할 수 있는 카카오브레인의 크루는 어떻게 일을 하고 있을까요?
        </div>
        <div class="service-more l-ml-1"> more</div>
      </div>
      <div class="service-item">
        <div class="service-title">
          원격근무와<br/>
          유연근무제.
        </div>
        <div class="service-text l-ml-1">
          우리는 업무 공간을 스스로 정해 일합니다.<br/>
          우리의 ‘완전선택근무시간제’는 자신의 업무시간을 정해 스스로 관리하며 일합니다.
        </div>
        <div class="service-more l-ml-1"> more</div>
      </div>
      <div class="service-item">
        <div class="service-title">
          복지혜택
        </div>
        <div class="service-text l-ml-1">
          카카오브레인 크루와 가족을 위한<br/>
          복지혜택을 소개합니다.
        </div>
        <div class="service-more l-ml-1"> more</div>
      </div>
    </div>
    <div class="service-bottom">
      <div class="bottom-item">
        <div class="bottom-title">FAQ.</div>
        <div class="bottom-text">영입 관련한 질문이 있으신가요?</div>
        <div class="service-more"> more</div>
      </div>
      <div class="bottom-item">
        <div class="bottom-title">사외추천제도.</div>
        <div class="bottom-sub-title">지인 추천 보상금 300만원</div>
        <div class="bottom-text">누구에게나 열려있는 기회.<br/>지인을 추천해 주시면 추천 보상금 300만원을 지급 드립니다.</div>
        <div class="service-more"> more</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" soped>
  .service{
    &-list{
      margin-bottom:180px
    }
    &-item{
      &:not(:last-child){
        margin-bottom:200px;
      }
    }
    &-title{
      margin-bottom:60px;
      font-weight: 900;
      font-size: 60px;
      line-height: 120%;
    }
    &-text{
      margin-bottom:20px;
      font-size: 16px;
      line-height: 150%;
    }
    &-more{
      font-family: Inter;
      font-size: 16px;
      line-height: 150%;
    }
    .service-bottom{
      display: flex;
      justify-content: space-between;
      .bottom{
        &-item{
          width:550px;
          height:230px;
          padding:30px;
          background-color: #EFF1F6;
          .service-more{
            position: absolute;
            bottom: 30px;
          }
        }
        &-title{
          margin-bottom:30px;
          font-weight: 900;
          font-size: 30px;
          line-height: 120%;
        }
        &-sub-title{
          font-weight: 900;
          font-size: 14px;
          line-height: 150%;
        }
        &-text{
          font-size: 14px;
          line-height: 150%;
        }
      }
    }
  }
</style>