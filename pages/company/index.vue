<template>
  <div class="company">
    <MainTitle
      :title="`우리의</br>일하는 방식.`"
    />
    <MainTitleText
      :text="`자기 주도적으로 성장할 수 있는 좋은 기회가 많이 주어지고,</br> 
      훌륭한 동료들을 통해 함께 성장할 수 있는 카카오브레인의 크루는 어떻게 일을 하고 있을까요?`"
    />
    <MiddleImg/>

    <div class="rule-box">
      <ul>
        <li class="rule-item">
          <ContentsTitle
            :title="`우리는 더 나은 결과를 위해</br>공개하고 공유해요.`"
          />
          <ContentsText
            :text="`정보의 독점은 권력이 될 수 있고 수직적인 소통 구조를 만들어 크루들의 업무 자율성을 떨어뜨릴 수 있습니다.</br>하지만 정보가 공유되면 업무의 자율성을 높이고, 집단지성의 효과를 크게 할 수 있습니다. 그래서 우리는 공유/공개를 위해</br>Notion, Slack, Google Workspace, GitHub과 같은 협업툴을 사용하고 누구나 접근하고 참여할 수 있게 합니다.</br></br>
            공유/공개도 해야 되는 ‘일’ 이지만, 공유가 최종 목적은 아닙니다.</br>효율적으로 일하는 방식을 끊임없이 고민하며 우리가 함께 성장 할 수 있도록 서로 돕습니다.</br>또한 올바른 공개 문화를 위해 보안을 지키고 크루끼리만 공유합니다.`"
          />
          <div class="share-rule gl-5 l-ml-3">
            <ul class="rule-list">
              <li v-for="(data, index) in ruleListA" :key="index">
                <FoldingBox :data="data"/>
              </li>
            </ul>
          </div>
        </li>

        <li class="rule-item">
          <ContentsTitle
            :title="`우리는 스스로 몰입하고</br>자기 주도적으로 일해요.`"
          />
          <div class="text-box"> 
            <ContentsText
              :text="`카카오브레인은 어느 곳보다 빠르게 실험하고 변화할 수 있어야 하며, 새로운 것과 아무도 가보지 않은 길에 관심을 갖고 도전해야 합니다.</br>그래서 우리는 실패를 두려워하지 않습니다. 성과는 성공만이 아니라 의미 있는 실패도 포함합니다.</br>
              당연한 것을 당연한 것이라 그냥 넘어가지 않고 스스로 질문하며 개인의 창의성을 극대화해야 하는 상황이 잦은 만큼 문제점을 스스로 찾고 해결해내는 자기 주도성이 우선으로 요구됩니다.`"
            />
          </div>
          <ContentSubTitle tit="왜 이 일을 할까?"/>
          <ContentsText
            :text="`카카오브레인 크루라면 가장 먼저 해야 하는 질문입니다. 우리는 일의 원동력을 스스로 만들어냅니다.</br>
            일에 끌려 다니지 않고 끌고 가기 위해서 언제나 내가 먼저 생각하고, 질문하고, 움직입니다.</br>
            이렇게 우리는 본인의 일에 대해 본인이 가장 잘 판단할 수 있다는 신뢰로 스스로 판단하고 스스로 자기의 일을 하는 것을 지향합니다.`"
          />
        </li>

        <li class="rule-item">
          <ContentsTitle
            :title="`우리는 수평 커뮤니케이션을</br>지향해요.`"
          />
          <ContentsText
            :text="`‘수평적’ 논의를 통해 전달되는 구성원의 생각과 의견들이 의사 결정자의 더 나은 결정을 이끌어 낼 수 있습니다.</br>
            더 이상의 논의로 의사 결정이 어려워 책임을 갖고 ‘선택’을 해야 하는 순간이 온다면 각 정해진 의사결정자가 최종적인 의사결정을 하게 됩니다`"
          />
          <div class="share-rule gl-5 l-ml-3">
            <ul class="rule-list">
              <li v-for="(data, index) in ruleListB" :key="index">
                <FoldingBox :data="data"/>
              </li>
            </ul>
          </div>
        </li>

        <li class="rule-item">
          <ContentsTitle
            :title="`우리는 최소한의 원칙으로</br>최대한의 자율성을 가져 가고자 해요.`"
          />
          <ContentsText
            :text="`우리는 마치 조직 문화가 없는 듯 느껴지게끔 가능하면 조직 문화 원칙을 최소화하고, 최대한 카카오브레인 크루들의 토의를 통해 자율적으로 모든 것을 결정하게 하는 방식을 지향하고 있습니다.</br>
            이 최소한의 원칙으로 알아서 자율적으로 돌아갈 수 있게 하는 것입니다. 따라서 제도와 원칙을 인위적으로 만들지 않고, 공유하며 만들어가는 카카오브레인의 문화는 업무에서 뿐만 아니라 사내 복지를 만들어 갈 때도 적용됩니다.`"
          />
          <div class="share-rule gl-5 l-ml-3">
            <ul class="rule-list">
              <li v-for="(data, index) in ruleListC" :key="index">
                <FoldingBox :data="data"/>
              </li>
            </ul>
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
import ContentSubTitle from '@/components/company/ContentSubTitle'
import FoldingBox from '@/components/elements/button/FoldingBox'
export default {
  name:'index',
  components:{
    MainTitle,
    MainTitleText,
    MiddleImg,
    ContentsTitle,
    ContentsText,
    FoldingBox,
    ContentSubTitle,
  },
  data(){
    return{
      ruleListA: [
        {
          title: '매주 월요일, 전사 크루가 TIM미팅에서 만나요.',
          content:
            'TIM은 &#91;Talk, it&#39;s Monday!&#93; 의 줄임말로, &#91;크루 전체가 참여하는 주 1회 미팅&#93;이에요.\n카카오브레인 크루 전체가 참여하는 전사 미팅인 TIM미팅을 통해 크루에게 다양한 정보를 투명하게 &#91;공개&#93;하고 &#91;공유&#93;합니다. TIM미팅은 단순한 공지를 위한 자리가 아닌, 참석한 모두와 자유롭게 질문을 주고 받으며 다양한 의견을 나누는 토론의 장입니다.\n\n카카오브레인 크루들이 사내 이슈와 테크트렌드에 대해 자유롭게 의견을 제시하며 질의응답을 주고 받기도 하고, 참석하지 못하는 크루를 위해 녹화본이 공유됩니다. 이런 일련의 &#91;공유 문화&#93;를 통해 카카오브레인 크루들이 회사내 이슈만큼은 외부가 아닌 내부에서 처음으로 들을 수 있게 노력하고 있습니다.\n\n또한 컬처팀은 TIM미팅을 통해 조직 개편 및 주요 공지 사항을 리마인드하고, 크루의 결혼이나 생일 등의 축하도 합니다. 신규 입사한 뉴크루를 소개하거나 브레인을 떠나는 크루와 아쉬움을 나누는 시간도 마련합니다.'
        },
        {
          title: '매월 마지막 금요일, 전사 크루가 미니컨퍼런스를 합니다.',
          content:
            '함께 일하는 크루들과 공유를 통한 공감대를 형성하고, 더 성장하기 위해 매월 마지막 주 금요일에는 전사 크루가 미니컨퍼런스에 참여 합니다.\n\n미니컨퍼런스에서는 회사의 목표와 비즈니스 성장에 관한 이야기, 연구 및 업무의 성과 그리고 진행상황을 발표하고 어떤 과정을 거쳤는지 상세히 공유하고 토론하며 우리를 더욱 성장하게 합니다.\n\n주요 프로그램은 크게 3가지로, Google Meet에서 발표세션을 갖고, GatherTown에서 토론세션과 포스터세션이 진행됩니다.'
        }
      ],
      ruleListB: [
        {
          title: "카카오 공동체의 '영어 호칭' 사용과 '신충헌 원칙'",
          content:
            '<span class="string">영어 호칭</span>은 경력, 연차, 나이에 관계없이 솔직하게 의견을 제시하고 자발적인 토론과 능동적인 참여를 이끌어내는 환경을 만들어줍니다. 그래서 카카오브레인과 카카오 공동체 전체의 크루를 부를 때에는 &#39;~께서 /~님&#39;등의 극 존칭 표현을 사용하지 않습니다.\n\n<span class="string">신충헌</span>(신뢰, 충돌, 헌신)이라는 원칙은 자유로운 소통 문화와 더해져 빠르게 변화하는 IT산업 환경에서 혁신을 만들고 패러다임을 전환하는 원동력으로 작용됩니다.\n이 원칙은 [서로가 신뢰를 바탕으로 충분히 논쟁하고 부딪히며 나온 결론에 대해, 모두가 한 방향으로 헌신하자]는 내용으로,결과에 대한 크루 간 합의와 이해, 주도적인 업무 추진을 가능하게 합니다.'
        },
      ],
      ruleListC: [
        {
          title: "카카오 공동체의 '최소한의 원칙'",
          content:
            '<span class="string">100:0의 원칙</span>\n카카오브레인 내부에서는 모든 것을 공개하고(100), 카카오브레인을 벗어나서는 아무 것도 공개하지 않습니다.\n왜 100:0 이냐? 누구에게는 중요한 정보가 누구에겐 중요하지 않은 정보일 수 있습니다. \n그렇다고 매번 동료들에게 공유를 해도 되는지 아닌지를 물어보는 것은 불가능한 일이라고 생각해서 입니다\n\n<span class="string">1원의 원칙</span>\n회사의 자원을 개인의 사적일 일에 사용하지 않는다는 원칙입니다.\n누군가의 작은 행동이 동료들의 신뢰를 깰 수 있다면 그 부분은 1원이라고 해서 이슈 삼지 않을 이유가 없다고 생각해서 입니다.\n\n<span class="string">애매하면 하지 않는다</span>'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .company{
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
    .contents-text{
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
      .text-box{
        .contents-text{
          margin-bottom:70px;
        }
      }
    }
    
    .content-sub-title{
      margin-bottom:20px;
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
        margin-bottom:80px;
      }
      .share-rule{
        .rule-list{
          li{
            &:not(:last-child){
              margin-bottom:14px;
            }
          }
        }
      }
      
      .rule-box{
        .rule-item{
          &:not(:last-child){
            margin-bottom:270px;
          }
        }
        .text-box{
          .contents-text{
            margin-bottom:50px;
          }
        }
      }
      
      .content-sub-title{
        margin-bottom:26px;
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
        margin-bottom:80px;
      }
      .share-rule{
        .rule-list{
          li{
            &:not(:last-child){
              margin-bottom:20px;
            }
          }
        }
      }
      
      .rule-box{
        .rule-item{
          &:not(:last-child){
            margin-bottom:400px;
          }
        }
        .text-box{
          .contents-text{
            margin-bottom:140px;
          }
        }
      }
      
      .content-sub-title{
        margin-bottom:40px;
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
        margin-bottom:40px;
      }
      .share-rule{
        &.gl-5{
          width: getWidth(7) !important;
        }
        &.l-ml-3{
          margin-left: getMargin(2) !important;
        }
      }
      
      .rule-box{
        .rule-item{
          &:not(:last-child){
            margin-bottom:140px;
          }
        }
        .text-box{
          .contents-text{
            margin-bottom:40px;
          }
        }
      }
      .content-sub-title{
        margin-bottom:20px;
      }
    }
    
  }
  @include mobile {
    .company{
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
        .title{
          br{
            display: none;
          }
        }
      }
      .contents-text{
        margin-bottom:30px;
      }
      .share-rule{
        &.gl-5{
          width: 100% !important;
        }
        &.l-ml-3{
          margin-left: 0 !important;
        }
      }
      
      .rule-box{
        .rule-item{
          &:not(:last-child){
            margin-bottom:100px;
          }
        }
        .text-box{
          .contents-text{
            margin-bottom:30px;
          }
        }
      }
      .content-sub-title{
        margin-bottom:20px;
      }
    }
  }
</style>