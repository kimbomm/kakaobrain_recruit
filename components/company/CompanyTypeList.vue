<template>
  <div class="company-type-list">
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
  .company-type-list{
    padding: 22px 190px 24px 30px;
    background-color: $surface-2;
    .type-txt{
      font-weight: 700;
      font-size: 20px;
      line-height: 120%;
    }
  }
</style>