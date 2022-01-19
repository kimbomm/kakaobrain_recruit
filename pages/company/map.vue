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

</style>