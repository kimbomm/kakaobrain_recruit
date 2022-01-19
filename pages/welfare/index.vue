<template>
  <div class="">
    <MainTitle
      :title="`원격근무와</br>유연근무제.`"
    />
    <MainTitleText
      :text="`우리는 업무 공간을 스스로 정해 일합니다.</br>
      우리의 ‘완전선택근무시간제'는 자신의 업무시간을 정해 스스로 관리하며 일합니다.`"
    />
    <MiddleImg/>
  </div> 
</template>
<script>
import MainTitle from '@/components/company/MainTitle'
import MainTitleText from '@/components/company/MainTitleText'
import MiddleImg from '@/components/company/MiddleImg'
export default {
  name:'index',
  components:{
    MainTitle,
    MainTitleText,
    MiddleImg,
  }
}
</script>
<style lang="scss" scoped>
  .main-title{
    margin-top:320px;
    margin-bottom:60px;
  }
  .main-title-text{ 
    margin-bottom:200px;
  }
  .middle-img{
    margin-bottom:140px;
  }
</style>