<template>
  <div class="procedure-wrap">
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
  export default {
    mixins: [mixinGlobal],
    name: 'process',
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      ContentsTitle,
      ContentSubTitle,
      ContentsText,
      Procedure
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
    .procedure {
      margin-bottom: 160px;
    }
    .contents-list {
      .item {
        &:not(:last-child) {
          margin-bottom: 40px;
        }
      }
    }
    .content-sub-title {
      margin-bottom: 10px;
    }
  }

  @include pc-large {
    .procedure-wrap {
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
