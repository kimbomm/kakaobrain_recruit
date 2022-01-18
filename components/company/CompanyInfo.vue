<template>
  <div class="company-info gl-5 l-ml-3">
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
  
}
</script>
<style lang="scss" scoped>
  .company-info{
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
</style>