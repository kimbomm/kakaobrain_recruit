<template>
  <div class="recruiting">
    <MainTitle
      :title="`영입공고.`"
    />
    <MainTitleText
      :text="`카카오브레인과 함께 생각하지 못한 물음을 던지고,</br>
      아무도 가보지 않은 길을 개척할 Unthinkable Krew를 기다립니다.`"
    />
    <MiddleImg/>

    <div class="category-wrap gl-5 l-ml-3">
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
    <div class="notice-paging l-ml-1">
      <ListPaging/>
    </div>
  </div> 
</template>
<script>
import mixinGlobal from '@/mixin/global.js'
import MainTitle from '@/components/company/MainTitle'
import MainTitleText from '@/components/company/MainTitleText'
import MiddleImg from '@/components/company/MiddleImg'
import Checkbox from '@/components/elements/filter/Checkbox'
import NoticeList from '@/components/company/NoticeList'
import ListPaging from '@/components/elements/ListPaging'
export default {
  mixins: [mixinGlobal],
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
  .recruiting{
    padding: 0 20px;

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
      margin-bottom:50px;
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
  }
  
  @include pc-large {
    .recruiting{
      .main-title{
        margin-top:440px;
        margin-bottom:100px;
      }
      .main-title-text{ 
        margin-bottom:240px;
      }
      .middle-img{
        margin-bottom:180px;
      }
      .category-box{
        margin-bottom:70px;
      }
      .notice-contents{
        .notice-list{
          &:not(:last-child){
            margin-bottom:100px;
          }
        }
      }
      .notice-paging{
        &.l-ml-1{
          margin-left:0px !important;
        }
        .paging {
          margin-top:260px;
        }
      }
    }
    
  }
  @include pc-4k {
    .recruiting{
      .main-title{
        margin-top:600px;
        margin-bottom:120px;
      }
      .main-title-text{ 
        margin-bottom:360px;
      }
      .middle-img{
        margin-bottom:270px;
      }
      .category-box{
        .checkbox{
          &:not(:last-child){
            margin-right:20px;
          }
        }
      }
      .category-box{
        margin-bottom:120px;
      }
      .notice-contents{
        .notice-list{
          &:not(:last-child){
            margin-bottom:150px;
          }
        }
      }
      .notice-paging{
        &.l-ml-1{
          margin-left:getMargin(1) !important;
        }
        .paging {
          margin-top:380px;
        }
      }
    }
  }
  @include tablet {
    .recruiting{
      .main-title{
        margin-top:200px;
        margin-bottom:40px;
      }
      .main-title-text{ 
        margin-bottom:100px;
      }
      .middle-img{
        margin-bottom:140px;
      }
      .category-wrap{
        &.gl-5{
          width: getWidth(7) !important;
        }
        &.l-ml-3{
          margin-left: getMargin(2) !important;
        }
        .category-box{
          margin-bottom:30px;
        }
      }
      
      .notice-contents{
        .notice-list{
          &:not(:last-child){
            margin-bottom:60px;
          }
        }
      }
      .notice-paging{
        &.l-ml-1{
          margin-left:0px !important;
        }
        .paging {
          margin-top:140px;
        }
      }
    }
    
  }
  @include mobile {
    .recruiting{
      .main-title{
        margin-top:157px;
        margin-bottom:20px;
      }
      .main-title-text{ 
        margin-bottom:60px;
      }
      .middle-img{
        margin-bottom:100px;
      }

      .category-wrap{
        &.gl-5{
          width: 100% !important;
        }
        &.l-ml-3{
          margin-left: 0 !important;
        }
        .category-box{
          margin-bottom:30px;
        }
      }

      .notice-contents{
        .notice-list{
          &:not(:last-child){
            margin-bottom:60px;
          }
        }
      }
      
      .notice-paging{
        .paging {
          margin-top:107px;
        }
      }
    }
  }

</style>