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
        font-size: 14px;
        font-weight:400;
        line-height: 150%;
      }
    }
  }

}
  
</style>