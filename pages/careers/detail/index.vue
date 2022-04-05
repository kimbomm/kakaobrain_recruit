<template>
  <div class="detail">
    <BreadCrumb :data="breadcrumb[language]" :full="true" />
    <div v-if="detail" class="detail-content">
      <div class="detail-header">
        <div class="department">
          {{ detail.categories.department.toUpperCase() }}
        </div>
        <div class="team">
          {{ detail.categories.team.toUpperCase() }}
          /
          {{ detail.text }}
        </div>
        <div class="info">
          {{ detail.categories.location }} / {{ detail.categories.commitment }}
        </div>
      </div>
      <template v-if="step === 0">
        <div class="detail-html" v-html="detail.description"></div>
        <div v-for="(list, index) in detail.lists" :key="index" class="lists">
          <div class="detail-title">
            <b>{{ list.text }}</b>
          </div>
          <ul class="detail-list" v-html="list.content"></ul>
        </div>
        <div class="detail-html" v-html="detail.additional"></div>
      </template>
      <button class="apply" @click="goApply">APPLY FOR THIS JOB</button>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    mixins: [mixinGlobal],
    components: {
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
            { text: 'Careers', sub: 'sub', link: '' },
            { text: 'Job Openings', sub: '', link: '' }
          ]
        },
        detail: null,
        step: 0
      }
    },
    computed: {
      ...mapState(['language'])
    },
    async mounted() {
      await this.init()
    },
    methods: {
      ...mapActions({
        getDetail: 'getDetail',
        postList: 'postList'
      }),
      async init() {
        const res = await this.postList({
          method: 'GET',
          url: `https://api.lever.co/v0/postings/kakaobrain/${this.$route.query.dataId}`,
          formData: {}
        })
        if (res) {
          this.detail = res.data
          this.setBreadcrumb()
        } else {
          window.location = '/'
        }
      },
      goApply() {
        window.open(`${this.detail.hostedUrl}/apply`)
      },
      setBreadcrumb() {
        const keys = Object.keys(this.breadcrumb)
        keys.forEach(key => {
          this.breadcrumb[key].push({
            text: this.detail.categories.department,
            sub: '',
            link: ''
          })
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .detail {
    padding-top: 200px;
    position: relative;
    &-content /deep/ {
      width: getWidth(6);
      margin: 0 auto;
      .detail-html {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 24px;
      }
      b {
        display: block;
        line-height: 1.3;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .lists {
        margin-bottom: 24px;
        > b {
          margin-bottom: 20px;
        }
        & + .detail-html {
          margin-bottom: 0;
        }
      }
      .detail-list {
        > div {
          height: 24px;
        }
        li {
          font-size: 16px;
          line-height: 1.5;
          padding-left: 24px;
          position: relative;
          &:before {
            content: '';
            position: absolute;
            left: 8px;
            top: 12px;
            display: inline-block;
            width: 3px;
            height: 3px;
            background-color: #000;
            border-radius: 50%;
          }
          b {
            font-size: inherit;
            line-height: inherit;
            font-weight: 400;
            margin-bottom: 0;
          }
        }
      }
      .postings-link {
        text-decoration: underline;
      }
    }
    &-header {
      margin-bottom: 200px;
      .department {
        font-size: 20px;
        line-height: 1.3;
      }
      .team {
        margin-top: 30px;
        font-size: 40px;
        line-height: 1.2;
        font-weight: 900;
      }
      .info {
        margin-top: 20px;
        font-size: 16px;
        line-height: 1.3;
        color: $gray-5;
      }
    }
    .apply {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 24px;
      height: 66px;
      position: fixed;
      bottom: 60px;
      left: 20px;
      border-radius: 100px;
      background-color: #000;
      font: inherit;
      font-weight: 400;
      font-size: 20px;
      color: #fff;
      line-height: 1.3;
      font-style: italic;
    }
  }
  @include pc-large {
    .detail {
      padding-top: 300px;
      &-content /deep/ {
        .detail-html {
          font-size: 20px;
        }
      }
      &-header {
        .department {
          font-size: 26px;
        }
        .team {
          font-size: 52px;
        }
        .info {
          font-size: 20px;
        }
      }
      .apply {
        font-size: 24px;
      }
    }
  }
  @include pc-4k {
    .detail {
      padding-top: 500px;
      &-content /deep/ {
        .detail-html {
          font-size: 30px;
        }
      }
      &-header {
        margin-bottom: 300px;
        .department {
          font-size: 36px;
        }
        .team {
          font-size: 80px;
          margin-top: 60px;
        }
        .info {
          font-size: 30px;
          margin-top: 30px;
        }
      }
      .apply {
        font-size: 34px;
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .detail {
      .apply {
        font-size: 16px;
        padding: 0 20px;
      }
    }
  }
  @include tablet {
    .detail {
      padding-top: 170px;
      &-content /deep/ {
        .detail-html {
          font-size: 14px;
        }
      }
      &-header {
        margin-bottom: 300px;
        .department {
          font-size: 18px;
        }
        .team {
          font-size: 30px;
          margin-top: 20px;
        }
        .info {
          font-size: 14px;
          margin-top: 10px;
        }
      }
      .apply {
        height: 46px;
        font-size: 14px;
        padding: 0 18.5px;
      }
    }
  }
  @include mobile {
    .detail {
      padding: 76px 20px 0;
      &-content /deep/ {
        width: 100%;
        .detail-html {
          font-size: 16px;
        }
      }
      &-header {
        margin: 60px 0 100px;
        .department {
          font-size: 16px;
        }
        .team {
          font-size: 24px;
        }
        .info {
          font-size: 16px;
        }
      }
      .apply {
        bottom: 20px;
        font-size: 16px;
        padding: 0 20px;
      }
    }
  }
</style>
