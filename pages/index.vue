<template>
  <div class="recruit">
    <MainTitle :title="data.MainTitle" />
    <EasterEgg />
    <MainTitleText :text="data.MainTitleText" />
    <!-- <LargeImg /> -->
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
    },
    async mounted() {
      await this.getList()
    },
    methods: {
      ...mapActions({
        getList: 'getList'
      })
    }
  }
</script>
<style lang="scss" scoped>
  .recruit {
    position: relative;
    padding-top: 300px;
    .main-title {
      padding: 0 20px;
      margin-bottom: 60px;
      letter-spacing: -3.5px;
    }
    .main-title-text {
      padding: 0 20px;
    }
    .question-box {
      margin-bottom: 200px;
      // padding:0 20px;
    }
    .middle-img {
      height: 300px;
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
      padding-top: 400px;
      .main-title {
        margin-bottom: 80px;
      }
      .question-box {
        margin-bottom: 260px;
      }
      .middle-img {
        height: 403px;
        margin-bottom: 197px;
      }
    }
  }
  @include pc-4k {
    .recruit {
      padding-top: 600px;
      .main-title {
        margin-bottom: 120px;
      }
      .question-box {
        margin-bottom: 390px;
      }
      .middle-img {
        height: 600px;
        margin-bottom: 300px;
      }
    }
  }
  @include tablet {
    .recruit {
      padding-top: 140px;
      .main-title {
        margin-bottom: 60px;
        font-size: 60px;
      }
      .main-title-text {
        width: getWidth(6) !important;
        margin-left: getMargin(3) !important;
        font-size: 16px;
      }
      .question-box {
        margin-bottom: 120px;
      }
      .middle-img {
        height: 260px;
        margin-bottom: 180px;
      }
    }
  }
  @include mobile {
    .recruit {
      padding-top: 116px;
      .main-title {
        margin-bottom: 30px;
        font-size: 40px;
      }
      .main-title-text {
        width: 100% !important;
        margin-left: 0 !important;
        font-size: 14px;
      }
      .question-box {
        margin-bottom: 100px;
      }
      .middle-img {
        width: getWidth(10) !important;
        height: 220px;
        margin: 0 20px 140px 20px !important;
      }
    }
  }
</style>
