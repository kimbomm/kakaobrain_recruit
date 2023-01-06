<template>
  <div
    class="middle-img"
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
    width: getWidth(7);
    margin-left: getMargin(2);
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
      width: 100%;
      margin-left: 0;
    }
  }
</style>
