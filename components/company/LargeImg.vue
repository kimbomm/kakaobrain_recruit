<template>
  <div class="large-img gl-8 l-ml-1">
    <img src="@/assets/images/large-img.png">
  </div>
</template>
<script>
export default {
  name:'LargeImg',
}
</script>
<style lang="scss" scoped>
  .large-img{
    img{
      width:100%;
    }
  }
  @include pc-large {
    .middle-img{
      // height:800px;
      img{
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%,-50%);
        width: 100%;
        // height: 100%;
      }
    }
  }
  @include pc-4k {
    .middle-img{
      img{
        width:100%;
      }
    }
  }
  @include tablet {
    .middle-img{
      img{
        width:100%;
      }
    }
  }
  @include mobile {
    .middle-img{
      &.gl-7{
        width:100% !important;
      }
      &.l-ml-2{
        margin-left: 0 !important;
      }
      img{
        width:100%;
      }
    }
  }
</style>