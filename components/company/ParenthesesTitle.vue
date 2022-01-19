<template>
  <div class="parentheses-title gl-6 l-ml-2">
    <div class="title">카카오브레인은</div>
    <div class="sub-title">
      <span>[</span>
      <div class="bracket-text">
        <img src="@/assets/images/bracket-text_1.png">
      </div>
      <span>]이다.</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'ParenthesesTitle'
}
</script>
<style lang="scss" scoped>
.parentheses-title{
  font-weight: 900;
  font-size: 80px;
  line-height: 130%;
  .sub-title{
    display: flex;
    align-items: center;
    .bracket-text{
      display: inline-block;
      width:213px;
      margin: 0 20px;
      img{
        width:100%;
        vertical-align: middle;
      }
    }
  }
}
  
</style>