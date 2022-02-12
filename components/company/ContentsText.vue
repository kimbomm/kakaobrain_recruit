<template>
  <div class="contents-text gl-5 l-ml-3">
    <div class="text" v-html="text"></div>
  </div>
</template>
<script>
  export default {
    name: 'ContentsText',
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
  .contents-text {
    .text {
      font-size: 16px;
      line-height: 150%;
    }
  }
  @include pc-large {
    .contents-text {
      .text {
        font-size: 22px;
      }
    }
  }
  @include pc-4k {
    .contents-text {
      .text {
        font-size: 32px;
      }
    }
  }
  @include tablet {
    .contents-text {
      &.gl-5 {
        width: getWidth(7) !important;
      }
      &.l-ml-3 {
        margin-left: getMargin(2) !important;
      }
      .text {
        font-size: 14px;
      }
    }
  }
  @include mobile {
    .contents-text {
      &.gl-5 {
        width: 100% !important;
      }
      &.l-ml-3 {
        margin-left: 0 !important;
      }
    }
  }
</style>
