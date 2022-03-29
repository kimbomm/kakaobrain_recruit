<template>
  <div class="interview">
    <div class="interview-title">
      <template v-if="language === 'KR'">
        <div class="title">카카오브레인은</div>
        <div class="sub-title">
          <div class="bracket-text">
            <img
              :src="require(`@/assets/images/interview/${data.image.bracket}`)"
            />
          </div>
          <span>이다.</span>
        </div>
      </template>
      <template v-else>
        <div class="title">kakaobrain is</div>
        <div class="sub-title">
          <div class="bracket-text">
            <img
              :src="require(`@/assets/images/interview/${data.image.bracket}`)"
            />
          </div>
        </div>
      </template>
    </div>

    <div class="interview-con l-ml-1">
      <div class="profile-img">
        <img
          :src="require(`@/assets/images/interview/${data.image.profile}`)"
        />
      </div>
      <div class="profile-head">
        <div class="profile-tit">
          <template v-if="language === 'KR'">
            <div>{{ data.team }}팀</div>
            <div>인턴'{{ data.name }}'의 회고</div>
          </template>
          <template v-else>
            <div>Memories from {{ data.name }},</div>
            <div>who interned at the {{ data.team }} Team</div>
          </template>
        </div>
        <div class="profile-txt">{{ data.profileTxt }}</div>
      </div>

      <div class="interview-box">
        <div class="interview-text">
          <p v-html="data.interviewTextA.replace(/\n/g, '<br/>')"></p>
        </div>
        <div class="interview-text">
          <p v-html="data.interviewTextB.replace(/\n/g, '<br/>')"></p>
        </div>
      </div>

      <div class="interview-know-how">
        <div class="know-how-tit">
          <template v-if="language === 'KR'">
            {{ data.name }}가 알려주는 노하우!
          </template>
          <template v-else>Tips from {{ data.name }}!</template>
        </div>
        <div class="advice">
          <div class="advice-item">
            <div class="tit">
              {{
                language === 'KR'
                  ? '이런 분들에게 추천!'
                  : 'kakaobrain is great for!'
              }}
            </div>
            <div
              v-for="(txt, index) in data.recommend"
              :key="index"
              class="txt"
            >
              {{ txt }}
            </div>
          </div>
          <div class="advice-item">
            <div class="tit">
              {{
                language === 'KR'
                  ? '지원자를 위한 조언'
                  : 'Advice for applicants'
              }}
            </div>
            <div v-for="(txt, index) in data.advice" :key="index" class="txt">
              {{ txt }}
            </div>
          </div>
        </div>
        <div class="interview-tidy">
          <div class="txt">
            <p v-html="data.interviewTidy.replace(/\n/g, '<br/>')"></p>
          </div>
          <a :href="data.facebook.link" :target="data.facebook.target">
            <div class="btn">
              <span class="btn-txt">
                <template v-if="language === 'KR'">
                  카카오브레인 페이스북에서 보기
                </template>
                <template v-else> Meet kakaobrain on Facebook </template>
                →
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Interview',
    props: {
      data: {
        type: Object,
        default: () => {},
        require: true
      }
    },
    computed: {
      ...mapState({
        language: state => state.language
      })
    }
  }
