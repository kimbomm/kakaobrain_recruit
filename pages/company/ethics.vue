<template>
  <div class="company">
    <MainTitle :title="data.MainTitle" />
    <MainTitleText :text="data.MainTitleText" />
    <MiddleImg />

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
    <div class="company-btn l-ml-3">
      <span class="btn-txt">{{ data.button }} →</span>
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
  export default {
    mixins: [mixinGlobal],
    name: 'ethics',
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      ContentsTitle,
      ContentsText,
      ContentsTypeList,
      ContentsInfo
    },
    data() {
      return {}
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
    .company-btn {
      width: 238px;
      height: 50px;
      border: 1px solid $gray-9;
      border-radius: 0px;
      padding: 16px;
      font-size: 0px;
      box-sizing: border-box;
      cursor: pointer;
      .btn-txt {
        display: block;
        letter-spacing: -1px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: $gray-9;
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
      .company-btn {
        width: 218px;
        height: 60px;
        padding: 19px 14px;
        .btn-txt {
          font-size: 16px;
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
      .company-btn {
        width: 300px;
        height: 90px;
        padding: 28px 18px;
        .btn-txt {
          font-size: 22px;
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
      .company-btn {
        &.l-ml-3 {
          margin-left: getMargin(2) !important;
        }
        width: 180px;
        height: 48px;
        padding: 18px 16px;
        .btn-txt {
          font-size: 12px;
        }
      }
    }
  }
  @include mobile {
    .company {
      padding: 0 20px;
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
      .company-btn {
        &.l-ml-3 {
          margin-left: 0 !important;
        }
        width: 180px;
        height: 48px;
        padding: 18px 16px;
        .btn-txt {
          font-size: 12px;
        }
      }
    }
  }
</style>
