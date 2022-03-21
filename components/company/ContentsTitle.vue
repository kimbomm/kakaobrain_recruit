<template>
  <div class="contents-title">
    <div class="title" v-html="title"></div>
  </div>
</template>
<script>
  export default {
    name: 'ContentsTitle',
    props: {
      title: {
        type: String,
        default: '',
        required: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .contents-title {
    width: getWidth(5);
    margin-left: getMargin(3);
    font-weight: 900;
    font-size: 40px;
    line-height: 130%;
  }
  @include pc-large {
    .contents-title {
      font-size: 52px;
    }
  }
  @include pc-4k {
    .contents-title {
      font-size: 80px;
    }
  }
  @include tablet {
    .contents-title {
      width: getWidth(7);
      margin-left: getMargin(2);
      font-size: 38px;
    }
  }
  @include mobile {
    .contents-title {
      width: 100%;
      margin-left: 0;
      font-size: 30px;
    }
  }
</style>
