<template>
  <div class="company">
    <MainTitle
      :title="`원격근무와</br>유연근무제.`"
    />
    <MainTitleText
      :text="`우리는 업무 공간을 스스로 정해 일합니다.</br>
      우리의 ‘완전선택근무시간제'는 자신의 업무시간을 정해 스스로 관리하며 일합니다.`"
    />
    <MiddleImg/>

    <div class="rule-box">
      <ul>
        <li class="rule-item">
          <ContentsTitle
            :title="`카카오브레인 크루는</br>업무 공간을 스스로 정해 일합니다.`"
          />
          <ContentsText
            :text="`집, 오피스, 카페, 호텔, 캠핑장 등 어디서나 본인이 정한 장소에서 업무를 해도 됩니다.</br>
            이것은 업무 공간이 어디든지 자기주도성과 자율성을 가지고 본인의 일을 잘할 수 있다는 신뢰가 있기 때문입니다.`"
          />
          <div class="company-btn l-ml-3"><span class="btn-txt">카카오브레인 페이스북에서 보기 →</span></div>

        </li>

        <li class="rule-item">
          <ContentsTitle
            :title="`카카오브레인에는</br>고정된 출·퇴근 시간도 없고, 지각도 없습니다.`"
          />

            <ContentsText
              :text="`정해진 월 업무 시간을 다 채울 수 있다면 일찍 업무를 종료할 수 있고,</br>
              초과했다면 연장 수당을 지급 받거나 그만큼의 Off 시간 이나 Off 휴가를 사용할 수도 있습니다.</br>
              이것은 유연근무제를 [완전선택근무시간제]로 선택해 우리의 Fit에 맞춰 운영하고 있기 때문입니다.`"
            />

        </li>

        <li class="rule-item">

          <SmallTitle
            :title="`우리는 원격 근무 중에도 동료 관계와 팀워크를<br/> 
            놓치지 않고 즐겁게 일할 수 있는 좋은 방법을<br/>
            계속 논의하며 우리의 원격 근무 방식을 만들어 가고 있습니다.`"
          />

          <div class="share-rule gl-5 l-ml-3">
            <ul class="rule-list">
              <li v-for="(data, index) in benefitsList" :key="index">
                <FoldingBox :data="data"/>
              </li>
            </ul>
          </div>
        </li>

        <li class="rule-item">
          <SmallTitle
            :title="`카카오브레인 크루들이 논의해</br>
            [완전선택근무시간제]를 제도화 했습니다.`"
          />
          <ContentsText
            :text="`크루가 [자기 주도성]과 [자율성]을 가지고, 일 할 때는 몰입해서 일을 하고, 쉴 때는 확실하게 더 잘~ 쉴 수 있는 근무제로</br>
            [최소한의 원칙에 적용해 최대한 자유롭게 근로 시간을 관리할 수 있는] 근무제가 될 수 있도록 카카오브레인 크루들이 논의를 통해
            선택하고 제도화 했습니다.`"
          />
          <div class="share-rule gl-5 l-ml-3">
            <ul class="rule-list">
              <li v-for="(data, index) in qna" :key="index">
                <FoldingBox :data="data"/>
              </li>
            </ul>
          </div>
        </li>
        
        <li class="rule-item">
          <SmallTitle
            :title="`유연근무시스템을 통해 스스로 점검하고,</br>
            앞으로의 일정을 계획해 한 달 단위 근로 시간을</br>
            스스로 관리할 수 있습니다.</br>`"
          />
          <div class="system-plan">
            <ContentsText
              text="유연근무시스템에서 모든 크루는 본인의 업무 시간을 모두가 열람할 수 있게 공개하기 때문에</br>
              별도의 코어타임(Core-Time)을 정하지 않고, 서로의 협업의 가치를 존중해 업무를 잘 할 수 있고, 성실한 업무 수행과 조화를
              이루는 범위 내에서 크루 개개인의 유연한 근무시간 계획 및 운용이 가능합니다."
            />
            <div class="list-box">
              <ContentsText
                text='유연근무시스템은 가급적 크루의 업무 몰입에 방해되지 않게 하기 위해 시간 관리를 보다 쉽게 할 수 있도록 모바일에서 사용 가능하며, 슬랙과 구글캘린더로 연결해 어디서나 쉽게 이용할 수 있게 합니다.'
              />
              <ContentsText
                text='유연근무제를 통해 일과 생활의 균형을 맞춰 크루 개인의 업무에 더욱 몰입할 수 있기를 바라기에, 지속적으로 크루들과 커뮤니케이션하면서 우리에게 더 잘 맞는 제도로 개선하고 있습니다.'
              />
            </div>
          </div>
        </li>

        <li class="rule-item">
          <SmallTitle
            :title="`크루의 편의를 위해</br>
            업무 하지 않는 시간을 비우는 ‘OFF 제도'는 </br>
            휴가처럼 사용 할 수 있습니다.`"
          />
          <div class="system-plan">
            <div class="list-box">
              <ContentsText
                text='하루의 업무를 시작하면 종료시간까지 무조건 업무를 이어서 해야 할 필요는 없습니다.</br>
                해당 월의 총 표준근로시간을 전부 채워 근무했고, 현업 일정에 지장이 없는 경우, 해당 월의 나머지 시간은 업무 하지 않아도 되기 때문입니다.'
              />
              <ContentsText
                text='카카오브레인은 크루의 편의를 위해 연/25일의 유급 휴가를 1시간 단위로 나눠서 휴가 사용을 할 수 있기 때문에 개인 사정에 따라 업무 시간 중간에 1시간 단위로 시간차 휴가를 사용할 수 있습니다.</br>(유급휴가 1일 = 8시간 휴가)'
              />
              <ContentsText
                text="휴가를 사용해야 할 때, 해당 월에 연장 근로 한 시간이 있다면,</br> 그 시간 만큼은 업무하지 않고 시간을 비우는 ‘Off제'를 이용해 휴가처럼 사용할 수도 있고 모든건 본인이 선택에 따라 사용 가능합니다."
              />
            </div>
          </div>
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
import SmallTitle from '@/components/company//SmallTitle'
export default {
  name:'index',
  components:{
    MainTitle,
    MainTitleText,
    MiddleImg,
    ContentsTitle,
    ContentsText,
    FoldingBox,
    SmallTitle,
  },
  data(){
    return{
      benefitsList: [
        {
          title: '랜선 회식을 지원해요.  ',
          content:
            '<span class="string">동료와의 캐주얼한 대화는 팀워크의 기반이 되고 업무 집중력을 높이는데 도움</span>이 된다고 합니다.</br></br> 우리는 원격 근무 중에도 동료 관계와 팀워크. 모두~ 놓쳐지지 않도록  업무 종료이후 시간에 각자 좋아하는 배달 음식을 시켜 얘기 나누는 랜선 회식비를 지원 합니다. 또한 팀단위의 회식이라면 업무 시간 중에도 랜선/오프라인 회식 모두 가능하고 지원됩니다. '
        },
        {
          title: '모든 크루에게 1인 1개의 법인카드가 제공됩니다.',
          content:
            '법인카드는 자율과 책임의 문화 기조 아래 식대, 도서 구입, 랜선회식 및 오프라인 회식비 등 별도의 금액 제한 없이 직접 결제해 사용할 수 있습니다.'
        }
      ],
      qna: [
        {
          title: "완전선택근무시간제란?",
          content:
            '<div class="folding-item">일정기간 (1월 이내)의 단위로 정해진 총 근무시간 범위 내에서 업무의 시작 및 종료 시각, 1일의 근무시간을 크루가 자율적으로 결정할 수 있는 유연근무제도입니다.</div></br><div class="folding-item">해당 월의 총 표준근로시간을 전부 채워 근무했고, 현업 일정에 지장이 없는 경우, 해당 월의 나머지 시간은 업무하지 않아도 됩니다.(Off제)</div></br><div class="folding-item">1개월 단위 총 근무시간 계산 : 달력상 일수 / 7일 × 40시간 (휴일, 휴무일 포함)</div>'
        },
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
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
  .small-title{
    margin-bottom:40px;
  }
  .share-rule{
    // margin-bottom:200px;
    .rule-list{
      li{
        &:not(:last-child){
          margin-bottom:10px;
        }
      }
    }
  }
  
  .rule-box{
    .rule-item{
      &:not(:last-child){
        margin-bottom:200px;
      }
    }
  }
  
  .system-plan{
    .contents-text{
      margin-bottom:20px
    }
    .list-box{
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
  
  
</style>