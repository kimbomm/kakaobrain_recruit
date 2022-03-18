<template>
  <div class="main-title">
    <div class="title" v-html="title"></div>
  </div>
</template>
<script>
  export default {
    name: 'MainTitle',
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
  .main-title {
    width: getWidth(6);
    margin-left: getMargin(2);
    font-weight: 900;
    font-size: 90px;
    line-height: 120%;
  }
  @include pc-large {
    .main-title {
      font-size: 120px;
    }
  }
  @include pc-4k {
    .main-title {
      font-size: 180px;
    }
  }
  @include tablet {
    .main-title {
      font-size: 50px;
    }
  }
  @include mobile {
    .main-title {
      width: 100%;
      margin-left: 0;
      font-size: 40px;
    }
  }
</style>
