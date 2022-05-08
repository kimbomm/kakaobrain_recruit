<template>
  <div :class="classBind" @click="pageClick">
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
  import Vue from 'vue'
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
        scrollLock: false,
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
    created() {
      this.$nuxt.$on('scrollLock', this.onScrollLock)
    },
    beforeMount() {
      Vue.prototype.scrollBody = document.querySelector('.wrap')
      Vue.prototype.scrollLock = false
      const language = this.$cookies.get('brain_careers_language')
      if (language) {
        this.setLanguage(language)
      }
    },
    async mounted() {
      await this.checkDevice()
      await this.checkDevice()
      this.scrollBody.addEventListener('scroll', this.onScroll)
      this.scrollBody.addEventListener('wheel', this.onWheel)
      this.scrollBody.addEventListener('resize', this.checkDevice)
    },
    beforeDestroy() {},
    methods: {
      ...mapMutations({
        setTouchDevice: 'setTouchDevice',
        setLanguage: 'setLanguage',
        setIsScrollUp: 'setIsScrollUp'
      }),
      onScrollLock(value) {
        this.scrollLock = value
      },
      onStoryPage(value) {
        this.isStoryPage = value
      },
      onSlideEnd(value) {
        this.isFooterShow = value
      },
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
      onWheel(e) {
        e.preventDefault()
        if (this.scrollLock) return false
        this.scrollBody.scrollTop += Math.floor(e.deltaY) * 0.3
        if (this.scrollBody.scrollTop < 0) this.scrollBody.scrollTop = 0
        if (this.scrollBody.scrollTop > this.scrollBody.scrollHeight)
          this.scrollBody.scrollTop = this.scrollBody.scrollHeight
      },
      onScroll() {
        if (
          this.scrollBody.scrollTop > this.prevY &&
          this.scrollBody.scrollTop !== 0
        ) {
          this.setIsScrollUp(true)
        } else {
          this.setIsScrollUp(false)
        }
        this.prevY = this.scrollBody.scrollTop
      },
      pageClick(e) {
        if (
          (e.target.offsetParent &&
            !e.target.offsetParent.classList.contains('menu-item')) ||
          !e.target.offsetParent
        ) {
          this.$nuxt.$emit('closeMenu', true)
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
