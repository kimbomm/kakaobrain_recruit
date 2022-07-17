<template>
  <div class="company">
    <BreadCrumb :data="breadcrumb[language]" :full="true" />
    <MainTitle :title="data.MainTitle" />
    <MainTitleText :text="data.MainTitleText" />
    <MiddleImg image="middle-ethics.jpg" />

    <div class="rule-box">
      <ul>
        <li class="rule-item">
          <ContentsTitle :title="data.contents[0].ContentsTitle" />
          <ContentsText :text="data.contents[0].ContentsText[0]" />
        </li>
        <li class="rule-item">
          <ContentsTitle :title="data.contents[1].ContentsTitle" />
          <div class="type-box gl-5 l-ml-3">
            <ul>
              <li
                v-for="(data, index) in data.contents[1].typeList"
                :key="index"
                class="type-list"
              >
                <ContentsTypeList :data="data" />
              </li>
            </ul>
          </div>
        </li>
        <li class="rule-item">
          <ContentsTitle :title="data.contents[2].ContentsTitle" />
          <ContentsInfo :data="data.contents[2].contentInfo" />
        </li>
        <li class="rule-item">
          <ContentsTitle :title="data.contents[3].ContentsTitle" />
          <ContentsText :text="data.contents[3].ContentsText" />
          <div class="type-box gl-5 l-ml-3">
            <ul>
              <li
                v-for="(data, index) in data.contents[3].typeList"
                :key="index"
                class="type-list"
              >
                <ContentsTypeList :data="data" />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="link-button">
      <a :href="data.button.link" :target="data.button.target">
        <span class="btn-txt">{{ data.button.text }}</span>
      </a>
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
  import ContentsTypeList from '@/components/company/ContentsTypeList'
  import ContentsInfo from '@/components/company/ContentsInfo'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    head() {
      return {
        title: 'Kakao Brain Careers, Cyber Ethics',
        meta: [
          {
            hid: 'og-title',
            property: 'og:title',
            content: 'Kakao Brain Careers, Cyber Ethics'
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://careers.kakaobrain.com/ethics'
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.$config.url + '/meta/meta_careers_company.png'
          }
        ]
      }
    },
    mixins: [mixinGlobal],
    name: 'ethics',
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      ContentsTitle,
      ContentsText,
      ContentsTypeList,
      ContentsInfo,
      BreadCrumb
    },
    data() {
      return {
        breadcrumb: {
          KR: [
            { text: '회사소개', sub: 'sub', link: '' },
            { text: '사이버윤리실', sub: '', link: '' }
          ],
          EN: [
            { text: 'Company', sub: 'sub', link: '' },
            { text: 'Cyber Ethics', sub: '', link: '' }
          ]
        }
      }
    },
    computed: {
      ...mapState({
        language: state => state.language,
        companyData: state => state.translation.COMPANY.ethics
      }),
      data() {
        return this.companyData[this.language]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .company {
    padding-top: 320px;
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

    .type {
      &-list {
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }

    .rule-box {
      margin-bottom: 200px;
      .rule-item {
        &:not(:last-child) {
          margin-bottom: 200px;
        }
      }
      // .text-box{
      //   .contents-text{
      //     margin-bottom:70px;
      //   }
      // }
    }
  }
  .link-button {
    margin-left: getMargin(3);
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
        margin-bottom: 240px;
      }

      .type {
        &-list {
          &:not(:last-child) {
            margin-bottom: 14px;
          }
        }
      }
      .rule-box {
        margin-bottom: 270px;
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
        margin-bottom: 400px;
      }

      .type {
        &-list {
          &:not(:last-child) {
            margin-bottom: 20px;
          }
        }
      }
      .rule-box {
        margin-bottom: 400px;
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
        margin-bottom: 140px;
      }

      .type {
        &-list {
          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
        &-box {
          &.gl-5 {
            width: getWidth(7) !important;
          }
          &.l-ml-3 {
            margin-left: getMargin(2) !important;
          }
        }
      }
      .rule-box {
        margin-bottom: 140px;
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 140px;
          }
          .contents-info {
            &.gl-5 {
              width: getWidth(7) !important;
            }
            &.l-ml-3 {
              margin-left: getMargin(2) !important;
            }
          }
        }
      }
    }
    .link-button {
      margin-left: getMargin(2);
    }
  }
  @include mobile {
    .company {
      padding: 76px 20px 0;
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
      .contents-text {
        margin-bottom: 100px;
      }

      .type {
        &-box {
          &.gl-5 {
            width: 100% !important;
          }
          &.l-ml-3 {
            margin-left: 0 !important;
          }
        }
      }
      .rule-box {
        margin-bottom: 100px;
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 100px;
          }
          .contents-info {
            &.gl-5 {
              width: 100% !important;
            }
            &.l-ml-3 {
              margin-left: 0 !important;
            }
          }
        }
      }
    }
    .link-button {
      margin-left: 0;
    }
  }
</style>
