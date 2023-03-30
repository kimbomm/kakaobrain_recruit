<template>
  <div class="main-title">
    <div class="title" v-html="title"></div>
    <div class="imgbox">
      <img class="rect_1" src="@/assets/images/diacritic-1.png" />
      <img class="rect_2" src="@/assets/images/diacritic-2.png" />
      <img class="rect_3" src="@/assets/images/diacritic-3.png" />
    </div>
  </div>
  <!-- <div class="imgbox">
    <img class="rect_1" src="@/assets/images/diacritic-1.png" />
    <img class="rect_2" src="@/assets/images/diacritic-2.png" />
    <img class="rect_3" src="@/assets/images/diacritic-3.png" />
  </div> -->
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
    width: fit-content !important;

    .rect_1 {
      position: absolute;
      display: block;
      transform: translate(-50%, 30%);
      left: 85%;
      top: 5%;
      width: auto;
      height: 149px;
    }
    .rect_2 {
      position: absolute;
      transform: translate(-30%, 30%);
      left: 49%;
      top: 5%;
      width: auto;
      height: 150px;
    }
    .rect_3 {
      position: absolute;
      transform: translate(-50%, 30%);
      left: 79%;
      top: 5%;
      z-index: -1;
      width: auto;
      height: 150px;
    }
  }
  @include pc-large {
    .main-title {
      font-size: 120px;
      .imgbox {
        width: fit-content !important;
        .rect_1 {
          //display: block;
          width: auto;
          height: 180px;
          position: absolute;
          transform: translate(-50%, -20%);
          left: 85%;
          top: 6%;
        }
        .rect_2 {
          //display: block;
          width: auto;
          height: 180px;
          position: absolute;
          transform: translate(-50%, -20%);
          left: 49%;
          top: 6%;
        }
        .rect_3 {
          //display: block;
          width: auto;
          height: 180px;
          position: absolute;
          transform: translate(-50%, -20%);
          left: 79%;
          top: 6%;
          z-index: -1;
        }
      }
    }
  }
  @include pc-4k {
    .main-title {
      font-size: 180px;

      .imgbox {
        width: fit-content !important;
        .rect_1 {
          //display: block;
          width: auto;
          height: 240px;
          position: absolute;
          transform: translate(-50%, -10%);
          left: 85%;
          top: 6%;
        }
        .rect_2 {
          //display: block;
          width: auto;
          height: 240px;
          position: absolute;
          transform: translate(-50%, -10%);
          left: 49%;
          top: 6%;
        }
        .rect_3 {
          //display: block;
          width: auto;
          height: 240px;
          position: absolute;
          transform: translate(-50%, -10%);
          left: 79%;
          top: 6%;
          z-index: -1;
        }
      }
    }
  }
  @include tablet {
    .main-title {
      font-size: 50px;

      .rect_1 {
        position: absolute;
        display: block;
        transform: translate(-50%, -100%);
        left: 85%;
        top: 5%;
        width: auto;
        height: 90px;
      }
      .rect_2 {
        position: absolute;
        transform: translate(40%, -100%);
        left: 49%;
        top: 5%;
        width: auto;
        height: 90px;
      }
      .rect_3 {
        position: absolute;
        transform: translate(-50%, -100%);
        left: 79%;
        top: 5%;
        z-index: -1;
        width: auto;
        height: 90px;
      }
    }
  }
  @include mobile {
    .main-title {
      width: 100%;
      margin-left: 0;
      font-size: 40px;

      .rect_1 {
        position: absolute;
        display: block;
        transform: translate(-25%, -10%);
        left: 85%;
        top: 5%;
        width: auto;
        height: 50px;
      }
      .rect_2 {
        position: absolute;
        transform: translate(-50%, -10%);
        left: 49%;
        top: 5%;
        width: auto;
        height: 50px;
      }
      .rect_3 {
        position: absolute;
        transform: translate(-50%, -10%);
        left: 79%;
        top: 5%;
        z-index: -1;
        width: auto;
        height: 50px;
      }
    }
  }
</style>
