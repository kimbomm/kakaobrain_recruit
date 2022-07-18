<template>
  <div class="company">
    <BreadCrumb :data="breadcrumb[language]" :full="true" />
    <MainTitle :title="data.MainTitle" />
    <MainTitleText :text="data.MainTitleText" />
    <MiddleImg image="middle-intern.jpg" />
    <div class="rule-box">
      <ul>
        <li
          v-for="(data, index) in data.interviewList"
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
  import { mapState } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
  import MainTitle from '@/components/company/MainTitle'
  import MainTitleText from '@/components/company/MainTitleText'
  import MiddleImg from '@/components/company/MiddleImg'
  import Interview from '@/components/company/Interview'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    head() {
      return {
        // title: 'Kakao Brain Careers, Internship Experiences',
        meta: [
          // {
          //   hid: 'og-title',
          //   property: 'og:title',
          //   content: 'Kakao Brain Careers, Internship Experiences'
          // },
          // {
          //   hid: 'og:url',
          //   property: 'og:url',
          //   content: 'https://careers.kakaobrain.com/intern'
          // },
          {
            hid: 'og:image',
            property: 'og:image',
            content:
              'https://careers.stgkakaobrain.com/meta/meta_careers_company.png'
          }
        ]
      }
    },
    mixins: [mixinGlobal],
    name: 'intern',
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      Interview,
      BreadCrumb
    },
    data() {
      return {
        breadcrumb: {
          KR: [
            { text: '회사소개', sub: 'sub', link: '' },
            { text: '인턴 체험 스토리', sub: '', link: '' }
          ],
          EN: [
            { text: 'Company', sub: 'sub', link: '' },
            { text: 'Internship Experiences', sub: '', link: '' }
          ]
        }
      }
    },
    computed: {
      ...mapState({
        language: state => state.language,
        companyData: state => state.translation.COMPANY.intern
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
