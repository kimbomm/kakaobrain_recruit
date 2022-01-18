<template>
  <div class="company">
    <CompanyTitle
      title="인턴 체험"
      subTitle="스토리."
    />
    <CompanyTitText
      text="2021 Summer AI 영입 연계형 인턴과정을 수료한
      Gina, Wilson, Jwoong, Ted 의 카카오브레인 인턴 체험 스토리를 전달해 드립니다."
    />
    <CompanyImg/>

    <div class="rule-box">
      <ul>
        <li v-for="(data,index) in interviewListA" :key="index" class="rule-item">
          <CompanyInterview :data="data"/>
        </li>
      </ul>
    </div>
  </div> 
</template>
<script>
import CompanyTitle from '@/components/company/CompanyTitle'
import CompanyTitText from '@/components/company/CompanyTitText'
import CompanyImg from '@/components/company/CompanyImg'
import CompanyInterview from '@/components/company/CompanyInterview'
export default {
  name:'index',
  components:{
    CompanyTitle,
    CompanyTitText,
    CompanyImg,
    CompanyInterview,
  },
  data(){
    return{
      interviewListA: [
        {
          profileTit:'Neuro-Symbolic AI팀',
          profileSubTit:"인턴 'Gina'의 회고",
          profileTxt:"카이스트 AI대학원 주재걸교수님 연구실 석사과정"
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .company-title{
    margin-top:320px;
    margin-bottom:60px;
  }
  .company-tit-text{ 
    margin-bottom:200px;
  }
  .company-img{
    margin-bottom:140px;
  }
  
  .rule-box{
    .rule-item{
      &:not(:last-child){
        margin-bottom:200px;
      }
    }
  }
  .company-bracket-tit{
    margin-bottom:100px;
  }
</style>