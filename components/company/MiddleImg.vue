<template>
  <div
    class="middle-img gl-7 l-ml-2"
    :style="`background-image:url(${require(`@/assets/images/middle/${image}`)})`"
  ></div>
</template>
<script>
  export default {
    name: 'MiddleImg',
    props: {
      image: {
        type: String,
        default: 'middle-img.png'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .middle-img {
    box-shadow: 30px 30px 50px -10px rgba(0, 0, 0, 0.2);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 400px;
  }
  @include pc-large {
    .middle-img {
      height: 530px;
    }
  }
  @include pc-4k {
    .middle-img {
      height: 800px;
    }
  }
  @include tablet {
    .middle-img {
      height: 200px;
    }
  }
  @include mobile {
    .middle-img {
      &.gl-7{
        width: 100% !important
      }
      &.l-ml-2{
        margin-left:0 !important
      }
    }
  }
</style>
