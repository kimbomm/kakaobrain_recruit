<template>
  <div class="folding">
    <div class="folding-top">
      <div class="folding-title">
        <p>{{ data.title }}</p>
        <p v-if="data.isText" class="sub-title">{{data.titleText}}</p>
      </div>
      <button class="folding-button" @click="onClick">
        <span>{{ isOpen ? '닫기' : '자세히 보기' }}</span>
      </button>
    </div>
    <div v-if="isOpen" class="folding-content">
      <div v-html="contentText"></div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {},
        require: true
      }
    },
    computed: {
      contentText() {
        return this.data.content.replaceAll('\n', '<br />')
      }
    },
    data() {
      return {
        isOpen: false,
        isText: false,
      }
    },
    methods: {
      onClick() {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>
<style lang="scss" scoped>
  .folding {
    padding: 30px 40px 30px 30px;
    background-color: $surface-2;
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
    }
    &-title {
      flex: 0 0 90%;
      p {
        font-family: 'NotoSansKR';
        font-size: 20px;
        line-height: 1.2;
        font-weight: 700;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .sub-title{
        margin-top:10px;
        font-size: 14px;
        font-weight:400;
        line-height: 120%;
      }
    }
    &-button {
      cursor: pointer;
      span {
        font-family: 'NotoSansKR';
        font-size: 14px;
        color: $gray-6;
        line-height: 1.2;
      }
    }
    &-content {
      margin-top: 40px;
      > div {
        font-family: 'NotoSansKR';
        font-size: 16px;
        font-weight:400;
        line-height: 1.5;
        word-break: keep-all;
      }
    }
  }

  @media screen and (max-width:1500px) {
    .folding {
      &-title {
        flex: 0 0 72%;
      }
    }
  }
  @media screen and (max-width:1220px) {
    .folding {
      &-title {
        p {
          font-size: 16px;
        }
      }
      &-button {
        span {
          font-size: 13px;
        }
      }
    }
  }
  @include pc-large {
    .folding {
      padding: 40px 75px 40px 30px;
      &-title {
        flex: 0 0 90%;
        p {
          font-size: 28px;
        }
        .sub-title{
          margin-top:14px;
          font-size: 18px;
        }
      }
      &-button {
        span {
          font-size: 18px;
        }
      }
      &-content {
        margin-top: 40px;
        > div {
          font-size: 22px;
        }
      }
    }
  }
  @include pc-4k {
    .folding {
      padding: 46px 50px;
      &-title {
        flex: 0 0 90%;
        p {
          font-size: 42px;
        }
        .sub-title{
          margin-top:20px;
          font-size: 26px;
        }
      }
      &-button {
        span {
          font-size: 28px;
        }
      }
      &-content {
        margin-top: 50px;
        > div {
          font-size: 32px;
        }
      }
    }
  }
  @include tablet {
    .folding {
      padding: 24px 30px;
      &-title {
        flex: 0 0 75%;
        p {
          font-size: 18px;
        }
        .sub-title{
          margin-top:10px;
          font-size: 14px;
        }
      }
      &-button {
        span {
          font-size: 14px;
        }
      }
      &-content {
        margin-top: 30px;
        > div {
          font-size: 14px;
        }
      }
    }
  }
  
  @media screen and (max-width:800px) {
    .folding {
      &-title {
        p {
          font-size: 16px;
        }
      }
      &-button {
        span {
          font-size: 12px;
        }
      }
    }
  }
  @include mobile {
    .folding {
      position: relative;
      padding: 20px 40px 50px 20px;
      &-top {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: flex-start;
      }
      &-title {
        flex: 0 0 80%;
        p {
          white-space: normal;
        }
      }
      &-button {
        position: absolute;
        bottom: 20px;
        span {
          font-size: 14px;
        }
      }
      &-content {
        margin-top: 20px;
        > div {
          font-size: 14px;
        }
      }
    }
  }
</style>
