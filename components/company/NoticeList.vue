<template>
  <div class="notice-item">
    <div class="item-category">
      <div class="category">{{ data.recruitClassName }}</div>
    </div>
    <div class="item-con">
      <div class="title">{{ data.recruitNoticeName }}</div>
      <div class="date">
        {{ data.receiveStartDatetime }} ~ {{ data.receiveEndDatetime }}
      </div>
      <div class="day">
        D-{{
          $dayjs(data.receiveEndDatetime).diff(
            $dayjs(data.receiveStartDatetime),
            'day'
          )
        }}
      </div>
    </div>
    <div class="item-type">
      <div class="type">접수중</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NoticeList',
    props: {
      data: {
        type: Object,
        default: () => [],
        require: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .notice {
    &-item {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 20px 0 0;
      border-top: 1px solid $gray-9;
      box-sizing: border-box;
    }
  }
  .item-category {
    width: getWidth(1);
    margin-right: 20px;
    .category {
      font-size: 20px;
      font-weight: 400;
      line-height: 130%;
    }
  }
  .item-con {
    width: getWidth(3);
    margin-right: 20px;
    .title {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: 400;
      line-height: 130%;
      word-break: keep-all;
    }
    .date {
      margin-bottom: 10px;
      font-size: 12px;
      font-weight: 400;
      line-height: 130%;
      color: $gray-5;
    }
    .day {
      display: inline-flex;
      justify-content: center;
      align-content: center;
      min-width: 58px;
      height: 28px;
      padding: 6px;
      border-radius: 50px;
      background-color: $surface-8;
      line-height: 130%;
      font-weight: 900;
      font-style: italic;
      font-size: 12px;
      color: $gray-0;
    }
  }
  .item-type {
    .type {
      width: 58px;
      height: 28px;
      padding: 6px 11px;
      background-color: $gray-9;
      font-weight: 900;
      font-size: 12px;
      line-height: 130%;
      color: $gray-0;
      // letter-spacing: -2px;
    }
  }

  @include pc-large {
    .notice {
      &-item {
        padding: 20px 0 0;
      }
    }
    .item-category {
      .category {
        font-size: 26px;
      }
    }
    .item-con {
      .title {
        margin-bottom: 14px;
        font-size: 26px;
      }
      .date {
        margin-bottom: 14px;
        font-size: 16px;
      }
      .day {
        min-width: 69px;
        height: 33px;
        padding: 6px;
        font-size: 16px;
      }
    }
    .item-type {
      .type {
        width: 73px;
        height: 38px;
        padding: 9px 14px;
        font-size: 16px;
      }
    }
  }
  @include pc-4k {
    .notice {
      &-item {
        padding: 39.39px 0 0;
      }
    }
    .item-category {
      .category {
        font-size: 38px;
      }
    }
    .item-con {
      .title {
        margin-bottom: 20px;
        font-size: 38px;
      }
      .date {
        margin-bottom: 20px;
        font-size: 24px;
      }
      .day {
        min-width: 107px;
        height: 51px;
        padding: 10px;
        font-size: 24px;
      }
    }
    .item-type {
      .type {
        width: 120px;
        height: 58px;
        padding: 12px 24px;
        font-size: 26px;
      }
    }
  }
  @include tablet {
    .item-category {
      width: getWidth(2);
      .category {
        font-size: 18px;
      }
    }
    .item-con {
      width: getWidth(4);
      .title {
        margin-bottom: 10px;
        font-size: 18px;
      }
      .date {
        margin-bottom: 10px;
        font-size: 12px;
      }
      .day {
        min-width: 58px;
        height: 28px;
        padding: 6px;
        font-size: 12px;
      }
    }
    .item-type {
      .type {
        width: 58px;
        height: 28px;
        padding: 6px 12px;
        font-size: 12px;
      }
    }
  }
  @include mobile {
    .notice {
      &-item {
        position: relative;
        display: flex;
        flex-direction: column;
        border-top: 1px solid $gray-9;
        box-sizing: border-box;
      }
    }
    .item-category {
      width: 100% !important;
      margin-bottom: 20px;
      margin-right: 0px;
      .category {
        font-size: 18px;
      }
    }
    .item-con {
      width: 100% !important;
      margin-right: 0px;
      .title {
        margin-bottom: 20px;
        font-size: 18px;
      }
      .date {
        margin-bottom: 20px;
        font-size: 12px;
      }
    }
    .item-type {
      position: absolute;
      bottom: 0;
      right: 0;
      .type {
        width: 58px;
        height: 28px;
        padding: 6px 12px;
        font-size: 12px;
      }
    }
  }
</style>
