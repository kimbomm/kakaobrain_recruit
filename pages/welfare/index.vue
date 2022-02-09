<template>
  <div class="company">
    <MainTitle :title="data.MainTitle" />
    <MainTitleText :text="data.MainTitleText" />
    <MiddleImg />

    <div class="rule-box">
      <ul>
        <li class="rule-item">
          <ContentsTitle :title="data.contents[0].ContentsTitle" />
          <ContentsText :text="data.contents[0].ContentsText" />
          <div class="company-btn l-ml-3">
            <span class="btn-txt">Our Open Position →</span>
          </div>
        </li>

        <li class="rule-item">
          <ContentsTitle :title="data.contents[1].ContentsTitle" />
          <ContentsText :text="data.contents[1].ContentsText" />
        </li>

        <li class="rule-item">
          <SmallTitle :title="data.contents[2].SmallTitle" />

          <div class="share-rule gl-5 l-ml-3">
            <ul class="rule-list">
              <li
                v-for="(data, index) in data.contents[2].benefitsList"
                :key="index"
              >
                <FoldingBox :data="data" />
              </li>
            </ul>
          </div>
        </li>

        <li class="rule-item">
          <SmallTitle :title="data.contents[3].SmallTitle" />
          <ContentsText :text="data.contents[3].ContentsText" />
          <div class="share-rule gl-5 l-ml-3">
            <ul class="rule-list">
              <li v-for="(data, index) in data.contents[3].qna" :key="index">
                <FoldingBox :data="data" />
              </li>
            </ul>
          </div>
        </li>

        <li class="rule-item">
          <SmallTitle :title="data.contents[4].SmallTitle" />
          <div class="system-plan">
            <ContentsText :text="data.contents[4].ContentsText[0]" />
            <div class="list-box">
              <ContentsText :text="data.contents[4].ContentsText[1]" />
              <ContentsText :text="data.contents[4].ContentsText[2]" />
            </div>
          </div>
        </li>

        <li class="rule-item">
          <SmallTitle :title="data.contents[5].SmallTitle" />
          <div class="system-plan">
            <div class="list-box">
              <ContentsText
                v-for="(item, index) in data.contents[5].ContentsText"
                :key="index"
                :text="item"
              />
            </div>
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
  import FoldingBox from '@/components/elements/button/FoldingBox'
  import SmallTitle from '@/components/company//SmallTitle'
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
      SmallTitle
    },
    data() {
      return {}
    },
    computed: {
      ...mapState({
        language: state => state.language,
        welfareData: state => state.translation.WELFARE.home
      }),
      data() {
        return this.welfareData[this.language]
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
    .small-title {
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
    }

    .system-plan {
      .contents-text {
        margin-bottom: 20px;
      }
      .list-box {
        .contents-text {
          position: relative;
          padding-left: 20px;
          &:not(:last-child) {
            margin-bottom: 20px;
          }
          &::before {
            content: '';
            position: absolute;
            left: 8px;
            top: 10px;
            width: 4px;
            height: 4px;
            border-radius: 100%;
            background-color: $gray-9;
          }
        }
      }
    }
  }

  .company-btn {
    display: flex;
    justify-content: center;
    align-items: center;
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

      .small-title {
        margin-bottom: 50px;
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
      }
      .system-plan {
        .contents-text {
          margin-bottom: 30px;
        }
        .list-box {
          .contents-text {
            padding-left: 25px;
            &:not(:last-child) {
              margin-bottom: 30px;
            }
            &::before {
              left: 8px;
              top: 14px;
              width: 6px;
              height: 6px;
            }
          }
        }
      }

      .company-btn {
        width: 218px;
        height: 60px;
        padding: 19px 14px;
        text-align: center;
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
        margin-bottom: 80px;
      }

      .small-title {
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
      }
      .system-plan {
        .contents-text {
          margin-bottom: 50px;
        }
        .list-box {
          .contents-text {
            padding-left: 30px;
            &:not(:last-child) {
              margin-bottom: 50px;
            }
            &::before {
              left: 8px;
              top: 19px;
              width: 8px;
              height: 8px;
            }
          }
        }
      }

      .company-btn {
        width: 541px;
        height: 90px;
        padding: 28px 74px;
        .btn-txt {
          font-size: 14px;
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
        margin-bottom: 40px;
      }

      .small-title {
        margin-bottom: 40px;
      }
      .share-rule {
        &.gl-5 {
          width: getWidth(7) !important;
        }
        &.l-ml-3 {
          margin-left: getMargin(2) !important;
        }
        // .rule-list{
        //   li{
        //     &:not(:last-child){
        //       margin-bottom:14px;
        //     }
        //   }
        // }
      }
      .rule-box {
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 140px;
          }
        }
      }
      .system-plan {
        .contents-text {
          margin-bottom: 15px;
        }
        .list-box {
          .contents-text {
            padding-left: 20px;
            &:not(:last-child) {
              margin-bottom: 15px;
            }
            &::before {
              left: 8px;
              top: 10px;
              width: 4px;
              height: 4px;
            }
          }
        }
      }

      .company-btn {
        width: 160px;
        height: 48px;
        padding: 16px 19px;
        text-align: center;
        &.l-ml-3 {
          margin-left: getMargin(2) !important;
        }
        .btn-txt {
          font-size: 12px;
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
      .contents-title {
        margin-bottom: 30px;
      }
      .contents-text {
        margin-bottom: 30px;
      }

      .small-title {
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
      }
      .system-plan {
        .contents-text {
          margin-bottom: 10px;
        }
        .list-box {
          .contents-text {
            padding-left: 15px;
            &:not(:last-child) {
              margin-bottom: 10px;
            }
            &::before {
              left: 7px;
              top: 10px;
              width: 3px;
              height: 3px;
            }
          }
        }
      }

      .company-btn {
        &.l-ml-3 {
          margin-left: 0 !important;
        }
      }
    }
  }
</style>
