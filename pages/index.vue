<template>
  <div class="">
    <MainTitle
      :title="`영입공고.`"
    />
    <MainTitleText
      :text="`카카오브레인과 함께 생각하지 못한 물음을 던지고,</br>
      아무도 가보지 않은 길을 개척할 Unthinkable Krew를 기다립니다.`"
    />
    <MiddleImg/>

    <div class="gl-5 l-ml-3">
      <div class="category-box">
        <Checkbox
          checkboxId="checkbox_0"
          checkboxValue="a"
          checkboxText="전체"
          :isChecked="true"
        />
        <Checkbox
          checkboxId="checkbox_1"
          checkboxValue="b"
          checkboxText="AI Researcher"
          :isChecked="false"
        />
        <Checkbox
          checkboxId="checkbox_2"
          checkboxValue="b"
          checkboxText="AI Software Engineer"
          :isChecked="false"
        />
        <Checkbox
          checkboxId="checkbox_3"
          checkboxValue="b"
          checkboxText="Tech Strategy Staff"
          :isChecked="false"
        />
        <Checkbox
          checkboxId="checkbox_4"
          checkboxValue="b"
          checkboxText="UX/UI"
          :isChecked="false"
        />
        <Checkbox
          checkboxId="checkbox_5"
          checkboxValue="b"
          checkboxText="경영지원"
          :isChecked="false"
        />
        <Checkbox
          checkboxId="checkbox_6"
          checkboxValue="b"
          checkboxText="인턴"
          :isChecked="false"
        />
      </div>
      
      <div class="notice-contents">
        <ul>
          <li class="notice-list" v-for="(data, index) in noticeList" :key="index">
            <NoticeList :data="data"/>
          </li>
        </ul>
      </div>
      
    </div>
    <div class="l-ml-1">
      <ListPaging/>
    </div>
    
  </div> 
</template>
<script>
import MainTitle from '@/components/company/MainTitle'
import MainTitleText from '@/components/company/MainTitleText'
import MiddleImg from '@/components/company/MiddleImg'
import Checkbox from '@/components/elements/filter/Checkbox'
import NoticeList from '@/components/company/NoticeList'
import ListPaging from '@/components/elements/ListPaging'
export default {
  name:'index',
  components:{
    MainTitle,
    MainTitleText,
    MiddleImg,
    Checkbox,
    NoticeList,
    ListPaging,
  },
  data(){
    return{
      noticeList:[
        {
          category:'AI Researcher',
          itemTit:'[경력/신입] AI Researcher for biology (Domain background)',
          itemDate:'2021.10.28 (목) 00:00 ~2022.01.27 (목) 00:00',
          itemDay:'D - 31',
          itemType:'접수중',
        },
        {
          category:'AI Researcher',
          itemTit:'[경력/신입] AI Researcher for biology (Domain background)',
          itemDate:'2021.10.28 (목) 00:00 ~2022.01.27 (목) 00:00',
          itemDay:'D - 31',
          itemType:'접수중',
        }
      ]
    }
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
  .category-box{
    margin-bottom:60px;
  }
  .paging {
    margin-top:62px;
  }
  .category-box{
    .checkbox{
      &:not(:last-child){
        margin-right:10px;
      }
    }
  }
  .notice-contents{
    .notice-list{
      &:not(:last-child){
        margin-bottom:80px;
      }
    }
  }
</style>