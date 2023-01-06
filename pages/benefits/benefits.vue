<template>
  <div class="welfare">
    <BreadCrumb :data="breadcrumb[language]" :full="true" />
    <MainTitle :title="data.MainTitle" />
    <MainTitleText :text="data.MainTitleText" />
    <MiddleImg image="middle-benefit.jpg" />

    <ContentsTitle :title="data.ContentsTitle" />

    <div class="folding-rule gl-5 l-ml-3">
      <ul class="rule-list">
        <li v-for="(data, index) in data.benefitsList" :key="index">
          <FoldingBox :data="data" />
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
  import FoldingBox from '@/components/elements/button/FoldingBox'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    head: {
      // title: 'Kakao Brain Careers, Welfare benefits',
      meta: [
        // {
        //   hid: 'og-title',
        //   property: 'og:title',
        //   content: 'Kakao Brain Careers, Welfare benefits'
        // },
        // {
        //   hid: 'og:url',
        //   property: 'og:url',
        //   content: 'https://careers.kakaobrain.com/benefits/benefits'
        // },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://careers.stgkakaobrain.com/meta/meta_careers_Like_at_KakaoBrain.png'
        }
      ]
    },
    mixins: [mixinGlobal],
    name: 'benefits',
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      ContentsTitle,
      FoldingBox,
      BreadCrumb
    },
    data() {
      return {
        breadcrumb: {
          KR: [
            { text: '복지소개', sub: 'sub', link: '' },
            { text: '복지혜택', sub: '', link: '' }
          ],
          EN: [
            { text: 'Benefits', sub: 'sub', link: '' },
            { text: 'Welfare benefits.', sub: '', link: '' }
          ]
        }
      }
    },
    computed: {
      ...mapState({
        language: state => state.language,
        welfareData: state => state.translation.WELFARE.benefits
      }),
      data() {
        return this.welfareData[this.language]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .welfare {
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
      margin-bottom: 60px;
    }
    .folding-rule {
      // margin-bottom:200px;
      .rule-list {
        li {
          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  @include pc-large {
    .welfare {
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
      .folding-rule {
        .rule-list {
          li {
            &:not(:last-child) {
              margin-bottom: 14px;
            }
          }
        }
      }
    }
  }
  @include pc-4k {
    .welfare {
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
      .folding-rule {
        .rule-list {
          li {
            &:not(:last-child) {
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
  @include tablet {
    .welfare {
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
      .folding-rule {
        &.gl-5 {
          width: getWidth(7) !important;
        }
        &.l-ml-3 {
          margin-left: getMargin(2) !important;
        }
      }
    }
  }
  @include mobile {
    .welfare {
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
      }
      .folding-rule {
        &.gl-5 {
          width: 100% !important;
        }
        &.l-ml-3 {
          margin-left: 0 !important;
        }
      }
    }
  }
</style>
