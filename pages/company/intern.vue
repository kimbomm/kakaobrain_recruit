<template>
  <div class="company">
    <MainTitle :title="`인턴 체험</br>스토리.`" />
    <MainTitleText
      :text="`2021 Summer AI 영입 연계형 인턴과정을 수료한</br>
      Gina, Wilson, Jwoong, Ted 의 카카오브레인 인턴 체험 스토리를 전달해 드립니다.`"
    />
    <MiddleImg />
    <div class="rule-box">
      <ul>
        <li
          v-for="(data, index) in interviewListA"
          :key="index"
          class="rule-item"
        >
          <Interview :data="data" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import mixinGlobal from '@/mixin/global.js'
  import MainTitle from '@/components/company/MainTitle'
  import MainTitleText from '@/components/company/MainTitleText'
  import MiddleImg from '@/components/company/MiddleImg'
  import Interview from '@/components/company/Interview'
  export default {
    mixins: [mixinGlobal],
    name: 'intern',
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      Interview
    },
    data() {
      return {
        interviewListA: [
          {
            image: {
              bracket: 'yw_0.png',
              profile: 'profile_0.png'
            },
            name: 'Gina',
            team: 'Neuro-Symbolic AI',
            profileTxt: '카이스트 AI대학원 주재걸교수님 연구실 석사과정',
            interviewTextA:
              '사내에서 상시로 열리는\n 기술 공유 세미나 ‘미니컨퍼런스’ 시간을 통해 CEO와 이야기하고 의견을 나눠본다던가 하는 것이 신선했어요. 다른 연구자들의 발표를 듣다 보면 업계 지식도 늘고 자극이 되기도 하더라고요.',
            interviewTextB:
              '카카오브레인은 매머드 조직이 아니지만  큰 조직 못지않은 AI 시스템과 풍부한 자원들에 업무 지원도 잘 되어 연구에만 신경 쓸 수 있었어요. 거기다 스타트업 같은 파이팅도 넘치는  조직이라 뭔가 함께 토론하며 일하는 맛도  나더라고요.',
            recommend: [
              '대기업에서 정직원처럼 일하는 체험을 통해 성장할 분들',
              '업계 최고 동료들과 다양한 프로젝트 협업을 경험해볼 분들',
              '최신 트렌드 정보를 흡수해 자신을 발전시키고 싶은 분들'
            ],
            advice: [
              '자신이 어떤 것을 하고 싶은지 명확히 정의하세요.',
              '평소에 궁금했지만 쉽게 접할 수 없던 기술적 궁금증 리스트를 만들어 보세요.'
            ],
            interviewTidy:
              '지나가 말한 ‘카카오브레인은 ‘빠르다’는 한마디엔 여러 가지가 담겨있어요. 단순히 내달리는 빠름보다는 서로 의견을 나누고 도움받고 때로는 도와주며, 서로의 능력에 맞게 나아가는 것이 카카오브레인 식의 발전입니다. ‘함께 가면 느리지만 멀리 갈 수 있다’보다 ‘함께 가야 힘내서 더 빨리 갈 수 있다’는 말이 옳다는 것을, 카카오브레인은 증명하고 있습니다.'
          },
          {
            image: {
              bracket: 'yw_1.png',
              profile: 'profile_1.png'
            },
            name: 'Wilson',
            team: 'Large Scale',
            profileTxt: '숭실대학교 컴퓨터공학부 학사과정',
            interviewTextA:
              "인턴을 시작하자 마자 '역시 라이언 전무가 있는 곳은 다르구나' 라고 생각했어요. AI 연구를 위한 풍족한 인프라는 물론 뛰어난 인재, 사내에서 상시로 열리는 기술 공유 세미나 ‘미니컨'에서 공유되는 수많은 정보를 접해보고, ‘AI 계에서 제대로 플렉스 하는구나!’ 라고 생각했어요.",
            interviewTextB:
              '멘토링에 감동했습니다.\n 보통 멘토링이라고 하면, 구체적인 명세, 기술을 정해서, 그대로 구현하도록 지시하는 수동적인 방식인데, 카카오브레인 멘토들은 인턴의 자율적 의견을 존중하고 스스로 판단할 수 있도록 방향만 잡아주었어요. 정말 많은 도움이 됬죠.',
            recommend: [
              '업계 최고 엔지니어의 멘토링을 경험해보고 싶은 분',
              '인턴 기간동안 모든 열정을 쏟아부을 각오가 있는 분'
            ],
            advice: [
              '자신이 어떤 연구를 하고 싶은지, 능동적으로 목표를 정하세요.',
              '근거를 바탕으로 논리적으로 커뮤니케이션하는 연습을 해보세요.'
            ],
            interviewTidy:
              '그 어디보다 뛰어난 최신 AI 기술력, 업계 최고의 동료들과의 커뮤니케이션 및 토론 등, \nWilson에게 카카오 브레인 인턴 2개월은 너무나 짧다고 느껴질 정도로 뜻 깊은 시간이었습니다. \n개인적으로 Wilson은 좀 더 긴 종류의 인턴 프로그램을 만들어줬으면 하는 마음도 있다고 해요. \n자신의 지인들에게는 휴학을 불사하고도 카카오브레인 인턴에 참여해보라고 권유할 생각이라고 합니다.'
          },
          {
            image: {
              bracket: 'yw_2.png',
              profile: 'profile_2.png'
            },
            name: 'Jwoong',
            team: 'Representation Learning',
            profileTxt: '카이스트 AI대학원 황성주교수님 연구실 석사과정',
            interviewTextA:
              "카카오브레인 인턴생활을 하며 ‘여기는 비행기 내부와 비슷하구나' 라고 생각했어요. \n나이도 성별도 목적도 모두 다르지만, 어떤 목적지를 향해 모두 함께 날아가고 있으니까요. 그 안에서 일어나는 다양한 소통과 정보 공유가 흥미롭고 즐거웠습니다.",
            interviewTextB:
              '연구원들과 함께 일하고 대화하면서 많은 것을 느꼈습니다. 의견이 충돌되더라도 누구 하나 흥분하지 않고 토의를 이어나가며 최고의 결과를 도출해 내는 것을 보고 인품과 실력이 함께 만났을 때의 최종 결과물을 확인한 느낌이였습니다. 한꺼번에 진행되는 수많은 연구를 모두 팔로우하고 매니징하는 Sam 팀장의 모습도 배우고 싶었어요.',
            recommend: [
              '풍부한 GPU, 멀티노드 환경 등 빵빵한 환경을 경험해 볼 분들',
              '선후배와 기술적인 다양한 소통을 경험해 볼 분들'
            ],
            advice: [
              '기술적 토론을 하고 싶은 주제를 미리 스터디하세요.',
              '자신의 의견을 피력하기 위한 다양한 화법을 연구해 보세요.'
            ],
            interviewTidy:
              '마치 비행기의 일등석처럼, 카카오브레인은 목표를 위해 날아가면서 \n편안하게 일할 수 있는 모든 인프라를 지원하는 게 좋았다고 강조했습니다. \n이렇게 빠르고 멀리 날아, 카카오브레인 인턴 생활 동안 Jwoong은 더 넓은 세계를 볼 수 있었다고 합니다.'
          },
          {
            image: {
              bracket: 'yw_3.png',
              profile: 'profile_3.png'
            },
            name: 'Ted',
            team: 'Human CV',
            profileTxt: 'UNIST AI대학원 Vision&Learning 연구실 석사과정',
            interviewTextA:
              '모든 카카오브레인 선배들에게 자신의 일과 회사에 대한 Flex를 느꼈어요. \n하지만 그렇다고 소위 ‘뻣뻣’하지는 \n않았습니다. 인턴 생활 당시 저의 멘토 ‘말포이’와 자주 시간을 같이하며 고민을 풀어주고 방향성을 제시해 주었습니다. 다른 선배들도 마찬가지였고요.',
            interviewTextB:
              '인턴에게도 카카오브레인의 프로젝트가 거의 다 공개되어 있어 다양한 간접 경험을 해볼 수 있었던 점도 좋은 경험이었습니다. 선배들의 멘토링이 진정 도움이 됐고, 인턴이 보조가 아니라 일하는 동안의 동료라 생각해 주도적으로 프로젝트를 리드해 볼 수도 있었어요.',
            recommend: [
              '자신의 기술적 고민을 최고의 AI 개발 환경에서 펼쳐볼 분들',
              '업계 최고 선배들과 기술적/업무적 토론을 나누고픈 분들',
              '자신이 개발한 서비스를 런칭하고 대중에게 피드백 받고 싶은 분들'
            ],
            advice: [
              '카카오브레인에서 어떤 것을 해보고 싶은지 정리해 보세요.',
              '자신의 장점과 약점을 미리 한 번 생각해 보세요.'
            ],
            interviewTidy:
              '테드는 인턴 기간 동안 느낀 카카오브레인이 ‘오케스트라’처럼 엮여졌다고 표현합니다. \n각자가 최고의 연주자인 동시에, 모두가 카카오브레인이라는 하나의 목표로 전진하는 모습에 깊은 인상을 받았다고 합니다. \n인턴들을 주체적 연구자로 대해주는 모습도 좋았고요.'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .company {
    padding: 0 20px;
    .main-title {
      margin-top: 320px;
      margin-bottom: 60px;
    }
    .main-title-text {
      margin-bottom: 200px;
    }
    .middle-img {
      margin-bottom: 140px;
    }

    .rule-box {
      .rule-item {
        &:not(:last-child) {
          margin-bottom: 200px;
        }
      }
    }
  }
  @include pc-large {
    .company {
      .main-title {
        margin-top: 440px;
        margin-bottom: 100px;
      }
      .main-title-text {
        margin-bottom: 240px;
      }
      .middle-img {
        margin-bottom: 180px;
      }
      .rule-box {
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 270px;
          }
        }
      }
    }
  }
  @include pc-4k {
    .company {
      .main-title {
        margin-top: 600px;
        margin-bottom: 120px;
      }
      .main-title-text {
        margin-bottom: 360px;
      }
      .middle-img {
        margin-bottom: 270px;
      }
      .rule-box {
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 400px;
          }
        }
      }
    }
  }
  @include tablet {
    .company {
      .main-title {
        margin-top: 200px;
        margin-bottom: 40px;
      }
      .main-title-text {
        margin-bottom: 100px;
      }
      .middle-img {
        margin-bottom: 140px;
      }
      .rule-box {
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 140px;
          }
        }
      }
    }
  }
  @include mobile {
    .company {
      .main-title {
        margin-top: 157px;
        margin-bottom: 20px;
      }
      .main-title-text {
        margin-bottom: 60px;
      }
      .middle-img {
        margin-bottom: 100px;
      }
      .rule-box {
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 100px;
          }
        }
      }
    }
  }
</style>
