<template>
  <div class="language">
    <ul>
      <li
        v-for="(item, index) in languageList"
        :key="index"
        :class="`language-item animation delay-${index} ${
          isAnimation ? 'fade-up' : ''
        }`"
      >
        <button
          :class="item.value === language ? 'is-active' : ''"
          @click="selectLang(item.value)"
        >
          {{ item.name }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    props: {
      isAnimation: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        languageList: [
          { name: 'English', value: 'EN' },
          { name: 'Korean', value: 'KR' }
        ]
      }
    },
    computed: {
      ...mapState({
        language: state => state.language
      })
    },
    methods: {
      ...mapMutations({
        setLanguage: 'setLanguage'
      }),
      async selectLang(lang) {
        localStorage.setItem('language', lang)
        await this.setLanguage(lang)
        await window.location.reload(true)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .language {
    cursor: pointer;
    &-item {
      font-size: 12px;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      button {
        color: $gray-0;
        &.is-active,
        &:hover {
          color: $brain-yellow;
        }
      }
    }
  }
</style>
