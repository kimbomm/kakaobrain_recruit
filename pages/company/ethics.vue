<template>
  <div class="company">
    <MainTitle
      :title="`카카오브레인</br>사이버윤리실.`"
    />
    <MainTitleText
      :text="`제보자가 안심하고 제보할 수 있도록 신고 내용과 제보자의 신분은 철저하게 보호되며,</br> 
      빠른 시일 내에 처리할 수 있도록 최선을 다할 것입니다.`"
    />
    <MiddleImg/>

    <div class="rule-box">
      <ul>
        <li class="rule-item">
          <ContentsTitle
            title="사이버윤리실 안내"
          />
          <ContentsText
            :text="`카카오브레인 사이버 윤리실은 카카오브레인 임직원의 불공정한 행위나 금품, 접대와 같은 부당한 요구, 회사 자산의 부당 사용이나 남용,협력업체에 대한 부정 투자, 비공개 정보의 유출, 문서나 데이터의 조작, 기타 비리 및 부정 행위를 신고, 상담하는 곳입니다.</br></br>
            어떤 경우에도 제보자가 안심하고 제보할 수 있도록 신고 내용과 제보자의 신분은 철저하게 보호되며, </br>빠른 시일 내에 처리할 수 있도록 최선을 다할 것입니다.`"
          />
        </li>
        <li class="rule-item">
          <ContentsTitle
            title="신고유형"
          />
          <div class="type-box gl-5 l-ml-3">
            <ul>
              <li v-for="(data, index) in typeListA" :key="index" class="type-list">
                <ContentsTypeList :data="data"/>
              </li>
            </ul>
          </div>
        </li>
        <li class="rule-item">
          <ContentsTitle
            title="신고처"
          />
          <ContentsInfo/> 
        </li>
        <li class="rule-item">
          <ContentsTitle
            title="선물 및 향응 수수에 관한 윤리지침"
          />
          <ContentsText
            :text="`카카오브레인 직원 및 그 가족 구성원들은 이해관계의 충돌을 일으킬 수 있는 어떠한 금품 및 향응을 받아서는 아니되며 경쟁사, 고객, 기타 업무상의 비지니스 파트너들도 금품 및 향응을 제공해서는 안됩니다.</br></br> 
            선물 및 금품 수령시 즉시 반환이 원칙이며 이미 수령한 선물 및 금품은 컬처팀에 반납하여 추후 안내를 받아야 합니다. 카카오브레인 직원은 본인 및 가족 또는 지인의 이익을 위하여 선물, 사례,  사업상의 우대를 청하여서는 아니되며,</br>아래의 경우 문제가 발생할 수 있습니다.`"
          />
          <div class="type-box gl-5 l-ml-3">
            <ul>
              <li v-for="(data, index) in typeListB" :key="index" class="type-list">
                <ContentsTypeList :data="data"/>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="company-btn l-ml-3"><span class="btn-txt">기업윤리규정 자세히보기 →</span></div>
    

  </div> 
</template>
<script>
import MainTitle from '@/components/company/MainTitle'
import MainTitleText from '@/components/company/MainTitleText'
import MiddleImg from '@/components/company/MiddleImg'
import ContentsTitle from '@/components/company/ContentsTitle'
import ContentsText from '@/components/company/ContentsText'
import ContentsTypeList from '@/components/company/ContentsTypeList'
import ContentsInfo from '@/components/company/ContentsInfo'
export default {
  name:'ethics',
  components:{
    MainTitle,
    MainTitleText,
    MiddleImg,
    ContentsTitle,
    ContentsText,
    ContentsTypeList,
    ContentsInfo,
  },
  data(){
    return{
      typeListA: [
        {
          text: '이해관계자로부터 사례를 받는 경우'
        },
        {
          text: '협력업체 선정의 투명성 결여'
        },
        {
          text: '회사자산 부당 사용 및 남용'
        },
        {
          text: '거래처에 대한 부정 투자'
        },
        {
          text: '협력업체 선정의 투명성 결여'
        },
        {
          text: '임직원의 이중취업'
        },
        {
          text: '회사정보 유출'
        },
        {
          text: '기타 도덕적 해이'
        },
        {
          text: '성적 괴롭힘'
        },
        {
          text: '직장내 괴롭힘'
        }
      ],
      typeListB: [
        {
          text: '이해관계자가 카카오브레인 직원에게 식사, 향응 등을 제공하는 경우'
        },
        {
          text: '이해관계자가 카카오브레인 직원의 경조사에 경조금 또는 화환을 제공하는 경우'
        },
        {
          text: '이해관계자가 카카오브레인 직원에게 교육, 단합대회, 문화행사 등의 명분으로 강사료, 식대, 공연티켓 등을 제공하는 경우'
        },
        {
          text: '이해관계자가 업무를 목적으로 카카오브레인 직원과 동행하면서 차량, 숙박비, 관광가이드 등의 편의를 제공하는 경우'
        },
        {
          text: '이해관계자가 카카오브레인 직원에게 경품제공, 특별할인 등의 방식으로 편의를 제공하는 경우'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .company{
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
      margin-bottom:40px;
    }
  
    .type{
      &-list{
        &:not(:last-child){
          margin-bottom:10px;
        }
      }
    }
  
    .rule-box{
      margin-bottom:200px;
      .rule-item{
        &:not(:last-child){
          margin-bottom:200px;
        }
      }
      // .text-box{
      //   .contents-text{
      //     margin-bottom:70px;
      //   }
      // }
    }
    .company-btn{
      width:238px;
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
  }
  @include pc-large {
    .company{
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
      .contents-text{
        margin-bottom:240px;
      }
    
      .type{
        &-list{
          &:not(:last-child){
            margin-bottom:14px;
          }
        }
      }
      .rule-box{
        margin-bottom:270px;
        .rule-item{
          &:not(:last-child){
            margin-bottom:270px;
          }
        }
      }
      .company-btn{
        width:218px;
        height:60px;
        padding:19px 14px;
        .btn-txt{
          font-size: 16px;
        }
      }
    }
  }
  @include pc-4k {
    .company{
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
      .contents-text{
        margin-bottom:400px;
      }

      .type{
        &-list{
          &:not(:last-child){
            margin-bottom:20px;
          }
        }
      }
      .rule-box{
        margin-bottom:400px;
        .rule-item{
          &:not(:last-child){
            margin-bottom:400px;
          }
        }
      }
      .company-btn{
        width:300px;
        height:90px;
        padding:28px 18px;
        .btn-txt{
          font-size: 22px;
        }
      }
    }
  }
  @include tablet {
    .company{
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
      .contents-text{
        margin-bottom:140px;
      }

      .type{
        &-list{
          &:not(:last-child){
            margin-bottom:10px;
          }
        }
        &-box{
          &.gl-5{
            width: getWidth(7) !important;
          }
          &.l-ml-3{
            margin-left: getMargin(2) !important;
          }
        } 
      }
      .rule-box{
        margin-bottom:140px;
        .rule-item{
          &:not(:last-child){
            margin-bottom:140px;
          }
          .contents-info{
            &.gl-5{
              width: getWidth(7) !important;
            }
            &.l-ml-3{
              margin-left: getMargin(2) !important;
            }
          }
        }
      }
      .company-btn{ 
        &.l-ml-3{
          margin-left: getMargin(2) !important;
        }
        width:180px;
        height:48px;
        padding:18px 16px;
        .btn-txt{
          font-size: 12px;
        }
      }
    }
  }
  @include mobile {
    .company{
      padding:0 20px;
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
      .contents-text{
        margin-bottom:100px;
      }

      .type{
        &-box{
          &.gl-5{
            width: 100% !important;
          }
          &.l-ml-3{
            margin-left: 0 !important;
          }
        } 
      }
      .rule-box{
        margin-bottom:100px;
        .rule-item{
          &:not(:last-child){
            margin-bottom:100px;
          }
          .contents-info{
            &.gl-5{
              width: 100% !important;
            }
            &.l-ml-3{
              margin-left: 0 !important;
            }
          }
        }
      }
      .company-btn{ 
        &.l-ml-3{
          margin-left: 0 !important;
        }
        width:180px;
        height:48px;
        padding:18px 16px;
        .btn-txt{
          font-size: 12px;
        }
      }
    }
  }
</style>