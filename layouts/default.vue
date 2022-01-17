<template>
  <div class="wrap">
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
    computed: {
      ...mapState({
        touchDevice: state => state.touchDevice
      })
    },
    created() {},
    async mounted() {
      await this.checkDevice()
    },
    methods: {
      ...mapMutations({
        setTouchDevice: 'setTouchDevice'
      }),
      checkDevice() {
        const device = this.$device
        const isTouchDevice =
          device.ipad ||
          device.iphone ||
          device.android ||
          device.androidPhone ||
          device.mobile

        this.setTouchDevice(isTouchDevice)
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
    padding-top: 100px;
  }
</style>
