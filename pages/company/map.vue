<template>
  <div class="company">
    <MainTitle
      :title="`찾아오시는</br>길.`"
    />
    <MainTitleText
      text="카카오브레인 크루가 모여 생각하지 못한 질문을 던지고 해답을 찾아가는 장소입니다."
    />
    <MiddleImg/>
    <ContentsTitle
      title="주소"
    />
    <ContentsText
      text="경기도 성남시 분당구 판교역로241번길 20 미래에셋벤처타워 11층 (우)13494"
    />
    <BusInquiry/>
  </div> 
</template>

<script>
import MainTitle from '@/components/company/MainTitle'
import MainTitleText from '@/components/company/MainTitleText'
import MiddleImg from '@/components/company/MiddleImg'
import ContentsTitle from '@/components/company/ContentsTitle'
import ContentsText from '@/components/company/ContentsText'
import BusInquiry from '@/components/company/BusInquiry'
export default {
  components:{
    MainTitle,
    MainTitleText,
    MiddleImg,
    ContentsTitle,
    ContentsText,
    BusInquiry,
  }
}
</script>

<style lang="scss" scoped>
  .company{
    padding:0 20px;
    .main-title{
      margin-top:320px;
      margin-bottom:60px;
    }
    .main-title-text{ 
      margin-bottom:200px;
    }
    .middle-img{
      margin-bottom:140px;
    }
    .contents-title{
      margin-bottom:40px;
    }
    .contents-text{
      margin-bottom:60px;
    }
  }

  @include pc-large {
    .company{
      .main-title{
        margin-top:440px;
        margin-bottom:100px;
      }
      .main-title-text{ 
        margin-bottom:240px;
      }
      .middle-img{
        margin-bottom:180px;
      }
      .contents-title{
        margin-bottom:50px;
      }
      .contents-text{
        margin-bottom:80px;
      }
      
    }
    
  }
  @include pc-4k {
    .company{
      .main-title{
        margin-top:600px;
        margin-bottom:120px;
      }
      .main-title-text{ 
        margin-bottom:360px;
      }
      .middle-img{
        margin-bottom:270px;
      }
      .contents-title{
        margin-bottom:70px;
      }
      .contents-text{
        margin-bottom:80px;
      }
    }
  }
  @include tablet {
    .company{
      .main-title{
        margin-top:200px;
        margin-bottom:40px;
      }
      .main-title-text{ 
        margin-bottom:100px;
      }
      .middle-img{
        margin-bottom:140px;
      }
      .contents-title{
        margin-bottom:40px;
      }
      .contents-text{
        margin-bottom:40px;
      }
    }
    
  }
  @include mobile {
    .company{
      .main-title{
        margin-top:157px;
        margin-bottom:20px;
      }
      .main-title-text{ 
        margin-bottom:60px;
      }
      .middle-img{
        margin-bottom:100px;
      }
      .contents-title{
        margin-bottom:30px;
      }
      .contents-text{
        margin-bottom:30px;
      }
    }
  }
</style>