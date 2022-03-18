<template>
  <div class="service gl-6 l-ml-2">
    <div class="service-list">
      <div
        v-for="(item, index) in data.service"
        :key="`service-${index}`"
        class="service-item"
      >
        <div class="service-title">
          <span v-html="item.title"></span>
        </div>
        <div class="service-text l-ml-1">
          <p v-html="item.text"></p>
        </div>
        <div class="service-more l-ml-1">
          <nuxt-link :to="item.link"> more</nuxt-link>
        </div>
      </div>
    </div>
    <div class="service-bottom">
      <div
        v-for="(item, index) in data.bottom"
        :key="`bottom-${index}`"
        class="bottom-item"
      >
        <div class="bottom-title">
          <span v-html="item.title"></span>
        </div>
        <div>
          <div v-if="item.subTitle" class="bottom-sub-title">
            <span v-html="item.subTitle"></span>
          </div>
          <div class="bottom-text">
            <p v-html="item.text"></p>
          </div>
        </div>
        <div class="service-more">
          <nuxt-link :to="item.link"> more</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
<style lang="scss" soped>
  .service {
    &-list {
      margin-bottom: 180px;
    }
    &-item {
      &:not(:last-child) {
        margin-bottom: 200px;
      }
    }
    &-title {
      margin-bottom: 60px;
      font-weight: 900;
      font-size: 60px;
      line-height: 120%;
    }
    &-text {
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 150%;
    }
    &-more {
      font-family: Inter;
      font-size: 16px;
      line-height: 150%;
    }
    .service-bottom {
      display: flex;
      justify-content: space-between;
      .bottom {
        &-item {
          width: getWidth(3);
          position: relative;
          min-height: 230px;
          padding: 30px 30px 60px;
          background-color: #eff1f6;
          &:first-child {
            margin-right: 20px;
          }
          .service-more {
            position: absolute;
            bottom: 30px;
          }
        }
        &-title {
          margin-bottom: 30px;
          font-weight: 900;
          font-size: 30px;
          line-height: 120%;
        }
        &-sub-title {
          font-weight: 700;
          font-size: 14px;
          line-height: 150%;
        }
        &-text {
          font-size: 14px;
          line-height: 150%;
        }
      }
    }
  }

  @include pc-large {
    .service {
      &-list {
        margin-bottom: 260px;
      }
      &-item {
        &:not(:last-child) {
          margin-bottom: 260px;
        }
      }
      &-title {
        margin-bottom: 80px;
        font-size: 80px;
      }
      &-text {
        margin-bottom: 25px;
        font-size: 22px;
      }
      &-more {
        font-size: 22px;
      }
      .service-bottom {
        .bottom {
          &-item {
            min-height: 295px;
            padding: 40px 40px 80px;
            .service-more {
              bottom: 40px;
            }
          }
          &-title {
            margin-bottom: 38px;
            font-size: 40px;
          }
          &-sub-title {
            font-size: 18px;
          }
          &-text {
            font-size: 18px;
          }
        }
      }
    }
  }
  @include pc-4k {
    .service {
      &-list {
        margin-bottom: 380px;
      }
      &-item {
        &:not(:last-child) {
          margin-bottom: 380px;
        }
      }
      &-title {
        margin-bottom: 120px;
        font-size: 120px;
      }
      &-text {
        margin-bottom: 40px;
        font-size: 32px;
      }
      &-more {
        font-size: 32px;
      }
      .service-bottom {
        .bottom {
          &-item {
            min-height: 442px;
            padding: 40px 40px 80px;
            .service-more {
              bottom: 40px;
            }
          }
          &-title {
            margin-bottom: 38px;
            font-size: 62px;
          }
          &-sub-title {
            font-size: 22px;
          }
          &-text {
            font-size: 22px;
          }
        }
      }
    }
  }
  @include tablet {
    .service {
      &-list {
        margin-bottom: 150px;
      }
      &-item {
        &:not(:last-child) {
          margin-bottom: 140px;
        }
      }
      &-title {
        margin-bottom: 50px;
        font-size: 50px;
      }
      &-text {
        margin-bottom: 20px;
        font-size: 16px;
      }
      &-more {
        font-size: 16px;
      }
      .service-bottom {
        justify-content: space-between;
        flex-direction: column;
        .bottom {
          &-item {
            min-height: 230px;
            padding: 30px 30px 60px;
            width: getWidth(6);
            &:first-child {
              margin-right: 0px;
              margin-bottom: 20px;
            }
            .service-more {
              bottom: 30px;
            }
          }
          &-title {
            margin-bottom: 30px;
            font-size: 30px;
          }
          &-sub-title {
            font-size: 14px;
          }
          &-text {
            font-size: 14px;
          }
        }
      }
    }
  }
  @include mobile {
    .service {
      &.gl-6 {
        width: 100% !important;
      }
      &.l-ml-2 {
        margin-left: 0px !important;
      }
      &-list {
        margin-bottom: 100px;
      }
      &-item {
        &:not(:last-child) {
          margin-bottom: 100px;
        }
      }
      &-title {
        margin-bottom: 30px;
        font-size: 30px;
      }
      &-text {
        margin-bottom: 20px;
        font-size: 16px;
        &.l-ml-1 {
          margin-left: 0 !important;
        }
      }
      &-more {
        font-size: 16px;
        &.l-ml-1 {
          margin-left: 0 !important;
        }
      }
      .service-bottom {
        .bottom {
          &-item {
            min-height: 210px;
            width: 100%;
          }
          &-title {
            margin-bottom: 20px;
            font-size: 20px;
          }
        }
      }
    }
  }
</style>
