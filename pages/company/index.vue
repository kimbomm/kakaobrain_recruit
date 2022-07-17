<template>
  <div class="company">
    <BreadCrumb :data="breadcrumb[language]" :full="true" />
    <MainTitle :title="data.mainTitle" />
    <MainTitleText :text="data.mainTitleText" />
    <MiddleImg image="middle-img.jpg" />

    <div class="rule-box">
      <ul>
        <li class="rule-item">
          <ContentsTitle :title="data.contents[0].ContentsTitle" />
          <ContentsText :text="data.contents[0].ContentsText[0]" />
          <div class="share-rule">
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
          <div class="share-rule">
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
          <div class="share-rule">
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
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    head() {
      return {
        title: 'Kakao Brain Careers, How we work',
        meta: [
          {
            hid: 'og-title',
            name: 'og:title',
            content: 'Kakao Brain Careers, How we work'
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://careers.kakaobrain.com/company'
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: this.$config.url + '/meta/meta_careers_company.png'
          }
        ]
      }
    },
    mixins: [mixinGlobal],
    name: 'index',
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      ContentsTitle,
      ContentsText,
      FoldingBox,
      ContentSubTitle,
      BreadCrumb
    },
    data() {
      return {
        breadcrumb: {
          KR: [
            { text: '회사소개', sub: 'sub', link: '' },
            { text: '우리의 일하는 방식', sub: '', link: '' }
          ],
          EN: [
            { text: 'Company', sub: 'sub', link: '' },
            { text: 'How we work', sub: '', link: '' }
          ]
        }
      }
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
    padding: 320px 20px 0;
    .main-title {
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
      width: getWidth(5);
      margin-left: getMargin(3);
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
      padding-top: 440px;
      .main-title {
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
      padding-top: 600px;
      .main-title {
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
      padding-top: 200px;
      .main-title {
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
        width: getWidth(7);
        margin-left: getMargin(2);
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
      padding-top: 76px;
      .main-title {
        margin-top: 60px;
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
        width: 100%;
        margin-left: 0;
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
