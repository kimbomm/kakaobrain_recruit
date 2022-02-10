<template>
  <div class="recruit">
    <MainTitle :title="data.MainTitle" />
    <EasterEgg />
    <MainTitleText :text="data.MainTitleText" />
    <LargeImg />
    <ContentsQuestion :data="data.ContentsQuestion" />
    <MiddleImg image="middle-home.jpg" />
    <ServiceCategory :data="data.ServiceCategory" />
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
  import MainTitle from '@/components/company/MainTitle'
  import EasterEgg from '@/components/elements/EasterEgg'
  import MainTitleText from '@/components/company/MainTitleText'
  import LargeImg from '@/components/company/LargeImg'
  import ContentsQuestion from '@/components/company/ContentsQuestion'
  import MiddleImg from '@/components/company/MiddleImg'
  import ServiceCategory from '@/components/company/ServiceCategory'
  export default {
    mixins: [mixinGlobal],
    name: 'index',
    components: {
      MainTitle,
      EasterEgg,
      MainTitleText,
      LargeImg,
      ContentsQuestion,
      MiddleImg,
      ServiceCategory
    },
    data() {
      return {}
    },
    computed: {
      ...mapState({
        language: state => state.language,
        mainData: state => state.translation.MAIN
      }),
      data() {
        return this.mainData[this.language]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .recruit {
    position: relative;
    .main-title {
      padding: 0 20px;
      margin-top: 300px;
      margin-bottom: 60px;
      letter-spacing: -3.5px;
    }
    .main-title-text {
      padding: 0 20px;
      margin-bottom: 490px;
    }
    .large-img {
      position: absolute;
      top: 576px;
      padding: 0 20px;
    }
    .question-box {
      margin-bottom: 200px;
      // padding:0 20px;
    }
    .middle-img {
      margin-bottom: 140px;
      padding: 0 20px;
      // box-shadow:none;
    }
    .service {
      padding: 0 20px;
    }
  }

  @include pc-large {
    .recruit {
      .main-title {
        margin-top: 400px;
        margin-bottom: 80px;
      }
      .main-title-text {
        margin-bottom: 653px;
      }
      .large-img {
        top: 768px;
      }
      .question-box {
        margin-bottom: 260px;
      }
      .middle-img {
        margin-bottom: 197px;
      }
    }
  }
  @include pc-4k {
    .recruit {
      .main-title {
        margin-top: 600px;
        margin-bottom: 120px;
      }
      .main-title-text {
        margin-bottom: 978px;
      }
      .large-img {
        top: 1150px;
      }
      .question-box {
        margin-bottom: 390px;
      }
      .middle-img {
        margin-bottom: 300px;
      }
    }
  }
  @include tablet {
    .recruit {
      .main-title {
        margin-top: 140px;
        margin-bottom: 60px;
      }
      .main-title-text {
        margin-bottom: 280px;
      }
      .large-img {
        top: 448px;
      }
      .question-box {
        margin-bottom: 120px;
      }
      .middle-img {
        margin-bottom: 180px;
      }
    }
  }
  @include mobile {
    .recruit {
      .main-title {
        margin-top: 116px;
        margin-bottom: 30px;
      }
      .main-title-text {
        margin-bottom: 220px;
      }
      .large-img {
        top: 380px;
      }
      .question-box {
        margin-bottom: 100px;
      }
      .middle-img {
        margin-bottom: 140px;
      }
    }
  }
</style>
