<template>
  <div class="recruiting">
    <BreadCrumb :data="breadcrumb[language]" :full="true" />
    <MainTitle :title="data.MainTitle" />
    <MainTitleText :text="data.MainTitleText" />
    <MiddleImg image="middle-recruit.jpg" />

    <div class="category-wrap gl-5 l-ml-3">
      <div class="category-box">
        <Checkbox
          v-for="(item, index) in filter"
          :key="index"
          :checkboxId="`checkbox_${index}`"
          :checkboxValue="item.value"
          :checkboxText="item.text"
          :isChecked="item.isChecked"
          @change="onChange"
        />
      </div>

      <div class="notice-contents">
        <ul>
          <li
            class="notice-list"
            v-for="(data, index) in recruitList"
            :key="index"
          >
            <NoticeList :data="data" />
          </li>
        </ul>
      </div>
    </div>
    <div class="notice-paging l-ml-1">
      <ListPaging
        :total="total"
        :offset="pageData.offset"
        :limit="pageData.limit"
        @onChange="onPagingChange"
      />
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
  import MainTitle from '@/components/company/MainTitle'
  import MainTitleText from '@/components/company/MainTitleText'
  import MiddleImg from '@/components/company/MiddleImg'
  import Checkbox from '@/components/elements/filter/Checkbox'
  import NoticeList from '@/components/company/NoticeList'
  import ListPaging from '@/components/elements/ListPaging'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    mixins: [mixinGlobal],
    name: 'index',
    components: {
      MainTitle,
      MainTitleText,
      MiddleImg,
      Checkbox,
      NoticeList,
      ListPaging,
      BreadCrumb
    },
    data() {
      return {
        breadcrumb: {
          KR: [
            { text: '영입', sub: 'sub', link: '' },
            { text: '영입공고', sub: '', link: '' }
          ],
          EN: [
            { text: 'Recruit', sub: 'sub', link: '' },
            { text: 'Job Openings', sub: '', link: '' }
          ]
        },
        pageData: {
          limit: 10,
          offset: 0
        },
        total: 0,
        list: [],
        filter: [{ value: 'all', text: 'All', isChecked: true }],
        recruitList: []
      }
    },
    computed: {
      ...mapState({
        language: state => state.language,
        recruitData: state => state.translation.RECRUIT.home
      }),
      data() {
        return this.recruitData[this.language]
      },
      checkedList() {
        let checked = []
        this.filter.forEach(item => {
          if (item.isChecked) checked.push(item.value)
        })
        return checked
      }
    },
    async created() {
      const res = await this.getList({
        group: 'department'
      })
      this.list = res.data.map(item => {
        return {
          title: item.title ? item.title : 'etc',
          postings: item.postings
        }
      })
      await this.setCategory()
      await this.fetchList()
    },
    methods: {
      ...mapActions({
        getRecruitList: 'getRecruitList',
        getList: 'getList'
      }),
      async setCategory() {
        const category = await this.list.map(list => list.title)
        await category.forEach(item => {
          this.filter.push({
            value: item,
            text: item,
            isChecked: false
          })
        })
      },
      async onChange(data) {
        await this.filter.forEach(item => {
          if (data.value === 'all' && data.isChecked) {
            item.isChecked = item.value === data.value ? true : false
          } else if (data.value !== 'all' && data.isChecked) {
            if (item.value === data.value) item.isChecked = data.isChecked
            if (item.value === 'all' && item.isChecked) item.isChecked = false
          } else {
            if (item.value === data.value) item.isChecked = data.isChecked
          }
        })
        this.pageData.offset = 0
        await this.fetchList()
      },
      async fetchList() {
        if (this.checkedList.includes('all')) {
          let list = []
          this.list.forEach(item => {
            list = list.concat([], item.postings)
          })
          this.total = list.length
          this.recruitList = list.splice(
            this.pageData.offset,
            this.pageData.limit
          )
        } else {
          let list = []
          this.list.forEach(item => {
            if (this.checkedList.includes(item.title)) {
              list = list.concat(item.postings)
            }
          })
          this.total = list.length
          this.recruitList = [
            ...list.splice(this.pageData.offset, this.pageData.limit)
          ]
        }
      },
      async onPagingChange(val) {
        this.pageData.offset = val * this.pageData.limit
        await this.fetchList()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .recruiting {
    padding: 320px 20px 0;

    .main-title {
      margin-bottom: 60px;
    }
    .main-title-text {
      margin-bottom: 200px;
    }
    .middle-img {
      margin-bottom: 140px;
    }
    .category-box {
      margin-bottom: 50px;
    }
    .notice-paging {
      margin-top: 200px;
    }
    .category-box {
      .checkbox {
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }
    .notice-contents {
      .notice-list {
        &:not(:last-child) {
          margin-bottom: 80px;
        }
      }
    }
  }

  @include pc-large {
    .recruiting {
      padding-top: 440px;
      .main-title {
        margin-bottom: 100px;
      }
      .main-title-text {
        margin-bottom: 240px;
      }
      .middle-img {
        margin-bottom: 180px;
      }
      .category-box {
        margin-bottom: 70px;
      }
      .notice-contents {
        .notice-list {
          &:not(:last-child) {
            margin-bottom: 100px;
          }
        }
      }
      .notice-paging {
        margin-top: 260px;
        &.l-ml-1 {
          margin-left: 0px !important;
        }
      }
    }
  }
  @include pc-4k {
    .recruiting {
      padding-top: 600px;
      .main-title {
        margin-bottom: 120px;
      }
      .main-title-text {
        margin-bottom: 360px;
      }
      .middle-img {
        margin-bottom: 270px;
      }
      .category-box {
        .checkbox {
          &:not(:last-child) {
            margin-right: 20px;
          }
        }
      }
      .category-box {
        margin-bottom: 120px;
      }
      .notice-contents {
        .notice-list {
          &:not(:last-child) {
            margin-bottom: 150px;
          }
        }
      }
      .notice-paging {
        margin-top: 380px;
        &.l-ml-1 {
          margin-left: getMargin(1) !important;
        }
      }
    }
  }
  @include tablet {
    .recruiting {
      padding-top: 200px;
      .main-title {
        margin-bottom: 40px;
      }
      .main-title-text {
        margin-bottom: 100px;
      }
      .middle-img {
        margin-bottom: 140px;
      }
      .category-wrap {
        &.gl-5 {
          width: getWidth(7) !important;
        }
        &.l-ml-3 {
          margin-left: getMargin(2) !important;
        }
        .category-box {
          margin-bottom: 30px;
        }
      }

      .notice-contents {
        .notice-list {
          &:not(:last-child) {
            margin-bottom: 60px;
          }
        }
      }
      .notice-paging {
        margin-top: 140px;
        &.l-ml-1 {
          margin-left: 0px !important;
        }
      }
    }
  }
  @include mobile {
    .recruiting {
      padding-top: 76px;
      .main-title {
        margin-top: 60px;
        margin-bottom: 20px;
      }
      .main-title-text {
        margin-bottom: 60px;
      }
      .middle-img {
        margin-bottom: 100px;
      }

      .category-wrap {
        &.gl-5 {
          width: 100% !important;
        }
        &.l-ml-3 {
          margin-left: 0 !important;
        }
        .category-box {
          margin-bottom: 30px;
        }
      }

      .notice-contents {
        .notice-list {
          &:not(:last-child) {
            margin-bottom: 60px;
          }
        }
      }

      .notice-paging {
        margin-top: 107px;
      }
    }
  }
</style>
