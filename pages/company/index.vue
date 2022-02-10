<template>
  <div class="company">
    <MainTitle :title="data.mainTitle" />
    <MainTitleText :text="data.mainTitleText" />
    <MiddleImg image="middle-img.png" />

    <div class="rule-box">
      <ul>
        <li class="rule-item">
          <ContentsTitle :title="data.contents[0].ContentsTitle" />
          <ContentsText :text="data.contents[0].ContentsText[0]" />
          <div class="share-rule gl-5 l-ml-3">
            <ul class="rule-list">
              <li
                v-for="(data, index) in data.contents[0].ruleList"
                :key="index"
              >
                <FoldingBox :data="data" />
              </li>
            </ul>
          </div>
        </li>

        <li class="rule-item">
          <ContentsTitle :title="data.contents[1].ContentsTitle" />
          <div class="text-box">
            <ContentsText :text="data.contents[1].ContentsText[0]" />
          </div>
          <ContentSubTitle :tit="data.contents[1].ContentSubTitle" />
          <ContentsText :text="data.contents[1].ContentsText[1]" />
        </li>

        <li class="rule-item">
          <ContentsTitle :title="data.contents[2].ContentsTitle" />
          <ContentsText :text="data.contents[2].ContentsText[0]" />
          <div class="share-rule gl-5 l-ml-3">
            <ul class="rule-list">
              <li
                v-for="(data, index) in data.contents[2].ruleList"
                :key="index"
              >
                <FoldingBox :data="data" />
              </li>
            </ul>
          </div>
        </li>

        <li class="rule-item">
          <ContentsTitle :title="data.contents[3].ContentsTitle" />
          <ContentsText :text="data.contents[3].ContentsText[0]" />
          <div class="share-rule gl-5 l-ml-3">
            <ul class="rule-list">
              <li
                v-for="(data, index) in data.contents[3].ruleList"
                :key="index"
              >
                <FoldingBox :data="data" />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
  import MainTitle from '@/components/company/MainTitle'
  import MainTitleText from '@/components/company/MainTitleText'
  import MiddleImg from '@/components/company/MiddleImg'
  import ContentsTitle from '@/components/company/ContentsTitle'
  import ContentsText from '@/components/company/ContentsText'
  import ContentSubTitle from '@/components/company/ContentSubTitle'
  import FoldingBox from '@/components/elements/button/FoldingBox'
  export default {
    mixins: [mixinGlobal],
    name: 'index',
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      ContentsTitle,
      ContentsText,
      FoldingBox,
      ContentSubTitle
    },
    data() {
      return {}
    },
    computed: {
      ...mapState({
        language: state => state.language,
        companyData: state => state.translation.COMPANY.home
      }),
      data() {
        return this.companyData[this.language]
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
    .contents-title {
      margin-bottom: 40px;
    }
    .contents-text {
      margin-bottom: 40px;
    }
    .share-rule {
      // margin-bottom:200px;
      .rule-list {
        li {
          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }
    }

    .rule-box {
      .rule-item {
        &:not(:last-child) {
          margin-bottom: 200px;
        }
      }
      .text-box {
        .contents-text {
          margin-bottom: 70px;
        }
      }
    }

    .content-sub-title {
      margin-bottom: 20px;
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
      .contents-title {
        margin-bottom: 50px;
      }
      .contents-text {
        margin-bottom: 80px;
      }
      .share-rule {
        .rule-list {
          li {
            &:not(:last-child) {
              margin-bottom: 14px;
            }
          }
        }
      }

      .rule-box {
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 270px;
          }
        }
        .text-box {
          .contents-text {
            margin-bottom: 50px;
          }
        }
      }

      .content-sub-title {
        margin-bottom: 26px;
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

      .contents-title {
        margin-bottom: 80px;
      }
      .contents-text {
        margin-bottom: 80px;
      }
      .share-rule {
        .rule-list {
          li {
            &:not(:last-child) {
              margin-bottom: 20px;
            }
          }
        }
      }

      .rule-box {
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 400px;
          }
        }
        .text-box {
          .contents-text {
            margin-bottom: 140px;
          }
        }
      }

      .content-sub-title {
        margin-bottom: 40px;
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

      .contents-title {
        margin-bottom: 40px;
      }
      .contents-text {
        margin-bottom: 40px;
      }
      .share-rule {
        &.gl-5 {
          width: getWidth(7) !important;
        }
        &.l-ml-3 {
          margin-left: getMargin(2) !important;
        }
      }

      .rule-box {
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 140px;
          }
        }
        .text-box {
          .contents-text {
            margin-bottom: 40px;
          }
        }
      }
      .content-sub-title {
        margin-bottom: 20px;
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

      .contents-title {
        margin-bottom: 30px;
        .title {
          br {
            display: none;
          }
        }
      }
      .contents-text {
        margin-bottom: 30px;
      }
      .share-rule {
        &.gl-5 {
          width: 100% !important;
        }
        &.l-ml-3 {
          margin-left: 0 !important;
        }
      }

      .rule-box {
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 100px;
          }
        }
        .text-box {
          .contents-text {
            margin-bottom: 30px;
          }
        }
      }
      .content-sub-title {
        margin-bottom: 20px;
      }
    }
  }
</style>
