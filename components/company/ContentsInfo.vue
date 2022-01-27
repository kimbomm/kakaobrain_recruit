<template>
  <div class="contents-info gl-5 l-ml-3">
    <div class="item">
      <div class="tit">이메일</div>
      <div class="txt">hotline@kakaobrain.com</div>
    </div>
    <div class="item">
      <div class="tit">우편</div>
      <div class="txt">경기 성남시 분당구 판교역로241번길 20 미래에셋벤처타워 11층 (주)카카오브레인 윤리경영팀</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'ContentsInfo',
}
</script>
<style lang="scss" scoped>
  .contents-info{
    .item{
      &:not(:last-child){
        margin-bottom:30px;
      }
      .tit{
        font-weight: 900;
        font-size: 20px;
        line-height: 130%;
        margin-bottom:10px;
      }
      .txt{
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
      }
    }
  }
  @include pc-large {
    .contents-info{
      .item{
        &:not(:last-child){
          margin-bottom:50px;
        }
        .tit{
          font-size: 30px;
          margin-bottom:14px;
        }
        .txt{
          font-size: 22px;
        }
      }
    }
  }
  @include pc-4k {
    .contents-info{
      .item{
        &:not(:last-child){
          margin-bottom:8 0px;
        }
        .tit{
          font-size: 42px;
          margin-bottom:20px;
        }
        .txt{
          font-size: 32px;
        }
      }
    }
  }
  @include tablet {
    .contents-info{
      .item{
        &:not(:last-child){
          margin-bottom:40px;
        }
        .tit{
          font-size: 20px;
          margin-bottom:10px;
        }
        .txt{
          font-size: 14px;
        }
      }
    }
  }
  @include mobile {
    .contents-info{
      .item{
        &:not(:last-child){
          margin-bottom:30px;
        }
        .tit{
          font-size: 20px;
          margin-bottom:16px;
        }
        .txt{
          font-size: 14px;
        }
      }
    }
  }
</style>