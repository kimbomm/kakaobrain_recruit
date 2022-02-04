<template>
  <div class="question-box">
    <div class="title gl-6">
      카카오브레인다움은<br/> 어떤 물음으로 만들어질까요?
    </div>
    <div class="list">
      <ul>
        <li class="question-item" v-for="(data,index) in questionList" :key="index">
          <QuestionList :data="data"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import QuestionList from '@/components/company/QuestionList'
export default {
  components:{
    QuestionList
  },
  data(){
    return{
      questionList:[
        {
          title:'일에 끌려다니지 않고</br>일의 주인이 될 수는 없을까?',
          text:'스스로 문제를 찾고, 새롭게 정의하고, 도전적인 목표를 설정하여 주도적으로 일합니다.</br>누군가 걸어간 길이 아닌 새로운 길을 끊임없이 개척합니다.'
        },
        {
          title:'직급에 관계없이 의견을</br>솔직하게 말할 수는 없을까?',
          text:'자유롭게 자신의 생각을 밝히고 거리낌 없이 토론합니다.</br>서로의 신뢰를 바탕으로 논쟁하여 나온 결론에 대하여서는 모두가 한 방향으로 헌신합니다.'
        },
        {
          title:'누구나 필요한 정보를</br>바로 공유 받을 수는 없을까?',
          text:'모든 크루가 하고 있는 일과 과정을 투명하게 공개하고 공유합니다.</br>정보와 경험의 공유를 바탕으로 업무에 더욱 빠르게 몰입할 수 있습니다. '
        },
        {
          title:'한 명도 빠짐없이 모든 크루가</br>성장할 수 있을까?',
          text:'모두가 업무에 몰입하고 성장에 집중할 수 있는 환경을 구성합니다.</br>크루와 소통하고 협업하며 더 즐겁게, 잘 갈 수 있는 길을 만들어갑니다.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .question-box{
    padding:870px 0 500px;
    background-color:$gray-9 ;
    .title{
      position: relative;
      margin:0 auto;
      margin-bottom: 688px;
      text-align: center;
      font-weight: 900;
      font-size: 90px;
      line-height: 120%;
      color: $gray-0;
      &::before{
        content:"";
        position: absolute;
        left:50%;
        bottom:-240px;
        transform: translate(-50%, 48px);
        font-family: Inter;
        font-weight: 900;
        font-size: 40px;
        line-height: 120%;
        color:$gray-0;
      }
    }
    .list{
      .question-item{
        &:not(:last-child){
          margin-bottom:400px;
        }
      }
    }
  }
</style>