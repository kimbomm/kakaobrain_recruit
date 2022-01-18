<template>
  <div class="company">
    <CompanyTitle
      title="찾아오시는"
      subTitle="길."
    />
    <CompanyTitText
      text="카카오브레인 크루가 모여 생각하지 못한 질문을 던지고 해답을 찾아가는 장소입니다."
    />
    <CompanyImg/>
    <CompanySubTit
      title="주소"
      subTitle=""
    />
    <CompanySubTxt
      text="경기도 성남시 분당구 판교역로241번길 20 미래에셋벤처타워 11층 (우)13494"
    />
    <CompanyBus/>
  </div> 
</template>

<script>
import CompanyTitle from '@/components/company/CompanyTitle'
import CompanyTitText from '@/components/company/CompanyTitText'
import CompanyImg from '@/components/company/CompanyImg'
import CompanySubTit from '@/components/company/CompanySubTit'
import CompanySubTxt from '@/components/company/CompanySubTxt'
import CompanyBus from '@/components/company/CompanyBus'
export default {
  components:{
    CompanyTitle,
    CompanyTitText,
    CompanyImg,
    CompanySubTit,
    CompanySubTxt,
    CompanyBus,
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
  .company-sub-tit{
    margin-bottom:40px;
  }
  .company-sub-txt{
    margin-bottom:60px;
  }

</style>