<template>
  <div class="question-box">
    <div class="title gl-6">
      <span v-html="data.title"></span>
    </div>
    <div class="list">
      <ul>
        <li
          class="question-item"
          v-for="(item, index) in data.questionList"
          :key="index"
        >
          <QuestionList :data="item" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import QuestionList from '@/components/company/QuestionList'
  export default {
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    },
    components: {
      QuestionList
    },
    data() {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  .question-box {
    padding: 870px 20px 500px;
    background-color: $gray-9;
    .title {
      position: relative;
      margin: 0 auto;
      margin-bottom: 688px;
      text-align: center;
      font-weight: 900;
      font-size: 90px;
      line-height: 120%;
      color: $gray-0;
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -240px;
        transform: translate(-50%, 48px);
        font-family: Inter;
        font-weight: 900;
        font-size: 40px;
        line-height: 120%;
        color: $gray-0;
      }
    }
    .list {
      .question-item {
        &:not(:last-child) {
          margin-bottom: 400px;
        }
      }
    }
  }

  @include pc-large {
    .question-box {
      padding: 1163px 20px 670px;
      .title {
        margin-bottom: 914px;
        font-size: 120px;
        &::before {
          bottom: -320px;
          transform: translate(-50%, 64px);
          font-size: 40px;
        }
      }
      .list {
        .question-item {
          &:not(:last-child) {
            margin-bottom: 530px;
          }
        }
      }
    }
  }
  @include pc-4k {
    .question-box {
      padding: 1740px 20px 1000px;
      .title {
        margin-bottom: 1376px;
        font-size: 180px;
        &::before {
          bottom: -480px;
          transform: translate(-50%, 96px);
          font-size: 60px;
        }
      }
      .list {
        .question-item {
          &:not(:last-child) {
            margin-bottom: 800px;
          }
        }
      }
    }
  }
  @include tablet {
    .question-box {
      padding: 480px 20px 300px;
      .title {
        margin-bottom: 474px;
        font-size: 60px;
        &::before {
          bottom: -150px;
          transform: translate(-50%, 24px);
          font-size: 20px;
        }
        &.gl-6 {
          width: getWidth(8) !important;
        }
      }
      .list {
        .question-item {
          &:not(:last-child) {
            margin-bottom: 400px;
          }
        }
      }
    }
  }
  @include mobile {
    .question-box {
      padding: 340px 20px 200px;
      .title {
        margin-bottom: 328px;
        font-size: 36px;
        &::before {
          bottom: -100px;
          transform: translate(-50%, 28px);
          font-size: 20px;
        }
        &.gl-6 {
          width: 100% !important;
        }
      }
      .list {
        .question-item {
          &:not(:last-child) {
            margin-bottom: 200px;
          }
        }
      }
    }
  }
</style>
