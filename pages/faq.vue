<template>
  <div class="faq">
    <BreadCrumb :data="breadcrumb[language]" :full="true" />
    <MainTitle :title="data.MainTitle" />
    <MainTitleText :text="data.MainTitleText" />
    <MiddleImg image="middle-faq.jpg" />

    <div class="system-plan">
      <div class="list-box">
        <ContentsTitle :title="data.ContentsTitle" />
        <ContentsText
          v-for="(item, index) in data.ContentsText"
          :key="`text-${index}}`"
          :text="item"
        />
      </div>
      <div class="link-button">
        <nuxt-link to="/careers">
          <span class="btn-txt">Our Open Position →</span>
        </nuxt-link>
      </div>
    </div>

    <div>
      <ContentsTitle :title="`FAQ`" />
      <ul class="faq-list">
        <li v-for="(data, index) in data.faqList" :key="index">
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
  import ContentsText from '@/components/company/ContentsText'
  import FoldingBox from '@/components/elements/button/FoldingBox'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    head: {
      // title: 'Kakao Brain Careers, FAQ',
      meta: [
        // {
        //   hid: 'og-title',
        //   property: 'og:title',
        //   content: 'Kakao Brain Careers, FAQ'
        // },
        // {
        //   hid: 'og:url',
        //   property: 'og:url',
        //   content: 'https://careers.kakaobrain.com/faq'
        // },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://careers.stgkakaobrain.com/meta/meta_careers_careers.png'
        }
      ]
    },
    mixins: [mixinGlobal],
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      ContentsTitle,
      ContentsText,
      FoldingBox,
      BreadCrumb
    },
    data() {
      return {
        breadcrumb: {
          KR: [
            { text: '영입', sub: 'sub', link: '' },
            { text: 'FAQ', sub: '', link: '' }
          ],
          EN: [
            { text: 'Recruit', sub: 'sub', link: '' },
            { text: 'FAQ', sub: '', link: '' }
          ]
        }
      }
    },
    computed: {
      ...mapState({
        language: state => state.language,
        faqData: state => state.translation.FAQ
      }),
      data() {
        return this.faqData[this.language]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .faq {
    padding: 320px 20px 0;
    &-list {
      width: getWidth(5);
      margin-left: getMargin(3);
      li {
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .main-title {
      margin-bottom: 60px;
    }
    .main-title-text {
      margin-bottom: 200px;
    }
    .middle-img {
      margin-bottom: 140px;
    }
  }

  .link-button {
    margin-left: getMargin(3);
  }
  .contents-title {
    margin-bottom: 40px;
  }
  .system-plan {
    margin-bottom: 200px;
    .list-box {
      margin-bottom: 40px;

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

  @include pc-large {
    .faq {
      padding-top: 440px;
      &-list {
        li {
          margin-bottom: 14px;
        }
      }
      .main-title {
        margin-bottom: 100px;
      }
      .main-title-text {
        margin-bottom: 240px;
      }
      .middle-img {
        margin-bottom: 180px;
      }
      .system-plan {
        margin-bottom: 270px;
        .list-box {
          margin-bottom: 50px;
        }
      }
    }
  }
  @include pc-4k {
    .faq {
      padding-top: 600px;
      &-list {
        li {
          margin-bottom: 20px;
        }
      }
      .main-title {
        margin-bottom: 120px;
      }
      .main-title-text {
        margin-bottom: 360px;
      }
      .middle-img {
        margin-bottom: 270px;
      }
      .system-plan {
        margin-bottom: 270px;
        .list-box {
          margin-bottom: 80px;
        }
      }
    }
  }
  @include tablet {
    .faq {
      padding-top: 200px;
      &-list {
        width: getWidth(7);
        margin-left: getMargin(2);
      }
      .main-title {
        margin-bottom: 40px;
      }
      .main-title-text {
        margin-bottom: 100px;
      }
      .middle-img {
        margin-bottom: 140px;
      }
      .system-plan {
        margin-bottom: 140px;
        .list-box {
          margin-bottom: 40px;
        }
      }
    }
    .link-button {
      margin-left: getMargin(2);
    }
  }
  @include mobile {
    .faq {
      padding-top: 76px;
      &-list {
        width: 100% !important;
        margin-left: 0 !important;
      }
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
      .system-plan {
        margin-bottom: 100px;
        .list-box {
          margin-bottom: 30px;
        }
      }
    }
    .link-button {
      margin-left: 0;
    }
  }
</style>
