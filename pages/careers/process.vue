<template>
  <div class="procedure-wrap">
    <BreadCrumb :data="breadcrumb[language]" :full="true" />
    <MainTitle :title="data.MainTitle" />
    <MainTitleText :text="data.MainTitleText" />
    <MiddleImg image="middle-process.jpg" />
    <ContentsTitle :title="data.ContentsTitle" />
    <Procedure :data="data.list" />
    <div class="contents-list">
      <ul>
        <li v-for="(item, index) in data.list" :key="index" class="item">
          <ContentSubTitle :tit="`${item.number} ${item.title}`" />
          <ContentsText :text="item.text" />
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
  import ContentSubTitle from '@/components/company/ContentSubTitle'
  import ContentsText from '@/components/company/ContentsText'
  import Procedure from '@/components/company/Procedure'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    head() {
      return {
        title: 'Kakao Brain Careers, Job Openings',
        meta: [
          {
            hid: 'og-title',
            name: 'og:title',
            content: 'Kakao Brain Careers, Job Openings'
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://careers.kakaobrain.com/careers/process'
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: this.$config.url + '/meta/meta_careers_careers.png'
          }
        ]
      }
    },
    mixins: [mixinGlobal],
    name: 'process',
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      ContentsTitle,
      ContentSubTitle,
      ContentsText,
      Procedure,
      BreadCrumb
    },
    data() {
      return {
        breadcrumb: {
          KR: [
            { text: '영입', sub: 'sub', link: '' },
            { text: '영입절차', sub: '', link: '' }
          ],
          EN: [
            { text: 'Careers', sub: 'sub', link: '' },
            { text: 'Job Openings', sub: '', link: '' }
          ]
        }
      }
    },
    computed: {
      ...mapState({
        language: state => state.language,
        recruitData: state => state.translation.RECRUIT.process
      }),
      data() {
        return this.recruitData[this.language]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .procedure-wrap {
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
    .procedure {
      margin-bottom: 160px;
    }
    .contents-list {
      .item {
        &:not(:last-child) {
          margin-bottom: 40px;
        }
      }
      .content-sub-title /deep/ .tit {
        font-weight: 700;
      }
    }
    .content-sub-title {
      margin-bottom: 10px;
    }
  }

  @include pc-large {
    .procedure-wrap {
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
      .procedure {
        margin-bottom: 220px;
      }
      .content-sub-title {
        margin-bottom: 10px;
      }
      .contents-list {
        .item {
          &:not(:last-child) {
            margin-bottom: 60px;
          }
        }
      }
    }
  }
  @include pc-4k {
    .procedure-wrap {
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
      .procedure {
        margin-bottom: 360px;
      }
      .content-sub-title {
        margin-bottom: 14px;
      }
      .contents-list {
        .item {
          &:not(:last-child) {
            margin-bottom: 80px;
          }
        }
      }
    }
  }
  @include tablet {
    .procedure-wrap {
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
      .procedure {
        margin-bottom: 100px;
      }
      .content-sub-title {
        margin-bottom: 10px;
      }
      .contents-list {
        .item {
          &:not(:last-child) {
            margin-bottom: 40px;
          }
        }
      }
    }
  }
  @include mobile {
    .procedure-wrap {
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
        margin-bottom: 42px;
      }
      .procedure {
        margin-bottom: 60px;
      }
      .contents-list {
        .item {
          &:not(:last-child) {
            margin-bottom: 30px;
          }
        }
      }
    }
  }
</style>
