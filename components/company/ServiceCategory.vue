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
      <div class="bottom-item gl-3">
        <div class="bottom-title">FAQ.</div>
        <div class="bottom-text">영입 관련한 질문이 있으신가요?</div>
        <div class="service-more"> more</div>
      </div>
      <div class="bottom-item gl-3">
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
          // width:550px;
          position: relative;
          min-height:230px;
          padding:30px;
          background-color: #EFF1F6;
          &:first-child{
            margin-right:20px;
          }
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
          margin-bottom:18px;
          font-size: 14px;
          line-height: 150%;
        }
      }
    }
  }
  
  @include pc-large {
    .service{
      &-list{
        margin-bottom:260px
      }
      &-item{
        &:not(:last-child){
          margin-bottom:260px;
        }
      }
      &-title{
        margin-bottom:80px;
        font-size: 80px;
      }
      &-text{
        margin-bottom:25px;
        font-size: 22px;
      }
      &-more{
        font-size: 22px;
      }
      .service-bottom{
        .bottom{
          &-item{
            min-height:295px;
            padding:40px;
            .service-more{
              bottom: 40px;
            }
          }
          &-title{
            margin-bottom:38px;
            font-size:40px;
          }
          &-sub-title{
            font-size: 18px;
          }
          &-text{
            font-size: 18px;
            margin-bottom:18px;
          }
        }
      }
    }
  }
  @include pc-4k {
    .service{
      &-list{
        margin-bottom:380px
      }
      &-item{
        &:not(:last-child){
          margin-bottom:380px;
        }
      }
      &-title{
        margin-bottom:120px;
        font-size: 120px;
      }
      &-text{
        margin-bottom:40px;
        font-size: 32px;
      }
      &-more{
        font-size: 32px;
      }
      .service-bottom{
        .bottom{
          &-item{
            min-height:442px;
            padding:40px;
            .service-more{
              bottom: 40px;
            }
          }
          &-title{
            margin-bottom:38px;
            font-size: 62px;
          }
          &-sub-title{
            font-size: 22px;
          }
          &-text{
            font-size: 22px;
          }
        }
      }
    }
  }
  @include tablet {
    .service{ 
      &-list{
        margin-bottom:150px
      }
      &-item{
        &:not(:last-child){
          margin-bottom:140px;
        }
      }
      &-title{
        margin-bottom:50px;
        font-size: 50px;
      }
      &-text{
        margin-bottom:20px;
        font-size: 16px;
      }
      &-more{
        font-size: 16px;
      }
      .service-bottom{
        justify-content: space-between;
        flex-direction: column; 
        .bottom{
          &-item{
            min-height:230px;
            padding:30px;
            &:first-child{
              margin-right:0px;
              margin-bottom:20px;
            }
            &.gl-3{
              width: getWidth(6) !important;
            }
            .service-more{
              bottom: 30px;
            }
          }
          &-title{
            margin-bottom:30px;
            font-size:30px;
          }
          &-sub-title{
            font-size: 14px;
          }
          &-text{
            margin-bottom:38px;
            font-size: 14px;
          }
        }
      }
    }
  }
  @include mobile {
    .service{
      &.gl-6{
        width:100% !important;
      }
      &.l-ml-2{
        margin-left: 0px !important;
      }
      &-list{
        margin-bottom:100px
      }
      &-item{
        &:not(:last-child){
          margin-bottom:100px;
        }
      }
      &-title{
        margin-bottom:30px;
        font-size: 30px;
      }
      &-text{
        margin-bottom:20px;
        font-size: 16px;
      }
      &-more{
        font-size: 16px;
      }
      .service-bottom{
        .bottom{
          &-item{
            min-height:210px;
            &.gl-3{
              width: 100% !important;
            }
          }
          &-title{
            margin-bottom:20px;
            font-size:20px;
          }
          &-text{
            margin-bottom:40px;
          }
        }
      }
    }
  }
</style>