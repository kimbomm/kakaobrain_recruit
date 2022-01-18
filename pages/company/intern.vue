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
          name:'Gina',
          team:'Neuro-Symbolic AI',
          profileSubTit:"인턴 'Gina'의 회고",
          profileTxt:"카이스트 AI대학원 주재걸교수님 연구실 석사과정",
          interviewTextA:"사내에서 상시로 열리는 기술 공유 세미나 ‘미니컨퍼런스’ 시간을 통해 CEO와 이야기하고 의견을 나눠본다던가 하는 것이 신선했어요. 다른 연구자들의 발표를 듣다 보면 업계 지식도 늘고 자극이 되기도 하더라고요.",
          interviewTextB:"카카오브레인은 매머드 조직이 아니지만  큰 조직 못지않은 AI 시스템과 풍부한 자원들에 업무 지원도 잘 되어 연구에만 신경 쓸 수 있었어요. 거기다 스타트업 같은 파이팅도 넘치는  조직이라 뭔가 함께 토론하며 일하는 맛도  나더라고요.",
          adviceTxtA:"대기업에서 정직원처럼 일하는 체험을 통해 성장할 분들",
          adviceTxtB:"업계 최고 동료들과 다양한 프로젝트 협업을 경험해볼 분들",
          adviceTxtC:"최신 트렌드 정보를 흡수해 자신을 발전시키고 싶은 분들",
          adviceTxtD:"자신이 어떤 것을 하고 싶은지 명확히 정의하세요.",
          adviceTxtE:"평소에 궁금했지만 쉽게 접할 수 없던 기술적 궁금증 리스트를 만들어 보세요.",
          interviewTidy:"지나가 말한 ‘카카오브레인은 ‘빠르다’는 한마디엔 여러 가지가 담겨있어요. 단순히 내달리는 빠름보다는 서로 의견을 나누고 도움받고 때로는 도와주며, 서로의 능력에 맞게 나아가는 것이 카카오브레인 식의 발전입니다. ‘함께 가면 느리지만 멀리 갈 수 있다’보다 ‘함께 가야 힘내서 더 빨리 갈 수 있다’는 말이 옳다는 것을, 카카오브레인은 증명하고 있습니다.",
        },
        {
          name:'Gina',
          team:'Neuro-Symbolic AI',
          profileSubTit:"인턴 'Gina'의 회고",
          profileTxt:"카이스트 AI대학원 주재걸교수님 연구실 석사과정",
          interviewTextA:"사내에서 상시로 열리는 기술 공유 세미나 ‘미니컨퍼런스’ 시간을 통해 CEO와 이야기하고 의견을 나눠본다던가 하는 것이 신선했어요. 다른 연구자들의 발표를 듣다 보면 업계 지식도 늘고 자극이 되기도 하더라고요.",
          interviewTextB:"카카오브레인은 매머드 조직이 아니지만  큰 조직 못지않은 AI 시스템과 풍부한 자원들에 업무 지원도 잘 되어 연구에만 신경 쓸 수 있었어요. 거기다 스타트업 같은 파이팅도 넘치는  조직이라 뭔가 함께 토론하며 일하는 맛도  나더라고요.",
          adviceTxtA:"대기업에서 정직원처럼 일하는 체험을 통해 성장할 분들",
          adviceTxtB:"업계 최고 동료들과 다양한 프로젝트 협업을 경험해볼 분들",
          adviceTxtC:"최신 트렌드 정보를 흡수해 자신을 발전시키고 싶은 분들",
          adviceTxtD:"자신이 어떤 것을 하고 싶은지 명확히 정의하세요.",
          adviceTxtE:"평소에 궁금했지만 쉽게 접할 수 없던 기술적 궁금증 리스트를 만들어 보세요.",
          interviewTidy:"지나가 말한 ‘카카오브레인은 ‘빠르다’는 한마디엔 여러 가지가 담겨있어요. 단순히 내달리는 빠름보다는 서로 의견을 나누고 도움받고 때로는 도와주며, 서로의 능력에 맞게 나아가는 것이 카카오브레인 식의 발전입니다. ‘함께 가면 느리지만 멀리 갈 수 있다’보다 ‘함께 가야 힘내서 더 빨리 갈 수 있다’는 말이 옳다는 것을, 카카오브레인은 증명하고 있습니다.",
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