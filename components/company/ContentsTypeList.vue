<template>
  <div class="contents-type-list">
    <div class="type-txt">{{ data.text }}</div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
      require: true,
    }
  }
}
</script>
<style lang="scss" scoped>
  .contents-type-list{
    padding: 22px 30px 24px 30px;
    background-color: $surface-2;
    .type-txt{
      font-weight: 700;
      font-size: 20px;
      line-height: 120%;
    }
  }
  @include pc-large {
    .contents-type-list{
      padding: 30px;
      .type-txt{
        font-size: 28px;
      }
    }
  }
  @include pc-4k {
    .contents-type-list{
      padding: 46px 50px;
      .type-txt{
        font-size: 42px;
      }
    }
  }
  @include tablet {
    .contents-type-list{
      padding: 24px 30px;
      .type-txt{
        font-size: 18px;
      }
    }
  }
  @include mobile {
    .contents-type-list{
      padding: 20px;
      .type-txt{
        font-size: 18px;
      }
    }
  }
</style>