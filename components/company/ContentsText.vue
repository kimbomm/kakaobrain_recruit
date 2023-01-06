<template>
  <div class="contents-text">
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
    width: getWidth(5);
    margin-left: getMargin(3);
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
      width: getWidth(7);
      margin-left: getMargin(2);
      .text {
        font-size: 14px;
      }
    }
  }
  @include mobile {
    .contents-text {
      width: 100%;
      margin-left: 0;
    }
  }
</style>
