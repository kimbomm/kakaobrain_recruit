<template>
  <div class="main-title-text">
    <div class="text" v-html="text"></div>
  </div>
</template>
<script>
  export default {
    name: 'MainTitleText',
    props: {
      text: {
        type: String,
        default: '',
        required: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .main-title-text {
    width: getWidth(5);
    margin-left: getMargin(3);
    font-size: 16px;
    line-height: 150%;
    .text {
      letter-spacing: -1px;
    }
  }
  @include pc-large {
    .main-title-text {
      font-size: 22px;
    }
  }
  @include pc-4k {
    .main-title-text {
      font-size: 32px;
    }
  }
  @include tablet {
    .main-title-text {
      width: getWidth(7);
      margin-left: getMargin(2);
      font-size: 14px;
    }
  }
  @include mobile {
    .main-title-text {
      width: 100%;
      margin-left: 0;
    }
  }
</style>
