<template>
  <div class="company">
    <MainTitle :title="`찾아오시는</br>길.`" />
    <MainTitleText
      text="카카오브레인 크루가 모여 생각하지 못한 질문을 던지고 해답을 찾아가는 장소입니다."
    />
    <MiddleImg />
    <ContentsTitle title="주소" />
    <ContentsText
      text="경기도 성남시 분당구 판교역로241번길 20 미래에셋벤처타워 11층 (우)13494"
    />
    <div id="map" class="map-js"></div>
    <BusInquiry />
  </div>
</template>

<script>
  import mixinGlobal from '@/mixin/global.js'
  import MainTitle from '@/components/company/MainTitle'
  import MainTitleText from '@/components/company/MainTitleText'
  import MiddleImg from '@/components/company/MiddleImg'
  import ContentsTitle from '@/components/company/ContentsTitle'
  import ContentsText from '@/components/company/ContentsText'
  import BusInquiry from '@/components/company/BusInquiry'
  export default {
    mixins: [mixinGlobal],
    name: 'map',
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      ContentsTitle,
      ContentsText,
      BusInquiry
    },
    mounted() {
      if (window.kakao && window.kakao.maps) {
        this.initMap()
      } else {
        const script = document.createElement('script')
        script.onload = () => kakao.maps.load(this.initMap)
        script.src =
          'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3f7d10880673cfd60711d3200fb1b6ac '
        document.head.appendChild(script)
      }
    },
    methods: {
      initMap() {
        const container = document.querySelector('#map')
        const options = {
          center: new kakao.maps.LatLng(37.402748780301465, 127.10738647849486),
          level: 3
        }
        const map = new kakao.maps.Map(container, options)
        const markerPosition = new kakao.maps.LatLng(
          37.402748780301465,
          127.10738647849486
        )

        const marker = new kakao.maps.Marker({
          position: markerPosition
        })
        marker.setMap(map)
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
      margin-bottom: 60px;
    }
  }
  .map-js {
    height: 400px;
    width: getWidht(6);
    margin: 60px 0 60px getMargin(2);
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
    }
    .map-js {
      height: 520px;
      margin: 80px 0 80px getMargin(2);
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
        margin-bottom: 70px;
      }
      .contents-text {
        margin-bottom: 80px;
      }
    }
    .map-js {
      height: 800px;
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
    }
    .map-js {
      height: 200px;
      margin: {
        top: 40px;
        bottom: 40px;
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
    }
    .map-js {
      margin: {
        top: 30px;
        bottom: 30px;
        left: 0;
      }
    }
  }
</style>
