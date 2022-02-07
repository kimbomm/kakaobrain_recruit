<template>
  <div class="easter-egg">
    <div class="egg-A">
      <img src="@/assets/images/easteregg_img_1.png"/>
    </div>
    <div class="egg-B">
      <div class="item">
        <img src="@/assets/images/easteregg_img_2.png"/>
      </div>
      <div class="item">
        <img src="@/assets/images/easteregg_img_3.png"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="scss" scoped>
  .easter-egg {
    position: relative;
    top:-60px;
    // width: 150px;
    // height: 150px;
    // border-radius: 50%;
    // overflow: hidden;
    // cursor: pointer;
    img {
      width: 100%;
    }
    .egg-A{
      position: absolute;
      left:50%;
      width:150px;
      height:150px;
      overflow: hidden;
      transform: translate(-50%, -100%);
      border-radius: 50%;
      box-shadow: -30px 50px 80px rgba(0,0,0,0.2);
    }
    .egg-B{
      position: absolute;
      right:210px;
      transform: translate(0, -100%);
      .item{
        display: inline-block;
        width:150px;
        height:150px;
        border-radius: 50%;
        overflow: hidden;
        &:last-child{
          box-shadow: -30px 50px 80px rgba(0,0,0,0.2);
        }
      }
    }
  }
</style>
