<template>
  <div class="easter-egg">
    <div class="egg-A">
      <img src="@/assets/images/easteregg_img_1.png" />
    </div>
    <div class="egg-B">
      <div class="item">
        <img src="@/assets/images/easteregg_img_2.png" />
      </div>
      <div class="item" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <img
          v-if="interval"
          :src="require(`@/assets/images/egg/easteregg_go_img_${NUMBER}.png`)"
          alt="easteregg"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        interval: null,
        NUMBER: Math.floor(Math.random() * 15) + 1
      }
    },
    mounted() {},
    methods: {
      onMouseEnter() {
        this.interval = setInterval(this.onChangeImage, 200)
      },
      onMouseLeave() {
        if (this.interval) {
          clearInterval(this.interval)
          this.interval = null
        }
      },
      onChangeImage() {
        this.NUMBER = Math.floor(Math.random() * 15) + 1
      }
    }
  }
</script>
<style lang="scss" scoped>
  .easter-egg {
    position: relative;
    top: -60px;
    img {
      width: 100%;
    }
    .egg-A {
      position: absolute;
      right: 40%;
      width: 150px;
      height: 150px;
      overflow: hidden;
      transform: translate(0, -100%);
      border-radius: 50%;
      box-shadow: -30px 50px 80px rgba(0, 0, 0, 0.2);
    }
    .egg-B {
      display: flex;
      position: absolute;
      right: 210px;
      transform: translate(0, -100%);
      .item {
        display: inline-block;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        &:last-child {
          background: url(@/assets/images/easteregg_img_3.png) no-repeat;
          background-size: 100%;
          box-shadow: -30px 50px 80px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
  @include pc-large {
    .easter-egg {
      top: -80px;
      .egg-A {
        width: 200px;
        height: 200px;
      }
      .egg-B {
        right: 274px;
        .item {
          width: 200px;
          height: 200px;
        }
      }
    }
  }
  @include pc-4k {
    .easter-egg {
      top: -120px;
      .egg-A {
        width: 300px;
        height: 300px;
      }
      .egg-B {
        right: 530px;
        .item {
          width: 300px;
          height: 300px;
        }
      }
    }
  }
  @media screen and (max-width: 1700px) {
    .easter-egg {
      top: -70px;
      .egg-A {
        width: 100px;
        height: 100px;
      }
      .egg-B {
        right: 230px;
        .item {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
  @include tablet {
    .easter-egg {
      top: -60px;
      .egg-A {
        right: 36%;
        width: 80px;
        height: 80px;
        transform: translate(0, -100%);
      }
      .egg-B {
        right: 120px;
        .item {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
  @include mobile {
    .easter-egg {
      top: 5px;
      .egg-A {
        right: 30%;
        width: 50px;
        height: 50px;
        transform: translate(-50%, -100%);
      }
      .egg-B {
        right: 20px;
        .item {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
</style>
