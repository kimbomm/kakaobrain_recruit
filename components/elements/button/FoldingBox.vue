<template>
  <div class="folding">
    <div class="folding-top">
      <div class="folding-title">
        <p>{{ data.title }}</p>
      </div>
      <button class="folding-button" @click="onClick">
        <span>{{ isOpen ? '닫기' : '자세히 보기' }}</span>
      </button>
    </div>
    <div v-if="isOpen" class="folding-content">
      <p v-html="contentText"></p>
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
        isOpen: false
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
      p {
        font-family: 'NotoSansKR';
        font-size: 16px;
        line-height: 1.5;
        word-break: keep-all;
      }
    }
  }
</style>
