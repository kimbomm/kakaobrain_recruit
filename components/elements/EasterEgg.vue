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
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
</style>
