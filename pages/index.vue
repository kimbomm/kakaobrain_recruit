<template>
  <div class="recruit">
    <MainTitle
      :title="`더 나은</br>
      문화를 만드는</br>
      우리의 물음.`"
    />
    <EasterEgg/>
    <MainTitleText
      :text="`카카오브레인의 혁신은 모든 크루의 물음에서 시작합니다.</br>
      AI 없이는 상상할 수 없는 세상을 만들기 위해선 생각하지 못한 많은 물음이 필요합니다.</br>
      세상을 변화시킬 수 있는 새로운 물음을 던질 크루를 기다립니다.`"
    />
    <LargeImg/>
    <ContentsQuestion/>
    <MiddleImg/>
    <ServiceCategory/>
  </div> 
</template>
<script>
import mixinGlobal from '@/mixin/global.js'
import MainTitle from '@/components/company/MainTitle'
import EasterEgg from '@/components/elements/EasterEgg'
import MainTitleText from '@/components/company/MainTitleText'
import LargeImg from '@/components/company/LargeImg'
import ContentsQuestion from '@/components/company/ContentsQuestion'
import MiddleImg from '@/components/company/MiddleImg'
import ServiceCategory from '@/components/company/ServiceCategory'
export default {
  mixins: [mixinGlobal],
  name:'index',
  components:{
    MainTitle,
    EasterEgg,
    MainTitleText,
    LargeImg,
    ContentsQuestion,
    MiddleImg,
    ServiceCategory,
  },
  data(){
    return{
    }
  }
}
</script>
<style lang="scss" scoped>
  .recruit{
    position: relative;
    .main-title{
      margin-top:300px;
      margin-bottom:60px;
      letter-spacing: -3.5px;
    }
    .main-title-text{ 
      margin-bottom:490px;
    }
    .large-img{
      position: absolute;
      top:576px;
    }
    .question-box{
      margin-bottom:200px;
    }
    .middle-img{
      margin-bottom:140px;
      box-shadow:none;
    }
  }

  @include pc-large {
    
  }
  @include pc-4k {
    .recruit{
      .main-title{
        margin-top:300px;
        margin-bottom:60px;
      }
      .main-title-text{ 
        margin-bottom:490px;
      }
      .large-img{
        top:576px;
      }
      .question-box{
        margin-bottom:200px;
      }
      .middle-img{
        margin-bottom:140px;
        box-shadow:none;
      }
    }
  }
  @include tablet {
    
  }
  @include mobile {
    
  }
</style>