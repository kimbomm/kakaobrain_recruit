<template>
  <div class="company">
    <BreadCrumb :data="breadcrumb[language]" :full="true" />
    <MainTitle :title="data.MainTitle" />
    <MainTitleText :text="data.MainTitleText" />
    <MiddleImg image="middle-map.jpg" />
    <ContentsTitle :title="data.address.title" />
    <ContentsText :text="data.address.text" />
    <div id="map" class="map-js"></div>
    <BusInquiry :data="data.method" />
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
  import BusInquiry from '@/components/company/BusInquiry'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    head() {
      return {
        title: 'Kakao Brain Careers, Maps & Directions',
        meta: [
          {
            hid: 'og-title',
            property: 'og:title',
            content: 'Kakao Brain Careers, Maps & Directions'
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://careers.kakaobrain.com/map'
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.$config.url + '/meta/meta_careers_company.png'
          }
        ]
      }
    },
    mixins: [mixinGlobal],
    name: 'map',
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      ContentsTitle,
      ContentsText,
      BusInquiry,
      BreadCrumb
    },
    data() {
      return {
        breadcrumb: {
          KR: [
            { text: '회사소개', sub: 'sub', link: '' },
            { text: '찾아오시는 길', sub: '', link: '' }
          ],
          EN: [
            { text: 'Company', sub: 'sub', link: '' },
            { text: 'Maps & Directions', sub: '', link: '' }
          ]
        }
      }
    },
    computed: {
      ...mapState({
        language: state => state.language,
        mapData: state => state.translation.MAP
      }),
      data() {
        return this.mapData[this.language]
      }
    },
    mounted() {
      if (window.kakao && window.kakao.maps) {
        this.initMap()
      } else {
        const script = document.createElement('script')
        script.onload = () => kakao.maps.load(this.initMap)
        script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${this.$config.kakaoAPI.key}`
        document.head.appendChild(script)
      }
    },
    methods: {
      initMap() {
        const container = document.querySelector('#map')
        const options = {
          center: new kakao.maps.LatLng(
            this.$config.kakaoAPI.latlng_x,
            this.$config.kakaoAPI.latlng_y
          ),
          level: 3
        }
        const map = new kakao.maps.Map(container, options)
        const markerPosition = new kakao.maps.LatLng(
          this.$config.kakaoAPI.latlng_x,
          this.$config.kakaoAPI.latlng_y
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
    .contents-text {
      margin-bottom: 60px;
    }
  }
  .map-js {
    height: 400px;
    width: getWidth(7);
    margin: 60px 0 60px getMargin(2);
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
      .contents-text {
        margin-bottom: 30px;
      }
    }
    .map-js {
      width: 100%;
      margin: {
        top: 30px;
        bottom: 30px;
        left: 0;
      }
    }
  }
</style>
