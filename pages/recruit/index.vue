<template>
  <div class="procedure-wrap">
    <MainTitle
      :title="`영입절차.`"
    />
    <MainTitleText
      :text="`Unthinkable Question의 여정을 함께할</br>
      든든한 동료를 찾습니다.`"
    />
    <MiddleImg/>
    <ContentsTitle 
      :title="`인재 영입 프로세스`"
    />
    <Procedure/> 
    <div class="contents-list">
      <ul>
        <li class="item">
          <ContentSubTitle tit="➀ 서류 전형"/>
          <ContentsText
            :text="`공고와 지원자의 기본 Fit을 검토하는 단계입니다.`"
          />
        </li>
        <li class="item">
          <ContentSubTitle tit="➁ 과제 전형"/>
          <ContentsText
            :text="`다음단계로 공고에 필요한 역량을 실제로 보유하고 있는지 과제를 통해 검증하는 단계입니다.</br>
            공고별로 과제 전형이 제외되거나 내용이 상이할 수 있으며, 기술직군은 코딩테스트로 진행됩니다.`"
          />
        </li>
        <li class="item">
          <ContentSubTitle tit="➂ 인터뷰 전형"/>
          <ContentsText
            :text="`서류,과제 전형을 토대로 실무 담당자들과 Q&A를 통해 서로를 더 깊게 알아가는 단계입니다.</br>
            통상 1-2회의 인터뷰로 진행됩니다.`"
          />
        </li>
        <li class="item">
          <ContentSubTitle tit="➃ 처우협상"/>
          <ContentsText
            :text="`지원자의 역량을 기반으로 처우협상을 진행합니다. (인턴 : 사전에 정해진 내규에 따라 지급됩니다) `"
          />
        </li>
        <li class="item">
          <ContentSubTitle tit="➄ 입사확정"/>
          <ContentsText
            :text="`입사일 조율후 Unthinkable Question의 여정을 함께할 든든한 크루들을 만날 준비를 합니다.`"
          />
        </li>
      </ul>
    </div>
  
  </div> 
</template>
<script>
import MainTitle from '@/components/company/MainTitle'
import MainTitleText from '@/components/company/MainTitleText'
import MiddleImg from '@/components/company/MiddleImg'
import ContentsTitle from '@/components/company/ContentsTitle'
import ContentSubTitle from '@/components/company/ContentSubTitle'
import ContentsText from '@/components/company/ContentsText'
import Procedure from '@/components/company/Procedure'
export default {
  name:'index',
  components:{
    MainTitle,
    MainTitleText,
    MiddleImg,
    ContentsTitle,
    ContentSubTitle,
    ContentsText,
    Procedure,
  }
}
</script>
<style lang="scss" scoped>
  .procedure-wrap{
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
    .procedure {
      margin-bottom:160px;
    }
    .contents-list{
      .item{
        &:not(:last-child){
          margin-bottom:40px;
        }
      }
    }
    .content-sub-title{
      margin-bottom:10px;
    }
  }

  @include pc-large {
    .procedure-wrap{
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
      .procedure {
        margin-bottom:220px;
      }
      .content-sub-title{
        margin-bottom:10px;
      }
      .contents-list{ 
        .item{
          &:not(:last-child){
            margin-bottom:60px;
          }
        }
      }
    }
  }
  @include pc-4k {
    .procedure-wrap{
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
        margin-bottom:80px;
      }
      .procedure {
        margin-bottom:360px;
      }
      .content-sub-title{
        margin-bottom:14px;
      }
      .contents-list{ 
        .item{
          &:not(:last-child){
            margin-bottom:80px;
          }
        }
      }
    }
  }
  @include tablet {
    .procedure-wrap{
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
      .procedure {
        margin-bottom:100px;
      }
      .content-sub-title{
        margin-bottom:10px;
      }
      .contents-list{ 
        .item{
          &:not(:last-child){
            margin-bottom:40px;
          }
        }
      }
    }
  }
  @include mobile {
    .procedure-wrap{
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
        margin-bottom:42px;
      }
      .procedure {
        margin-bottom:60px;
      }
      .contents-list{ 
        .item{
          &:not(:last-child){
            margin-bottom:30px;
          }
        }
      }
    }
  }
</style>