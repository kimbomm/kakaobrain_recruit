<template>
  <div class="content-sub-title">
    <div class="tit">{{ tit }}</div>
  </div>
</template>
<script>
  export default {
    name: 'ContentSubTitle',
    props: {
      tit: {
        type: String,
        default: '',
        required: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .content-sub-title {
    width: getWidth(5);
    margin-left: getMargin(3);
    .tit {
      font-weight: 900;
      font-size: 20px;
      line-height: 130%;
    }
  }
  @include pc-large {
    .content-sub-title {
      .tit {
        font-size: 30px;
      }
    }
  }
  @include pc-4k {
    .content-sub-title {
      .tit {
        font-size: 42px;
      }
    }
  }
  @include tablet {
    .content-sub-title {
      width: getWidth(7);
      margin-left: getMargin(2);
      .tit {
        font-size: 20px;
      }
    }
  }
  @include mobile {
    .content-sub-title {
      width: 100%;
      margin-left: 0;
    }
  }
</style>
