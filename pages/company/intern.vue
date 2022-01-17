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
        <li class="rule-item">
          <CompanyBracketTit/>
          
        </li>
      </ul>
    </div>
  </div> 
</template>
<script>
import CompanyTitle from '@/components/company/CompanyTitle'
import CompanyTitText from '@/components/company/CompanyTitText'
import CompanyImg from '@/components/company/CompanyImg'
import CompanyBracketTit from '@/components/company/CompanyBracketTit'
export default {
  name:'index',
  components:{
    CompanyTitle,
    CompanyTitText,
    CompanyImg,
    CompanyBracketTit,
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