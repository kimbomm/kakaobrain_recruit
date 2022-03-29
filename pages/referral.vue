<template>
  <div class="recommendation">
    <BreadCrumb :data="breadcrumb[language]" :full="true" />
    <MainTitle :title="data.MainTitle" />
    <MainTitleText :text="data.MainTitleText" />
    <MiddleImg image="middle-referral.jpg" />

    <div class="rule-box">
      <ul>
        <li
          v-for="(item, index) in data.contents"
          :key="`content-${index}`"
          class="rule-item"
        >
          <template v-if="index === 0">
            <ContentsTitle :title="item.ContentsTitle" />
            <ContentsText :text="item.ContentsText" />
          </template>
          <template v-else>
            <div class="system-plan">
              <ContentsTitle :title="item.ContentsTitle" />
              <div
                v-for="(box, idx) in item.box"
                :key="`box-${idx}`"
                class="list-box"
              >
                <SmallTitle :title="box.SmallTitle" />
                <div class="box-text-con">
                  <ContentsText
                    v-for="text in box.ContentsText"
                    :key="text"
                    :text="text"
                  />
                </div>
                <div v-if="box.button && box.button.isShow" class="link-button">
                  <a :href="box.button.link" :target="box.button.target">
                    <span class="btn-txt">{{ box.button.text }}</span>
                  </a>
                </div>
              </div>

              <ContentSubTitle
                v-if="item.ContentSubTitle"
                :tit="item.ContentSubTitle"
              />
              <ContentsText
                v-if="item.ContentsText"
                :text="item.ContentsText"
              />
            </div>
          </template>
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
  import SmallTitle from '@/components/company//SmallTitle'
  import ContentSubTitle from '@/components/company//ContentSubTitle'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    mixins: [mixinGlobal],
    name: 'recommend',
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      ContentsTitle,
      ContentsText,
      SmallTitle,
      ContentSubTitle,
      BreadCrumb
    },
    data() {
      return {
        breadcrumb: {
          KR: [
            { text: '영입', sub: 'sub', link: '' },
            { text: '사외 추천 제도', sub: '', link: '' }
          ],
          EN: [
            { text: 'Careers', sub: 'sub', link: '' },
            { text: 'External Referral Program', sub: '', link: '' }
          ]
        }
      }
    },
    computed: {
      ...mapState({
        language: state => state.language,
        recommendData: state => state.translation.RECOMMEND
      }),
      data() {
        return this.recommendData[this.language]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .recommendation {
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
      margin-bottom: 10px;
    }

    .rule-box {
      .rule-item {
        &:not(:last-child) {
          margin-bottom: 200px;
        }
      }

      .system-plan {
        .list-box {
          &:not(:last-child) {
            margin-bottom: 40px;
          }
          .box-text-con {
            margin-bottom: 20px;
            .contents-text {
              &:not(:last-child) {
                margin-bottom: 5px;
              }
            }
          }
          .contents-text {
            position: relative;
            padding-left: 20px;
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
    .content-sub-title {
      margin-bottom: 20px;
    }
  }

  .link-button {
    margin-left: getMargin(3);
  }

  @include pc-large {
    .recommendation {
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
        margin-bottom: 14px;
      }

      .rule-box {
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 270px;
          }
        }

        .system-plan {
          .list-box {
            &:not(:last-child) {
              margin-bottom: 80px;
            }
            .contents-text {
              padding-left: 23px;
              &::before {
                left: 8px;
                top: 12px;
                width: 6px;
                height: 6px;
              }
            }
          }
        }
      }

      .link-btn {
        height: 60px;
        padding: 14px 23px;
        .btn-txt {
          font-size: 22px;
        }
      }
    }
    .content-sub-title {
      margin-bottom: 26px;
    }
  }
  @include pc-4k {
    .recommendation {
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
        margin-bottom: 20px;
      }

      .rule-box {
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 390px;
          }
        }

        .system-plan {
          .list-box {
            &:not(:last-child) {
              margin-bottom: 80px;
            }
            .box-text-con {
              margin-bottom: 50px;
              // .contents-text{
              //   &:not(:last-child){
              //     margin-bottom:5px;
              //   }
              // }
            }
            .contents-text {
              padding-left: 30px;
              &::before {
                left: 8px;
                top: 17px;
                width: 10px;
                height: 10px;
              }
            }
          }
        }
      }

      .link-btn {
        height: 90px;
        padding: 28px 171px;
        .btn-txt {
          font-size: 22px;
        }
      }

      .content-sub-title {
        margin-bottom: 20px;
      }
    }
  }
  @include tablet {
    .recommendation {
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
        margin-bottom: 10px;
      }

      .rule-box {
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 140px;
          }
        }

        .system-plan {
          .list-box {
            &:not(:last-child) {
              margin-bottom: 40px;
            }
            .box-text-con {
              margin-bottom: 20px;
            }
            .contents-text {
              padding-left: 20px;
              &::before {
                left: 8px;
                top: 9px;
                width: 3px;
                height: 3px;
              }
            }
          }
        }
      }

      .link-btn {
        &.l-ml-3 {
          margin-left: getMargin(2) !important;
        }
        height: 48px;
        padding: 16px 30px;
        .btn-txt {
          font-size: 12px;
        }
      }
      .content-sub-title {
        margin-bottom: 10px;
      }
    }
    .link-button {
      margin-left: getMargin(2);
    }
  }
  @include mobile {
    .recommendation {
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
      .rule-box {
        .rule-item {
          &:not(:last-child) {
            margin-bottom: 100px;
          }
        }

        .system-plan {
          .list-box {
            &:not(:last-child) {
              margin-bottom: 30px;
            }
            .box-text-con {
              .contents-text {
                &:not(:last-child) {
                  margin-bottom: 0px;
                }
              }
            }
            .contents-text {
              padding-left: 20px;
              &::before {
                left: 8px;
                top: 9px;
                width: 3px;
                height: 3px;
              }
            }
          }
        }
      }

      .link-btn {
        &.l-ml-3 {
          margin-left: 0 !important;
        }
        height: 48px;
        padding: 16px 20px;
        .btn-txt {
          font-size: 12px;
        }
      }
    }
    .link-button {
      margin-left: 0;
    }
  }
</style>
