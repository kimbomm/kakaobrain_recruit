<template>
  <div class="company-interview gl-6 l-ml-2">
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
          <div>
            <!-- Neuro-Symbolic AI팀 -->
            {{ data.profileTit }}
            </div>
          <div>
            <!-- 인턴 'Gina'의 회고  -->
            {{ data.profileSubTit }}
            </div>
        </div>
        <div class="profile-txt">
          {{ data.profileTxt }}
          <!-- 카이스트 AI대학원 주재걸교수님 연구실 석사과정 -->
          </div>
      </div>

      <div class="interview-box">
        <div class="interview-text">
          사내에서 상시로 열리는 기술 공유 세미나 ‘미니컨퍼런스’ 시간을 통해 CEO와 이야기하고 의견을 나눠본다던가 하는 것이 신선했어요. 
          다른 연구자들의 발표를 듣다 보면 업계 지식도 늘고 자극이 되기도 하더라고요.
        </div>
        <div class="interview-text l-ml-1">
          카카오브레인은 매머드 조직이 아니지만  큰 조직 못지않은 AI 시스템과 풍부한 자원들에 업무 지원도 잘 되어 연구에만 신경 쓸 수 있었어요. 
          거기다 스타트업 같은 파이팅도 넘치는  조직이라 뭔가 함께 토론하며 일하는 맛도  나더라고요.
        </div>
      </div>

      <div class="interview-know-how">
        <div class="know-how-tit">Gina가 알려주는 노하우!</div>
        <div class="advice">
          <div class="advice-item">
            <div class="tit">이런 분들에게 추천!</div>
            <div class="txt">대기업에서 정직원처럼 일하는 체험을 통해 성장할 분들</div>
            <div class="txt">업계 최고 동료들과 다양한 프로젝트 협업을 경험해볼 분들</div>
            <div class="txt">최신 트렌드 정보를 흡수해 자신을 발전시키고 싶은 분들</div>
          </div>
          <div class="advice-item">
            <div class="tit">지원자를 위한 조언</div>
            <div class="txt">자신이 어떤 것을 하고 싶은지 명확히 정의하세요.</div>
            <div class="txt">평소에 궁금했지만 쉽게 접할 수 없던 기술적 궁금증 리스트를 만들어 보세요.</div>
          </div>
        </div>
        <div class="interview-tidy">
          <div class="txt">지나가 말한 ‘카카오브레인은 ‘빠르다’는 한마디엔 여러 가지가 담겨있어요. 단순히 내달리는 빠름보다는 서로 의견을 나누고 도움받고 때로는 도와주며, 서로의 능력에 맞게 나아가는 것이 카카오브레인 식의 발전입니다. ‘함께 가면 느리지만 멀리 갈 수 있다’보다 ‘함께 가야 힘내서 더 빨리 갈 수 있다’는 말이 옳다는 것을, 카카오브레인은 증명하고 있습니다.</div>
          <div class="btn"><span class="btn-txt">카카오브레인 페이스북에서 보기 →</span></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name:'CompanyInterview',
  props:{
    data:{
      type:String,
      default:"",
      require: true
    }
  }
}
</script>
<style lang="scss" scoped>
.company-interview{
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