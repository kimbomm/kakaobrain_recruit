<template>
  <div class="company">
    <MainTitle :title="data.MainTitle" />
    <MainTitleText :text="data.MainTitleText" />
    <MiddleImg />
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
      return {}
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
