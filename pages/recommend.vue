<template>
  <div class="">
    <MainTitle
      :title="`사외 추천 제도.`"
    />
    <MainTitleText
      :text="`카카오브레인과 함께 생각하지 못한 물음을 던지고, 아무도 가보지 않은 길을 개척할 Unthinkable Krew를 기다립니다.</br>
      함께할 인재를 추천해 주세요.`"
    />
    <MiddleImg/>

    <div class="rule-box">
      <ul>
        <li class="rule-item">
          <ContentsTitle
            :title="`구성원이 아니라도 누구나.`"
          />
          <ContentsText
            :text="`카카오브레인 구성원이 아니어도 누구나 추천해 주실 수 있습니다.</br>
            추천해 주신 인재가 입사하면, 추천 보상금 300만원을 드립니다.`"
          />
        </li>

        <li class="rule-item">
          <div class="system-plan">
            <ContentsTitle
              :title="`인재 추천 방법`"
            />

            <div class="list-box">
              <SmallTitle
                :title="`➀ 오픈된 영입 공고를 확인해 주세요.`"
              />
              <div class="box-text-con">
                <ContentsText
                  text='추천 대상 : 정규직 포지션 지원 자격에 맞는 직무 역량과 경험을 보유한 인재'
                />
              </div>
              <div class="link-btn l-ml-3"><span class="btn-txt">Our Open Position →</span></div>
            </div>

            <div class="list-box">
              <SmallTitle
                :title="`➁ 인재 추천서를 작성해 주세요.`"
              />
              <div class="box-text-con">
                <ContentsText
                  text='지원자가 지원서를 작성하기 전, 인재추천서 설문을 완료해 보내주시면 감사하겠습니다.'
                />
              </div>
              <div class="link-btn l-ml-3"><span class="btn-txt">Talent recommendation →</span></div>
            </div>
            
            <div class="list-box">
              <SmallTitle
                :title="`➂ 지원자에게 해당 공고에 지원하도록 알려 주세요.`"
              />
              <div class="box-text-con">
                <ContentsText
                  text='지원자가 지우너서 작성시 추천인 란에 추천인을 작성하여 제출하도록 알려주세요.'
                />
                <ContentsText
                  text='서류 전형에 통과한 분에 한하여, 서류 전형 및 최종 합격 여부를 메일 안내 드립니다.'
                />
              </div>
            </div>
            
            <div class="list-box">
              <SmallTitle
                :title="`➃ 추천 보상금을 지급 드립니다.`"
              />
              <div class="box-text-con">
                <ContentsText
                  text='추천하신 분이 입사한 후, 3개월이 지나면 , 추천 보상금을 지급 드립니다.'
                />
              </div>
            </div>

          </div>
        </li>
        
        <li class="rule-item">
          <div class="system-plan">
            <ContentsTitle
              :title="`인재 추천 보상금`"
            />
            <div class="list-box">
              <SmallTitle
                :title="`보상금 : 경력 300만원 / 신입 100만원`"
              />
              <div class="box-text-con">
                <ContentsText
                  text='신입 기준은 인정 경력 2년 미만 대상을 의미합니다. 단, 인턴/아르바이트 경력은 인정되지 않는 점 참고해 주세요.'
                />
                <ContentsText
                  text='사외 추천 보상금은 피추천인의 지원서 상의 추천인과 동일한 추천인에게 지급됩니다.'
                />
              </div>
            </div>

            <ContentSubTitle tit="지급 시점"/>
            <ContentsText
              text='피추천인 입사 후 3개월 만근월 기준 **익월 10일**에 지급 드립니다.</br>
              단, 피추천인이나 추천인이 지급일 이전에 퇴직하는 경우 지급 대상에서 제외됩니다.</br>
              추천 대상자의 입사 시 보상금 지급을 위한 신분증 사본, 통장 사본 등을 요청할 수 있습니다.</br>
              보상금은 추천인의 기타 소득으로 처리되며, 소득세법 등 관련 규정에 따라 일부 세금(소득세 등)을 공제한 후 지급 드립니다.'
            />
          </div>
        </li>

        <li class="rule-item">
          <div class="system-plan">
            <ContentsTitle
              :title="`잠깐만요!</br>
              인재 추천 보상금 지급 대상에서</br>
              제외되는 경우가 있어요.`"
            />
            <div class="list-box">
              
            <div class="box-text-con">
              <ContentsText
                text='카카오 공동체에서 근무 중인 크루'
              />
              <ContentsText
                text='과거 카카오브레인에서 근무한 직원(정규직, 계약직, 파견직, 인턴)'
              />
              <ContentsText
                text='현재 또는 과거 12개월 이내 함께 일한 적이 있는 외주업체 직원 및 프리랜서'
              />
              <ContentsText
                text='이미 다른 경로를 통해 지원하였거나 전형이 진행 중인 후보자. 이미 카카오브레인 컬처팀이 이력서를 보유하고 있는 후보자 (외부 업체 추천, 헤드헌터, 후보자 직접 지원 등)'
              />
            </div>
            </div>
          </div>
        </li>

        <li class="rule-item">
          <div class="system-plan">
            <ContentsTitle
              :title="`문의하기`"
            />
            <div class="list-box">
              <SmallTitle
                :title="`사외 추천 제도 및 영입관련 문의`"
              />
              <div class="box-text-con">
                <ContentsText
                  text='apply@kakaobrain.com'
                />
              </div>
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
import SmallTitle from '@/components/company//SmallTitle'
import ContentSubTitle from '@/components/company//ContentSubTitle'
export default {
  name:'index',
  components:{
    MainTitle,
    MainTitleText,
    MiddleImg,
    ContentsTitle,
    ContentsText,
    SmallTitle,
    ContentSubTitle,
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
  .small-title{
    margin-bottom:10px;
  }
  .content-sub-title{
    margin-bottom:20px;
  }
  
  .rule-box{
    .rule-item{
      &:not(:last-child){
        margin-bottom:200px;
      }
    }

    .system-plan{
      .list-box{
        &:not(:last-child){
          margin-bottom:40px;
        }
        .box-text-con{
          margin-bottom:20px;
          .contents-text{
            &:not(:last-child){
              margin-bottom:5px;
            }
          }
        }
        .contents-text{
          position: relative;
          padding-left:20px;
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
  }
  
  .link-btn{
    display: inline-block;
    min-width:150px;
    width:auto;
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