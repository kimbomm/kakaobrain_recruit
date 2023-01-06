<template>
  <div :class="classBind">
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
      <div class="txt" v-html="data.info.text"></div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      ...mapState(['language']),
      classBind() {
        const classList = ['bus-inquiry']
        if (this.language === 'EN') classList.push('map-en')

        return classList.join(' ')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .bus-inquiry {
    width: getWidth(6);
    margin-left: getMargin(3);
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
        > div:nth-child(1) {
          width: 50px;
          flex: 0 0 50px;
        }
        > div:nth-child(2) {
          width: calc(100% - 50px);
          flex: 0 0 calc(100% - 50px);
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
    &.map-en {
      .bus-item {
        > div:nth-child(1) {
          width: 70px;
          flex: 0 0 70px;
        }
        > div:nth-child(2) {
          width: calc(100% - 70px);
          flex: 0 0 calc(100% - 70px);
        }
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
          > div:nth-child(1) {
            width: 70px;
            flex: 0 0 70px;
          }
          > div:nth-child(2) {
            width: calc(100% - 70px);
            flex: 0 0 calc(100% - 70px);
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
      &.map-en {
        .but-item {
          > div:nth-child(1) {
            width: 90px;
            flex: 0 0 90px;
          }
          > div:nth-child(2) {
            width: calc(100% - 90px);
            flex: 0 0 calc(100% - 90px);
          }
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
          > div:nth-child(1) {
            width: 100px;
            flex: 0 0 100px;
          }
          > div:nth-child(2) {
            width: calc(100% - 100px);
            flex: 0 0 calc(100% - 100px);
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
      &.map-en {
        .but-item {
          > div:nth-child(1) {
            width: 130px;
            flex: 0 0 130px;
          }
          > div:nth-child(2) {
            width: calc(100% - 130px);
            flex: 0 0 calc(100% - 130px);
          }
        }
      }
    }
  }
  @include tablet {
    .bus-inquiry {
      width: getWidth(7);
      margin-left: getMargin(2);
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
          > div:nth-child(1) {
            width: 40px;
            flex: 0 0 40px;
          }
          > div:nth-child(2) {
            width: calc(100% - 40px);
            flex: 0 0 calc(100% - 40px);
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
      &.map-en {
        .bus-item {
          > div:nth-child(1) {
            width: 60px;
            flex: 0 0 60px;
          }
          > div:nth-child(2) {
            width: calc(100% - 60px);
            flex: 0 0 calc(100% - 60px);
          }
        }
      }
    }
  }
  @include mobile {
    .bus-inquiry {
      width: 100%;
      margin-left: 0;
      .bus-con {
        margin-bottom: 30px;
      }
      .bus {
        &-item {
          flex-direction: column;
          &:not(:last-child) {
            margin-bottom: 15px;
          }
          > div:nth-child(1) {
            width: 100%;
            flex: 1;
          }
          > div:nth-child(2) {
            width: 100%;
            flex: 1;
          }
        }
      }
      &.map-en {
        .bus-item {
          > div:nth-child(1) {
            width: 100%;
            flex: 1;
          }
          > div:nth-child(2) {
            width: 100%;
            flex: 1;
          }
        }
      }
    }
  }
</style>