</script>
<style lang="scss" scoped>
  .interview {
    width: getWidth(6);
    margin-left: getMargin(2);
    word-break: keep-all;
    .interview-title {
      margin-bottom: 100px;
      font-weight: 900;
      font-size: 80px;
      line-height: 130%;
    }
    .sub-title {
      display: flex;
      align-items: center;
      .bracket-text {
        position: relative;
        &:before {
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
          left: -5px;
          content: '[';
        }
        &:after {
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
          right: -5px;
          content: ']';
        }
        img {
          height: 90px;
          vertical-align: middle;
        }
      }
    }
    .profile {
      &-img {
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
        img {
          width: 100%;
        }
      }
      &-head {
        margin-bottom: 70px;
      }
      &-tit {
        font-weight: 900;
        font-size: 40px;
        line-height: 130%;
        margin-bottom: 20px;
      }
      &-txt {
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
      }
    }
    &-box {
      display: flex;
      justify-content: space-between;
      margin-bottom: 100px;
    }
    &-text {
      // width: getWidth(2);
      flex: 0 0 getWidth(2);
      font-size: 20px;
      font-weight: 400;
      line-height: 150%;
      &::before {
        content: '“';
        display: block;
        width: 24px;
        height: 24px;
        margin-bottom: 20px;
        font-weight: 900;
        font-size: 50px;
        line-height: 100%;
      }
    }
    &-know-how {
      .know-how-tit {
        font-size: 26px;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 20px;
      }
    }
    &-tidy {
      padding: 30px;
      background-color: $gray-9;
      color: $gray-0;
      .txt {
        margin-bottom: 40px;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
      }
      .btn {
        display: inline-block;
        height: 50px;
        border: 1px solid $gray-0;
        border-radius: 0px;
        padding: 16px;
        font-size: 0px;
        box-sizing: border-box;
        cursor: pointer;
        text-align: center;
        .btn-txt {
          display: block;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%;
          color: $gray-0;
        }
      }
    }
    .advice {
      margin-bottom: 40px;
      &-item {
        padding: 30px;
        background-color: $surface-2;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
        .tit {
          margin-bottom: 20px;
          font-weight: 900;
          font-size: 20px;
          line-height: 120%;
        }
        .txt {
          position: relative;
          margin-left: 20px;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          &::before {
            content: '';
            position: absolute;
            left: -10px;
            top: 9px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: $gray-9;
          }
        }
      }
    }
  }

  @include pc-large {
    .interview {
      .interview-title {
        font-size: 100px;
        margin-bottom: 130px;
      }
      .sub-title {
        .bracket-text {
          img {
            height: 117px;
          }
        }
      }
      .profile {
        &-img {
          width: 100px;
          height: 100px;
          margin-bottom: 30px;
        }
        &-head {
          margin-bottom: 90px;
        }
        &-tit {
          font-size: 52px;
          margin-bottom: 30px;
        }
        &-txt {
          font-size: 22px;
        }
      }
      &-box {
        margin-bottom: 140px;
      }
      &-text {
        font-size: 26px;
        &::before {
          width: 24px;
          height: 32px;
          margin-bottom: 30px;
          font-size: 70px;
        }
      }
      &-know-how {
        .know-how-tit {
          font-size: 34px;
          margin-bottom: 30px;
        }
      }
      &-tidy {
        padding: 30px;
        .txt {
          margin-bottom: 50px;
          font-size: 22px;
        }
        .btn {
          height: 60px;
          padding: 19px 18px;
          .btn-txt {
            font-size: 16px;
          }
        }
      }
      .advice {
        margin-bottom: 50px;
        &-item {
          padding: 40px 30px;
          &:not(:last-child) {
            margin-bottom: 14px;
          }
          .tit {
            margin-bottom: 30px;
            font-size: 28px;
          }
          .txt {
            margin-left: 20px;
            font-size: 18px;
            &::before {
              left: -15px;
              top: 10px;
            }
          }
        }
      }
    }
  }
  @include pc-4k {
    .interview {
      &.l-ml-2 {
        margin-left: getMargin(3) !important;
      }
      .interview-title {
        font-size: 140px;
        margin-bottom: 200px;
      }
      .sub-title {
        .bracket-text {
          img {
            height: 158px;
          }
        }
      }
      .profile {
        &-img {
          width: 150px;
          height: 150px;
          margin-bottom: 50px;
        }
        &-head {
          margin-bottom: 140px;
        }
        &-tit {
          font-size: 80px;
          margin-bottom: 50px;
        }
        &-txt {
          font-size: 32px;
        }
      }
      &-box {
        margin-bottom: 210px;
      }
      &-text {
        font-size: 40px;
        &::before {
          width: 45px;
          height: 100px;
          font-size: 100px;
        }
      }
      &-know-how {
        .know-how-tit {
          font-size: 50px;
          margin-bottom: 50px;
        }
      }
      &-tidy {
        padding: 46px 10px 50px 50px;
        .txt {
          margin-bottom: 70px;
          font-size: 32px;
        }
        .btn {
          height: 90px;
          padding: 28px 26px;
          .btn-txt {
            font-size: 22px;
          }
        }
      }
      .advice {
        margin-bottom: 20px;
        &-item {
          padding: 46px 50px 50px 50px;
          &:not(:last-child) {
            margin-bottom: 20px;
          }
          .tit {
            margin-bottom: 50px;
            font-size: 42px;
          }
          .txt {
            margin-left: 30px;
            font-size: 32px;
            &::before {
              left: -20px;
              top: 10px;
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }
  }
  @include tablet {
    .interview {
      width: getWidth(7);
      .interview-title {
        font-size: 40px;
        margin-bottom: 80px;
      }
      .sub-title {
        .bracket-text {
          img {
            height: 45px;
          }
        }
      }
      .profile {
        &-img {
          width: 80px;
          height: 80px;
          margin-bottom: 20px;
        }
        &-head {
          margin-bottom: 70px;
        }
        &-tit {
          font-size: 30px;
          margin-bottom: 20px;
        }
        &-txt {
          font-size: 14px;
        }
      }
      &-box {
        margin-bottom: 80px;
      }
      &-text {
        flex: 0 0 getWidth(3);
        font-size: 16px;
        &::before {
          width: 24px;
          height: 24px;
          margin-bottom: 20px;
          font-size: 50px;
        }
      }
      &-know-how {
        .know-how-tit {
          font-size: 24px;
          margin-bottom: 20px;
        }
      }
      &-tidy {
        padding: 30px 36px;
        .txt {
          margin-bottom: 30px;
          font-size: 14px;
        }
        .btn {
          height: 48px;
          padding: 16px 20px;
          .btn-txt {
            font-size: 12px;
          }
        }
      }
      .advice {
        margin-bottom: 10px;
        &-item {
          padding: 30px 38px;
          &:not(:last-child) {
            margin-bottom: 14px;
          }
          .tit {
            margin-bottom: 20px;
            font-size: 18px;
          }
          .txt {
            margin-left: 20px;
            font-size: 14px;
            &::before {
              left: -15px;
              top: 10px;
            }
          }
        }
      }
    }
  }
  @include mobile {
    .interview {
      width: 100%;
      margin-left: 0;
      .interview-title {
        font-size: 34px;
        margin-bottom: 50px;
      }
      .sub-title {
        .bracket-text {
          img {
            height: 38px;
          }
        }
      }
      .profile {
        &-img {
          width: 50px;
          height: 50px;
          margin-bottom: 20px;
        }
        &-head {
          margin-bottom: 40px;
        }
        &-tit {
          font-size: 24px;
          margin-bottom: 20px;
        }
        &-txt {
          font-size: 14px;
        }
      }
      &-con {
        &.l-ml-1 {
          margin-left: 0 !important;
        }
      }
      &-box {
        margin-bottom: 50px;
        flex-direction: column;
      }
      &-text {
        width: 100%;
        font-size: 16px;
        margin-bottom: 40px;
        &.l-ml-1 {
          margin-left: 0 !important;
        }
      }
      &-know-how {
        .know-how-tit {
          font-size: 20px;
          margin-bottom: 20px;
        }
      }
      &-tidy {
        padding: 20px;
        .txt {
          margin-bottom: 30px;
          font-size: 14px;
        }
        .btn {
          height: 48px;
          padding: 16px 20px;
          .btn-txt {
            font-size: 12px;
          }
        }
      }
      .advice {
        margin-bottom: 10px;
        &-item {
          padding: 20px;
          &:not(:last-child) {
            margin-bottom: 10px;
          }
          .tit {
            margin-bottom: 20px;
            font-size: 18px;
          }
          .txt {
            margin-left: 20px;
            font-size: 14px;
            &::before {
              left: -15px;
              top: 10px;
            }
          }
        }
      }
    }
  }
</style>
