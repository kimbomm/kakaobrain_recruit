<template>
  <div class="faq">
    <MainTitle
      :title="`FAQ.`"
    />
    <MainTitleText
      :text="`영입 관련한 질문이 있으신가요?</br>
      자세히 알려드리겠습니다.`"
    />
    <MiddleImg/>

    
    <div class="system-plan">
      <div class="list-box">
        <ContentsTitle
          :title="`우선 확인해 주세요.`"
        />
        <ContentsText
          text='영입 절차의 공정화에 관한 법률 <span class="underline">제 4조의 3</span>에 근거하여 직무수행에 필요하지 않은 정보를 이력서에 기재하는 경우 서류반환 및 접수 취소됩니다.'
        />
        <ContentsText
          text='영입 관련한 모든 질문은 <span class="underline">apply@kakaobrain.com</span></spa>로 메일로 주시면 확인하여 회신 드릴 수 있도록 하겠습니다.'
        />
      </div>
      <div class="faq-btn l-ml-3"><span class="btn-txt">Our Open Position →</span></div>
    </div>

    

    <div>
      <ContentsTitle
        :title="`FAQ`"
      />
      <ul class="faq-list">
        <li v-for="(data, index) in faqList" :key="index">
          <FoldingBox :data="data" />
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
  import ContentsText from '@/components/company/ContentsText'
  import FoldingBox from '@/components/elements/button/FoldingBox'
  export default {
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      ContentsTitle,
      ContentsText,
      FoldingBox
    },
    data() {
      return {
        faqList: [
          {
            title: 'Q. 서류평가 결과는 언제 받아볼 수 있나요?',
            content:
              '이력서를 제출한 날로부터 가급적 7일 내(영업일 기준)로 결과를 알려드립니다만 공고별로 상이할 수 있는 점 참고 부탁드립니다. 접수 시 메일로 안내된 기간이 지났음에도 불구하고 결과를 받아보지 못하셨을 경우, 현업에서 심사숙고하여 검토 후 결과를 안내드리려다보니 지연이 되고 있는 상황으로 보입니다.\n\n서류전형 결과가 나오면 메일로 안내드릴 예정입니다.'
          },
          {
            title: 'Q. 인턴십 또는 다른 분야의 영입 계획은 없나요?',
            content:
              '영입 계획이 확정되면 진행중인 영입공고에 게재할 계획입니다.\n관심을 갖고 지켜봐주시면 감사하겠습니다.'
          },
          {
            title: 'Q. 외국인의 경우, 지원 가능한가요?',
            content:
              '국적에 대해 따로 제한사항을 두고 있지는 않습니다만, 취업이 가능한 비자를 소지하고 계셔야 합니다. \n추가로 카카오브레인은 현재 카카오 계열사 및 학교, 국내기관들과 커뮤니케이션 및 협업을 진행하고 있기 때문에, \n한국어를 기반으로 의사소통과 업무 수행이 가능해야 합니다.'
          },
          {
            title: 'Q. 인터뷰 결과와 관련하여 피드백을 받을 수 있을지요?',
            content:
              '인재 영입은 수많은 지원자들을 심사하여 해당 포지션에 가장 적합하고 우수한 인재를 선발하는 과정입니다. \n따라서 합/불 결과는 상대적인 평가와 비교를 통하여 복합적으로 판단되는 경우가 많아 \n특정한 구체적인 사유를 말씀 드리기가 참 어렵습니다. \n\n한 분 한 분 구체적인 불합격 사유를 말씀 드리지 못하는 점 진심으로 죄송하게 생각합니다.'
          },
          {
            title: 'Q. 불합격 시, 재지원은 언제부터 가능한가요?',
            content: '재지원 가능 시점은 서류제출 시점부터 1년 뒤 입니다.'
          },
          {
            title: 'Q. 병역특례로 지원이 가능한가요?',
            content:
              '병무청에서는 전문연구요원(연구기관에서 과학기술 연구·학문분야 종사)과 산업기능요원(산업체에서 제조·생산 분야 종사)를 관리하고 있습니다. \n당사에 있는 인공지능연구소에는 업종특성상 전문연구요원만 운영 중이며, 신규편입 인원 선발은 병무청으로 부터 배정받은 T/O가 없어 인원 선발이 불가하나, 전직은 소정기간 복무한 인원에 한하여 당사로 지원이 가능합니다. \n\n병역특례에 관련한 사항은 <span class="underline">apply@kakaobrain.com</span> 메일로  1:1 문의를 통해 확인해 주시기 바랍니다.'
          },
          {
            title: 'Q. 군미필자인 경우 지원이 가능한가요?',
            content:
              '병역 미필자(면제자예외)는 면접에 합격 하시더라도 입사 후 원만한 직장 생활이 어렵기 때문에 지원이 불가능합니다. \n다만, 병역특례는 예외입니다. \n\n병역특례에 관련한 사항은 <span class="underline">apply@kakaobrain.com</span> 메일로  1:1 문의를 통해 확인해 주시기 바랍니다.'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .faq {
    padding: 0 20px;
    &-list {
      width: getWidth(5);
      margin-left: getMargin(3);
      li {
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
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
  }

  .faq-btn{
    width:170px;
    height:50px;
    border:1px solid $gray-9;
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
      color: $gray-9;
    }
  }
  .contents-title{
    margin-bottom:40px;
  }
  .system-plan{
    margin-bottom:200px;
    .list-box{
      margin-bottom:40px;
      
      .contents-text{
        position: relative;
        padding-left:20px;
        &:not(:last-child){
          margin-bottom:20px;
        }
        &::before{
          content: "";
          position: absolute;
          left:8px;
          top:10px;
          width:4px;
          height:4px;
          border-radius: 100%;
          background-color: $gray-9;
        }
      }
    }
  }
</style>
