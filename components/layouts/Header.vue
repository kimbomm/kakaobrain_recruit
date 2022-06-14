<template>
  <div>
    <header :class="classBind">
      <div class="header-top">
        <h1 class="b-logo gl-2">
          <nuxt-link to="/">
            <img src="@/assets/images/logo.png" />
          </nuxt-link>
        </h1>
        <div class="header-con gl-2">
          <div class="header-item">Unthinkable Question</div>
        </div>
      </div>
      <Menu />
    </header>
    <MobMenu />
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import Menu from '@/components/layouts/Menu'
  import MobMenu from '@/components/layouts/MobMenu'
  export default {
    components: {
      Menu,
      MobMenu
    },
    computed: {
      ...mapState({
        isScrollUp: state => state.isScrollUp
      }),
      classBind() {
        let classList = ['header', 'hide-target']
        if (this.isScrollUp) {
          classList.push('is-hide')
        }
        return classList.join(' ')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 20px;
    left: 20px;
    right: 20px;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    font-size: 16px;
    line-height: 1.3;
    &-top {
      display: flex;
    }
    .b-logo {
      font-weight: 900;
      z-index: 3;
      img {
        height: 20px;
      }
    }
    &-con {
      margin-left: 20px;
      z-index: 3;
    }
    &-item {
      font-size: 16px;
    }
  }

  @include pc-large {
    .header,
    .header-item {
      font-size: 22px;
    }
    .header {
      .b-logo {
        img {
          height: 27px;
        }
      }
    }
  }
  @include pc-4k {
    .header,
    .header-item {
      font-size: 34px;
    }
    .header {
      .b-logo {
        img {
          height: 44px;
        }
      }
    }
  }
  @include tablet {
    .header,
    .header-item {
      // top: 16px;
      font-size: 16px;
    }
    .header {
      align-items: flex-start;
      .b-logo {
        img {
          height: 21px;
        }
      }
      &-con {
        display: none;
      }
    }
  }
  @include mobile {
    .header {
      top: 0;
      left: 0;
      width: 100%;
      height: 56px;
      padding: 0 20px;
      background-color: $surface-1;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header,
    .header-item {
      font-size: 18px;
    }
  }
</style>
