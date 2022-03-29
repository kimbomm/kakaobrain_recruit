<template>
  <div class="company">
    <BreadCrumb :data="breadcrumb[language]" :full="true" />
    <MainTitle :title="data.MainTitle" />
    <MainTitleText :text="data.MainTitleText" />
    <MiddleImg image="middle-work.jpg" />

    <div class="rule-box">
      <ul>
        <li class="rule-item">
          <ContentsTitle :title="data.contents[0].ContentsTitle" />
          <ContentsText :text="data.contents[0].ContentsText" />
          <div class="link-button">
            <nuxt-link to="/careers">
              <span class="btn-txt">Our Open Position →</span>
            </nuxt-link>
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
  import BreadCrumb from '@/components/elements/BreadCrumb'
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
      SmallTitle,
      BreadCrumb
    },
    data() {
      return {
        breadcrumb: {
          KR: [
            { text: '복지소개', sub: 'sub', link: '' },
            { text: '원격근무와 유연근무제', sub: '', link: '' }
          ],
          EN: [
            { text: 'Benefits', sub: 'sub', link: '' },
            { text: 'Remote work and flextime working.', sub: '', link: '' }
          ]
        }
      }
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
    .small-title {
      margin-bottom: 40px;
    }
    .contents-text + .share-rule {
      margin-top: 40px;
    }
    .share-rule {
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
  .link-button {
    margin-top: 40px;
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

      .small-title {
        margin-bottom: 50px;
      }
      .contents-text + .share-rule {
        margin-top: 50px;
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
    }
    .link-button {
      margin-top: 50px;
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

      .small-title {
        margin-bottom: 80px;
      }
      .contents-text + .share-rule {
        margin-top: 80px;
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
    }
    .link-button {
      margin-top: 80px;
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

      .small-title {
        margin-bottom: 40px;
      }
      .contents-text + .share-rule {
        margin-top: 40px;
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
    }
    .link-button {
      margin-top: 40px;
      margin-left: getMargin(2);
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
      }

      .small-title {
        margin-bottom: 30px;
      }
      .contents-text + .share-rule {
        margin-top: 30px;
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
    }
    .link-button {
      margin-top: 30px;
      margin-left: 0;
    }
  }
</style>
