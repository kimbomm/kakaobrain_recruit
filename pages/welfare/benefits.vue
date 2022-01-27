<template>
  <div class="welfare">
    <MainTitle
      :title="`복지해택.`"
    />
    <MainTitleText
      :text="`업무에 집중할 수 있도록, 크루의 성장을 위해,</br>
      카카오브레인 크루와 가족을 위한 복지혜택을 소개합니다.`"
    />
    <MiddleImg/>

    <ContentsTitle
      :title="`꼼꼼하게 보세요.</br>
      비교해서 보세요.</br>
      진정으로 크루를 위한 진심.`"
    />

    <div class="folding-rule gl-5 l-ml-3">
      <ul class="rule-list">
        <li v-for="(data, index) in benefitsList" :key="index">
          <FoldingBox :data="data"/>
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
import FoldingBox from '@/components/elements/button/FoldingBox'
export default {
  name:'index',
  components:{
    MainTitle,
    MainTitleText,
    MiddleImg,
    ContentsTitle,
    FoldingBox,
  },
  data(){
    return{
      benefitsList: [
        {
          title: "완전선택근무시간제란?",
          titleText:'근속 연수에 상관없이 동일 지급.',
          content:
            '<div class="folding-item">연/25일은 1년 만근 기준 지급됩니다.(중도 입사자는 당해년 근무기간으로 일할계산 지급)</div></br><div class="folding-item">휴가는 결재 없이 본인이 원할 때 시스템에 등록하고 사용할 수 있습니다.</div></br><div class="folding-item">연/25일은 1년 만근 기준 지급됩니다.(중도 입사자는 당해년 근무기간으로 일할계산 지급) 휴가는 결재 없이 본인이 원할 때 시스템에 등록하고 사용할 수 있습니다. 연/25일의 휴가는 1시간 단위로 나눠 시간차로 사용 가능합니다.(1일 휴가 = 8시간의 휴가)</div></br><div class="folding-item">연말까지 쓰고 남은 휴가는 본인 니즈에 따라 연차수당으로 받거나, 익년도로 이월해 연중에 아무때나 사용 할 수 있습니다.</div></br><div class="folding-item">휴가는 유연근무 시스템과 함께 설계되어 있으며, 시간 관리를 보다 쉽게 할 수 있도록 모바일에서 사용 가능하고,</br>[슬랙과 구글캘린더]로 연결해 어디서나 쉽게 이용할 수 있습니다.</div>',
          isText:true,
        },
        {
          title: "원격(재택) 근무와 유연 근무(완전선택근무시간제)",
          content:
            '<div class="folding-item">카카오브레인 크루는 업무 공간을 스스로 정해 일합니다.</div></br><div class="folding-item"><span class="underline">원격근무와 유연근무제 상세보기</span></span></div>',
          isText:false,
        },
        {
          title: "복지 대출 이자지원",
          titleText:'대출금 최대 3억원 한도, 대출 이자 지원',
          content:
            '<div class="folding-item">주거안정(주택구입, 임차료)과 생활안정(의료비, 학자금 등)을 위한 최대 3억원 제휴은행 대출에 대한 이자를 지원합니다. </div>',
          isText:true,
        },
        {
          title: "직장 어린이집 지원",
          content:
            "<div class='folding-item'>카카오 공동체 직장 어린이집 지원 : <span class='underline'>늘예솔</span>, <span class='underline'>오리뜰</span>, <span class='underline'>스페이스닷키즈</span></div></br><div class='folding-item'>판교오피스 인근의 '<span class='underline'>스타트업캠퍼스어린이집</span>' 도 제휴해 지원합니다</div>",
          isText:false,
        },
        {
          title: "양가 부모님까지 지원되는 국내 최고 수준 단체 의료비보험 가입",
          titleText:'보장성 보험료, 의료실손비, 치과 보철/보존비 지원',
          content:
            '[본인 직계 가족]과 [배우자의 부모님까지] 갑작스런 [각종 상해, 사고, 질병]에 대하여 의료비 걱정없이 병원 치료를 받을 수 있도록 단체 의료비 보험 혜택(보장성보험료와 실손의료비)을 지원합니다.</br></br><div class="folding-item">실손의료비 혜택 : [외래진료비/입원치료비/약조제비]를 본인 직계가족과 배우자의 부모님까지 동일하게 지원합니다.</div></br><div class="folding-item">치과 보철 및 보존 치료비 : 크라운, 충치, 신경치료, 레진, 브릿지, 임플란트 등의 치과 비용을 지원합니다. 단, 치과 보철 및 보존 비용은 매해년 보험 갱신에 따라 가족관계별 지원 한도에 차이 있을 수 있습니다.</div>',
          isText:true,
        },
        {
          title: "종합 검진 및 종합검진휴가 지원",
          content:
            "<div class='folding-item'>전국의 여러 전문 건강검진기관과 연계해 매해년  [건강검진을 무료]로 받을 수 있도록 지원합니다.</div><div class='folding-item'>평일 건강 검진 시, 검진 당일 [유급휴가 연/1일(8시간)]을 지원합니다.</div><div class='folding-item'>크루 가족은 크루에게 지원되는 동일 종합 건강검진 상품을 카카오 공동체와 계약된 거래가격으로 저렴하게 이용하실 수 있게 지원합니다.</div>",
          isText:false,
        },
        {
          title: "독감 백신 접종비 지원",
          content:
            "<div class='folding-item'>구성원의 안전을 위해 독감백신접종 비용을 연 1회 지원합니다.</div>",
          isText:false,
        },
        {
          title: "코로나 19 백신접종휴가 2일 지원",
          content:
            "<div class='folding-item'>코로나19 백신 접종을 하는 경우, 백신 접종 휴가로 유급휴가 2일을 지원합니다.</div>",
          isText:false,
        },
        {
          title: "사망보험금 지급",
          titleText:'보장성 보험료, 의료실손비, 치과 보철/보존비 지원',
          content:
            "<div class='folding-item'>크루가 불의의 사고 또는 질병으로 사망했을 때, 크루 가족이 안정적으로 생활 계획을 세우는데 도움이 될 수 있도록 유가족에게 사망보험금을 지급합니다.</div>",
          isText:true,
        },
        {
          title: "명절 선물",
          titleText:'카카오머니 30만원 지급',
          content:
            "<div class='folding-item'>설/추석 명절마다 카카오머니 30만원을 지급합니다.</div>",
          isText:true,
        },
        {
          title: "임신/출산 축하 선물 키트 지급",
          content:
            "<div class='folding-item'>본인과 배우자의 임신/출산을 축하하는 선물 키트를 지급합니다.</div>",
          isText:false,
        },
        {
          title: "상조 서비스 지원",
          content:
            "<div class='folding-item'>크루 가족의 조사 발생 시 상조전문인력 및 조화, 소모품 등 지원합니다.</div>",
          isText:false,
        },
        {
          title: "경조금 및 경조휴가, 경조용품 지원",
          content:
            "<div class='folding-item'>결혼, 환갑, 조사 등 집안 내 경조사 발생 시 축하금 및 조의금을 지급합니다.</div></br><div class='folding-item'>경조일의 기념이나 경조사에 참여를 할 수 있도록 경조일 또는 경조기간에 경조휴가를 지급합니다.</div></br><div class='folding-item'>경조사 발생 시, 축하 또는 조의의 마음을 전하는 예를 표하기 위하여 경조금과 경조화환(조화)를 전달하고 있습니다.</div>",
          isText:false,
        },
        {
          title: "도서비 무제한 지원",
          content:
            "<div class='folding-item'>업무를 위해, 자기개발을 위해 구매가 필요한 도서는 개인별로 발급해 드린 개인 법인카드로 결제하여 구입하여 보면 됩니다.</div>",
          isText:false,
        },
        {
          title: "1인 1개의 법인카드 제공",
          content:
            "<div class='folding-item'>모든 크루에게 1인 1개의 법인카드가 제공됩니다.</div></br><div class='folding-item'>법인카드는 자율과 책임의 문화 기조 아래 식대, 도서 구입, 회식비 등 별도의 금액 제한 없이 사용할 수 있습니다.</div>",
          isText:false,
        },
        {
          title: "무제한 간식 제공",
          content:
            "<div class='folding-item'>오피스 라운지 스낵바에는 다양한 간식과 음료가 준비되어 있습니다.</div></br><div class='folding-item'>배고픈 크루를 위한 라면, 즉석밥도 있고요.</div></br><div class='folding-item'>라운지 스낵바에 없는 먹고 싶은 간식이 있다면 스낵바에 비치된 패드나 QR코드로 신청해 주세요.</div></br><div class='folding-item'>브레인 랭킹 간식과 함께 크루가 신청한 새로운 간식은 라운지 스낵바에 계속 업데이트 됩니다.</div>",
          isText:false,
        },
        {
          title: "아침식사 지원",
          content:
            "<div class='folding-item'>오피스에 출근한 크루를 위해 간단한 아침식사를 준비해 두고 있습니다.</div>",
          isText:false,
        },
        {
          title: "저녁식사 지원",
          content:
            "<div class='folding-item'>동료와 저녁 식사를 함께 한다면 법인카드를 이용할 수 있습니다. </div>",
          isText:false,
        },
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
  .welfare{
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
    .folding-rule{
      // margin-bottom:200px;
      .rule-list{
        li{
          &:not(:last-child){
            margin-bottom:10px;
          }
        }
      }
    }
  }
  
  @include pc-large {
    .welfare{
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
      .folding-rule{
        .rule-list{
          li{
            &:not(:last-child){
              margin-bottom:14px;
            }
          }
        }
      }
    }
    
  }
  @include pc-4k {
    .welfare{
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
      .folding-rule{
        .rule-list{
          li{
            &:not(:last-child){
              margin-bottom:20px;
            }
          }
        }
      }
    }
  }
  @include tablet {
    .welfare{
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
      .folding-rule{
        &.gl-5{
          width: getWidth(7) !important;
        }
        &.l-ml-3{
          margin-left: getMargin(2) !important;
        }
      }
    }
    
  }
  @include mobile {
    .welfare{
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
      .folding-rule{
        &.gl-5{
          width: 100% !important;
        }
        &.l-ml-3{
          margin-left: 0 !important;
        }
      }
    }
  }
</style>