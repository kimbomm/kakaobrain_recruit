<template>
  <div :class="classBind">
    <div class="l-pages">
      <Header />
      <div class="container">
        <Nuxt />
      </div>
      <Footer />
    </div>
    <CardinalPoints />
    <TopButton />
  </div>
</template>
<script>
  import Header from '@/components/layouts/Header'
  import Footer from '@/components/layouts/Footer'
  import CardinalPoints from '@/components/elements/button/CardinalPoints'
  import TopButton from '@/components/elements/button/TopButton'
  import { mapState, mapMutations } from 'vuex'
  export default {
    components: {
      Header,
      Footer,
      CardinalPoints,
      TopButton
    },
    data() {
      return {
        prevY: 0,
        touchInfo: {
          start: null,
          end: null
        }
      }
    },
    computed: {
      ...mapState({
        device: state => state.device
      }),
      classBind() {
        let classList = ['wrap']
        if (this.device.touch && !this.device.mobile) {
          classList.push('device-tablet')
        } else if (this.device.touch && this.device.mobile) {
          classList.push('device-mobile')
        }
        return classList.join(' ')
      },
      route() {
        return this.$route.path
      }
    },
    watch: {
      route(val) {
        if (val) {
          this.setIsScrollUp(false)
        }
      }
    },
    beforeMount() {
      const language = localStorage.getItem('language')
      if (language) {
        this.setLanguage(language)
      }
    },
    async mounted() {
      await this.checkDevice()
      window.addEventListener('scroll', this.onScroll)
      window.addEventListener('resize', this.checkDevice)
      window.addEventListener('touchstart', this.touchStart)
      window.addEventListener('touchmove', this.touchMove)
      window.addEventListener('touchend', this.touchEnd)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
      window.removeEventListener('resize', this.checkDevice)
    },
    methods: {
      ...mapMutations({
        setTouchDevice: 'setTouchDevice',
        setLanguage: 'setLanguage',
        setIsScrollUp: 'setIsScrollUp'
      }),
      checkDevice() {
        const device = this.$device
        const isMobile = device.iphone || device.androidPhone || device.mobile
        const isTouchDevice =
          device.ipad ||
          device.iphone ||
          device.android ||
          device.androidPhone ||
          device.mobile

        this.setTouchDevice({
          touch: isTouchDevice,
          mobile: isMobile
        })
      },
      onScroll() {
        if (window.scrollY > this.prevY && window.scrollY !== 0) {
          this.setIsScrollUp(true)
        } else {
          this.setIsScrollUp(false)
        }
        this.prevY = window.scrollY
      },
      touchStart(e) {
        this.touchInfo.start = e.touches[0].clientY
      },
      touchMove(e) {
        this.touchInfo.end = e.touches[0].clientY
      },
      touchEnd() {
        if (this.touchInfo.start && this.touchInfo.end) {
          this.setIsScrollUp(this.touchInfo.end < this.touchInfo.start)
          this.$nextTick(() => {
            this.touchInfo = {
              start: null,
              end: null
            }
          })
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .wrap {
    background-color: $surface-1;
    overflow-x: hidden;
  }
  .container {
    // padding-top: 100px;
  }
</style>
