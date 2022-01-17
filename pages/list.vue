<template>
  <div class="layout">
    <div class="index-title">작업 페이지</div>
    <div class="inner">
      <ul>
        <li>
          <div class="tit">page</div>
          <ul>
            <li>
              <div class="sub-tit">페이지</div>
              <ul>
                <li></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index'
  }
</script>
<style lang="scss" scoped>
  .layout {
    padding: 200px 80px 80px;
    box-sizing: border-box;
    .index-title {
      margin-bottom: 40px;
      font-size: 35px;
      font-weight: 600;
    }
    .inner {
      border: 1px solid #000;
    }
    .tit {
      padding: 10px;
      // border: 1px solid #000;
      background-color: #ccc;
      font-weight: 600;
      font-size: 16px;
    }
    .sub-tit {
      padding: 10px;
      background-color: #eee;
      font-weight: 600;
      font-size: 16px;
    }
    .link {
      display: block;
      padding: 10px;
      color: #000;
      font-size: 16px;
      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
</style>
