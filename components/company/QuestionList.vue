<template>
  <div class="item">
    <img :src="require(`@/assets/images/main/q_${index}.png`)" />
    <div class="item-text-box gl-6">
      <div class="item-title" v-html="data.title"></div>
      <div class="item-text" v-html="data.text"></div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {},
        require: true
      },
      index: {
        type: Number
      }
    }
  }
</script>
<style lang="scss" scoped>
  .item {
    // position: relative;
    width: 360px;
    height: 360px;
    margin: 0 auto;
    text-align: center;
    box-shadow: 30px 30px 50px -10px rgba(0, 0, 0, 0.2);
    color: $gray-0;
    &-text-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &-title {
      margin-bottom: 30px;
      font-weight: 900;
      font-size: 50px;
      line-height: 130%;
    }
    &-text {
      font-size: 16px;
      line-height: 150%;
    }
    img {
      width: 100%;
    }
  }

  @include pc-large {
    .item {
      width: 480px;
      height: 480px;
      &-title {
        margin-bottom: 40px;
        font-size: 70px;
      }
      &-text {
        font-size: 22px;
      }
    }
  }
  @include pc-4k {
    .item {
      width: 720px;
      height: 720px;
      &-title {
        margin-bottom: 60px;
        font-size: 110px;
      }
      &-text {
        font-size: 32px;
      }
    }
  }
  @include tablet {
    .item {
      width: 360px;
      height: 360px;
      &-title {
        margin-bottom: 30px;
        font-size: 50px;
      }
      &-text {
        font-size: 16px;
      }
    }
  }
  @include mobile {
    .item {
      width: 260px;
      height: 260px;
      &-text-box {
        &.gl-6 {
          width: 100% !important;
        }
      }
      &-title {
        margin-bottom: 20px;
        font-size: 26px;
      }
      &-text {
        font-size: 14px;
      }
    }
  }
</style>
