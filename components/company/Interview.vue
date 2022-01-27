<template>
  <div class="interview gl-6 l-ml-2">
    <div class="interview-title">
      <div class="title">카카오브레인은</div>
      <div class="sub-title">
        <span>[</span>
        <div class="bracket-text">
          <img :src="require(`@/assets/images/bracket-text_1.png`)">
        </div>
        <span>]이다.</span>
      </div>
    </div>

    <div class="interview-con l-ml-1">
      <div class="profile-img">
        <img :src="require(`@/assets/images/profileimg_1.png`)">
      </div>
      <div class="profile-head">
        <div class="profile-tit">
          <div>{{ data.team }}팀</div>
          <div>인턴'{{ data.name }}'의 회고</div>
        </div>
        <div class="profile-txt">{{ data.profileTxt }}</div>
      </div>

      <div class="interview-box">
        <div class="interview-text">{{data.interviewTextA}}</div>
        <div class="interview-text l-ml-1">{{data.interviewTextB}}</div>
      </div>

      <div class="interview-know-how">
        <div class="know-how-tit">{{ data.name }}가 알려주는 노하우!</div>
        <div class="advice">
          <div class="advice-item">
            <div class="tit">이런 분들에게 추천!</div>
            <div class="txt">{{ data.adviceTxtA }}</div>
            <div class="txt">{{ data.adviceTxtB }}</div>
            <div class="txt">{{ data.adviceTxtC }}</div>
          </div>
          <div class="advice-item">
            <div class="tit">지원자를 위한 조언</div>
            <div class="txt">{{ data.adviceTxtD }}</div>
            <div class="txt">{{ data.adviceTxtE }}</div>
          </div>
        </div>
        <div class="interview-tidy">
          <div class="txt">{{ data.interviewTidy }}</div>
          <div class="btn"><span class="btn-txt">카카오브레인 페이스북에서 보기 →</span></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name:'Interview',
  props:{
    data:{
      type: Object,
      default: () => {},
      require: true
    }
  }
}
</script>
<style lang="scss" scoped>
.interview{
  font-weight: 900;
  font-size: 80px;
  line-height: 130%;
  .interview-title{
    margin-bottom:100px;
  }
  .sub-title{
    display: flex;
    align-items: center;
    .bracket-text{
      display: inline-block;
      width:213px;
      margin: 0 20px;
      img{
        width:100%;
        vertical-align: middle;
      }
    }
  }
  .profile{
    &-img{
      width:80px;
      height:80px;
      margin-bottom:20px;
      img{
        width:100%;
      }
    }
    &-head{
      margin-bottom:70px;
    }
    &-tit{
      font-weight: 900;
      font-size: 40px;
      line-height: 130%;
      margin-bottom:20px;
    }
    &-txt{
      font-size: 16px;
      font-weight:400;
      line-height: 150%;
    }
  }
  .interview{
    &-box{
      display: flex;
      margin-bottom:100px;
    }
    &-text{
      font-size: 20px;
      font-weight:400;
      line-height: 150%;
      &::before{
        content: "“";
        display: block;
        width:24px;
        height:24px;
        margin-bottom:20px;
        font-weight: 900;
        font-size: 50px;
        line-height: 100%;
      }
    }
    &-know-how{
      .know-how-tit{
        font-size: 26px;
        font-weight:700;
        line-height: 130%;
        margin-bottom:50px;
      }
    }
    &-tidy{
      padding:30px;
      background-color:$gray-9;
      color:$gray-0;
      .txt{
        margin-bottom:40px;
        font-size: 16px;
        font-weight:400;
        line-height: 150%;
      }
      .btn{
        width:238px;
        height:50px;
        border:1px solid $gray-0;
        border-radius: 0px;
        padding:16px;
        font-size: 0px;
        box-sizing: border-box;
        cursor: pointer;
        .btn-txt{
          display: block;
          letter-spacing: -1px;
          font-size: 14px;
          font-style: normal;
          font-weight:400;
          line-height: 130%;
          color: $gray-0;
        }
      }
    }
  }
  .advice{
    margin-bottom:40px;
    &-item{
      padding:30px;
      background-color:$surface-2;
      &:not(:last-child){
        margin-bottom:10px;
      }
      .tit{
        margin-bottom:20px;
        font-weight: 900;
        font-size: 20px;
        line-height: 120%;
      }
      .txt{
        position: relative;
        margin-left:20px;
        font-size: 14px;
        font-weight:400;
        line-height: 150%;
        &::before{
          content: "";
          position: absolute;
          left:-10px;
          top:9px;
          width:4px;
          height:4px;
          border-radius: 50%;
          background-color: $gray-9;
        }
      }
    }
  }
}

  @include pc-large {
    .interview{
      font-size: 100px;
      .interview-title{
        margin-bottom:130px;
      }
      .sub-title{
        .bracket-text{
          width:278px;
        }
      }
      .profile{
        &-img{
          width:100px;
          height:100px;
          margin-bottom:30px;
        }
        &-head{
          margin-bottom:90px;
        }
        &-tit{
          font-size: 52px;
          margin-bottom:30px;
        }
        &-txt{
          font-size: 22px;
        }
      }
      .interview{
        &-box{
          margin-bottom:140px;
        }
        &-text{
          font-size: 26px;
          &::before{
            width:24px;
            height:32px;
            margin-bottom:30px;
            font-size: 70px;
          }
        }
        &-know-how{
          .know-how-tit{
            font-size: 34px;
            margin-bottom:30px;
          }
        }
        &-tidy{
          padding:30px;
          .txt{
            margin-bottom:50px;
            font-size: 22px;
          }
          .btn{
            width:273px;
            height:60px;
            padding:19px 18px;
            .btn-txt{
              font-size: 16px;
            }
          }
        }
      }
      .advice{
        margin-bottom:50px;
        &-item{
          padding:40px 30px;
          &:not(:last-child){
            margin-bottom:14px;
          }
          .tit{
            margin-bottom:30px;
            font-size: 28px;
          }
          .txt{
            margin-left:20px;
            font-size: 18px;
            &::before{
              left:-15px;
              top:10px;
            }
          }
        }
      }
    }
  }
  @include pc-4k {
    .interview{
      &.l-ml-2{
        margin-left: getMargin(3) !important;
      }
      font-size: 140px;
      .interview-title{
        margin-bottom:200px;
      }
      .sub-title{
        .bracket-text{
          width:375px;
        }
      }
      .profile{
        &-img{
          width:150px;
          height:150px;
          margin-bottom:50px;
        }
        &-head{
          margin-bottom:140px;
        }
        &-tit{
          font-size: 80px;
          margin-bottom:50px;
        }
        &-txt{
          font-size: 32px;
        }
      }
      .interview{
        &-box{
          margin-bottom:210px;
        }
        &-text{
          font-size: 40px;
          &::before{
            width:45px;
            height:100px;
            font-size: 100px;
          }
        }
        &-know-how{
          .know-how-tit{
            font-size: 50px;
            margin-bottom:50px;
          }
        }
        &-tidy{
          padding:46px 10px 50px 50px;
          .txt{
            margin-bottom:70px;
            font-size: 32px;
          }
          .btn{
            width:400px;
            height:90px;
            padding:28px 26px;
            .btn-txt{
              font-size: 22px;
            }
          }
        }
      }
      .advice{
        margin-bottom:20px;
        &-item{
          padding:46px 50px 50px 50px;
          &:not(:last-child){
            margin-bottom:20px;
          }
          .tit{
            margin-bottom:50px;
            font-size: 42px;
          }
          .txt{
            margin-left:30px;
            font-size: 32px;
            &::before{
              left:-20px;
              top:10px;
              width:8px;
              height:8px;
            }
          }
        }
      }
    }
  }
  @include tablet {
    .interview{
      font-size: 40px;
      .interview-title{
        margin-bottom:80px;
      }
      .sub-title{
        .bracket-text{
          width:106px;
        }
      }
      .profile{
        &-img{
          width:80px;
          height:80px;
          margin-bottom:20px;
        }
        &-head{
          margin-bottom:70px;
        }
        &-tit{
          font-size: 30px;
          margin-bottom:20px;
        }
        &-txt{
          font-size: 14px;
        }
      }
      .interview{
        &-box{
          margin-bottom:80px;
        }
        &-text{
          font-size: 16px;
          &::before{
            width:24px;
            height:24px;
            margin-bottom:20px;
            font-size: 50px;
          }
        }
        &-know-how{
          .know-how-tit{
            font-size: 24px;
            margin-bottom:20px;
          }
        }
        &-tidy{
          padding:30px 36px;
          .txt{
            margin-bottom:30px;
            font-size: 14px;
          }
          .btn{
            width:218px;
            height:48px;
            padding:16px 20px;
            .btn-txt{
              font-size: 12px;
            }
          }
        }
      }
      .advice{
        margin-bottom:10px;
        &-item{
          padding:30px 38px;
          &:not(:last-child){
            margin-bottom:14px;
          }
          .tit{
            margin-bottom:20px;
            font-size: 18px;
          }
          .txt{
            margin-left:20px;
            font-size: 14px;
            &::before{
              left:-15px;
              top:10px;
            }
          }
        }
      }
    }
  }
  @include mobile {
    .interview{
      font-size: 34px;
      &.gl-6{
        width:100% !important;
      }
      &.l-ml-2{
        margin-left:0px !important;
      }
      .interview-title{
        margin-bottom:50px;
      }
      .sub-title{
        .bracket-text{
          width:90px;
        }
      }
      .profile{
        &-img{
          width:50px;
          height:50px;
          margin-bottom:20px;
        }
        &-head{
          margin-bottom:40px;
        }
        &-tit{
          font-size: 24px;
          margin-bottom:20px;
        }
        &-txt{
          font-size: 14px;
        }
      }
      .interview{
        &-con{
          &.l-ml-1{
            margin-left: 0 !important;
          }
        }
        &-box{
          margin-bottom:50px;
          flex-direction: column;
        }
        &-text{
          font-size: 16px;
          margin-bottom:40px;
          &.l-ml-1{
            margin-left: 0 !important;
          }
        }
        &-know-how{
          .know-how-tit{
            font-size: 20px;
            margin-bottom:20px;
          }
        }
        &-tidy{
          padding:20px;
          .txt{
            margin-bottom:30px;
            font-size: 14px;
          }
          .btn{
            width:218px;
            height:48px;
            padding:16px 20px;
            .btn-txt{
              font-size: 12px;
            }
          }
        }
      }
      .advice{
        margin-bottom:10px;
        &-item{
          padding:20px;
          &:not(:last-child){
            margin-bottom:10px;
          }
          .tit{
            margin-bottom:20px;
            font-size: 18px;
          }
          .txt{
            margin-left:20px;
            font-size: 14px;
            &::before{
              left:-15px;
              top:10px;
            }
          }
        }
      }
    }
  }
  
</style>