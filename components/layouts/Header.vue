<template>
  <header :class="classBind">
    <div class="header-top">
      <h1 class="b-logo gl-2">
        <nuxt-link to="/main">
          <span>kakaobrain</span>
        </nuxt-link>
      </h1>
      <div class="header-con gl-2">
        <div class="header-item">Unthinkable Question</div>
      </div>
    </div>
    <Menu />
  </header>
</template>
<script>
  import { mapState } from 'vuex'
  import Menu from '@/components/layouts/Menu'
  export default {
    components: {
      Menu
    },
    computed: {
      classBind() {
        let classList = ['header']

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
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 16px;
    line-height: 1.3;
    &-top {
      display: flex;
      font-family: 'Inter', sans-serif;
    }
    .b-logo {
      font-weight: 900;
    }
    &-con {
      margin-left: 20px;
      z-index: 3;
    }
    &-item {
      font-size: 16px;
    }
    &__light {
      color: #fff;
      .header-item {
        color: $gray-0;
      }
    }
  }

  @include pc-large {
    .header {
      font-size: 22px;
    }
  }
  @include pc-4k {
    .header {
      font-size: 34px;
    }
  }
  @include tablet {
    .header {
      top: 16px;
      font-size: 16px;
    }
  }
  @include mobile {
    .header {
      top: 13px;
      right: 15px;
      font-size: 18px;
      &-con {
        display: none;
      }
    }
  }
</style>
