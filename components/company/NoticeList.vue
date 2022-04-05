<template>
  <a :href="`/careers/detail?dataId=${data.id}`">
    <div class="notice-item">
      <div class="item-category">
        <div class="category">
          {{
            data.categories.department &&
            data.categories.department.toUpperCase()
          }}
        </div>
      </div>
      <div class="item-con">
        <div class="title">
          {{ data.text }}
        </div>
        <div class="date">
          {{ data.categories.location }} / {{ data.categories.commitment }}
        </div>
      </div>
      <div class="item-type">
        <div class="type">APPLY</div>
      </div>
    </div>
  </a>
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
      word-break: break-word;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.3;
    }
  }
  .item-con {
    width: getWidth(3);
    margin-right: 20px;
    .title {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.3;
      word-break: keep-all;
    }
    .date {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.3;
      color: $gray-5;
    }
  }
  .item-type {
    width: getWidth(1);
    text-align: right;
    .type {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 72px;
      height: 34px;
      background-color: $gray-9;
      font-weight: 400;
      font-style: italic;
      font-size: 14px;
      line-height: 1.3;
      color: $gray-0;
      border-radius: 27px;
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
      margin-bottom: 14px;
      .title {
        margin-bottom: 14px;
        font-size: 26px;
      }
      .date {
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
      margin-bottom: 20px;
      .title {
        margin-bottom: 20px;
        font-size: 38px;
      }
      .date {
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
      margin-bottom: 10px;
      .title {
        margin-bottom: 10px;
        font-size: 18px;
      }
      .date {
        font-size: 12px;
      }
    }
    .item-type {
      .type {
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
      margin-bottom: 10px;
      margin-right: 0px;
      .category {
        font-size: 14px;
      }
    }
    .item-con {
      width: 100% !important;
      margin-right: 0px;
      margin-bottom: 16px;
      .title {
        margin-bottom: 10px;
        font-size: 18px;
      }
    }
    .item-type {
      text-align: right;
      width: 100%;
      .type {
        padding: 9px 14px;
        font-size: 12px;
      }
    }
  }
</style>
