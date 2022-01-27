<template>
  <div class="middle-img gl-7 l-ml-2">
    <img src="@/assets/images/middle-img.png">
  </div>
</template>
<script>
export default {
  name:'MiddleImg',
}
</script>
<style lang="scss" scoped>
  .middle-img{
    box-shadow: 30px 30px 50px -10px rgba(0,0,0,0.2);
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