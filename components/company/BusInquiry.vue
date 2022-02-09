<template>
  <div class="bus-inquiry gl-6 l-ml-3">
    <div class="bus-con">
      <div class="tit">{{ data.title }}</div>
      <div class="list">
        <div v-for="(item, index) in data.list" :key="index" class="bus-item">
          <div class="bus-tit">{{ item.name }}</div>
          <div>
            <div
              v-for="(bus, idx) in item.bus"
              :key="`bus-${idx}`"
              class="bus-txt"
            >
              {{ bus }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inquiry">
      <div class="tit">{{ data.info.title }}</div>
      <div class="txt">{{ data.info.text }}</div>
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
<style lang="scss" scoped>
  .bus-inquiry {
    .bus-con {
      margin-bottom: 40px;
      .tit {
        margin-bottom: 10px;
        font-weight: 900;
        font-size: 20px;
        line-height: 130%;
      }
    }
    .bus {
      &-item {
        display: flex;
        &:not(:last-child) {
          margin-bottom: 15px;
        }
      }
      &-tit {
        margin-right: 15px;
        font-size: 16px;
        font-weight: 700;
        line-height: 150%;
      }
      &-txt {
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
      }
    }
    .inquiry {
      .tit {
        margin-bottom: 10px;
        font-weight: 900;
        font-size: 20px;
        line-height: 130%;
      }
      .txt {
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
      }
    }
  }

  @include pc-large {
    .bus-inquiry {
      .bus-con {
        margin-bottom: 50px;
        .tit {
          margin-bottom: 20px;
          font-size: 30px;
        }
      }
      .bus {
        &-item {
          &:not(:last-child) {
            margin-bottom: 15px;
          }
        }
        &-tit {
          margin-right: 30px;
          font-size: 22px;
        }
        &-txt {
          font-size: 22px;
        }
      }
      .inquiry {
        .tit {
          margin-bottom: 20px;
          font-size: 30px;
        }
        .txt {
          font-size: 22px;
        }
      }
    }
  }
  @include pc-4k {
    .bus-inquiry {
      .bus-con {
        margin-bottom: 70px;
        .tit {
          margin-bottom: 42px;
          font-size: 40px;
        }
      }
      .bus {
        &-item {
          &:not(:last-child) {
            margin-bottom: 15px;
          }
        }
        &-tit {
          margin-right: 40px;
          font-size: 32px;
        }
        &-txt {
          font-size: 32px;
        }
      }
      .inquiry {
        .tit {
          margin-bottom: 40px;
          font-size: 42px;
        }
        .txt {
          font-size: 32px;
        }
      }
    }
  }
  @include tablet {
    .bus-inquiry {
      &.gl-6 {
        width: getWidth(7) !important;
      }
      &.l-ml-3 {
        margin-left: getMargin(2) !important;
      }
      .bus-con {
        margin-bottom: 40px;
        .tit {
          margin-bottom: 20px;
          font-size: 20px;
        }
      }
      .bus {
        &-item {
          &:not(:last-child) {
            margin-bottom: 15px;
          }
        }
        &-tit {
          margin-right: 20px;
          font-size: 14px;
        }
        &-txt {
          font-size: 14px;
        }
      }
      .inquiry {
        .tit {
          margin-bottom: 16px;
          font-size: 20px;
        }
        .txt {
          font-size: 14px;
        }
      }
    }
  }
  @include mobile {
    .bus-inquiry {
      &.gl-6 {
        width: 100% !important;
      }
      &.l-ml-3 {
        margin-left: 0 !important;
      }
      .bus-con {
        margin-bottom: 30px;
      }
      .bus {
        &-item {
          flex-direction: column;
          &:not(:last-child) {
            margin-bottom: 15px;
          }
        }
      }
    }
  }
</style>
