<template>
  <div class="small-title">
    <div class="title" v-html="title"></div>
  </div>
</template>
<script>
  export default {
    name: 'SmallTitle',
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
  .small-title {
    font-weight: 700;
    font-size: 26px;
    line-height: 140%;
    width: getWidth(5);
    margin-left: getMargin(3);
  }
  @include pc-large {
    .small-title {
      font-size: 30px;
    }
  }
  @include pc-4k {
    .small-title {
      font-size: 42px;
    }
  }
  @include tablet {
    .small-title {
      font-size: 24px;
      width: getWidth(7);
      margin-left: getMargin(2);
    }
  }
  @include mobile {
    .small-title {
      font-size: 20px;
      width: 100%;
      margin-left: 0;
    }
  }
</style>
