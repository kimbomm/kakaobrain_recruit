<template>
  <div>
    <div :class="classBind">
      <div class="menu-list">
        <ul>
          <li
            v-for="(menu, index) in menus"
            :key="`menu-${index}`"
            class="menu-item"
            @mouseenter="setIsMenuOpen(true)"
          >
            <button type="button">
              <span class="txt">{{ menu.name[language] }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <button
      :class="{ 'menu-btn': true, 'hide-target': true, 'is-hide': isScrollUp }"
      @click="setIsMenuOpen(true)"
      title="메뉴 열기"
    ></button>
    <transition name="slide">
      <div v-if="isMenuOpen" class="hide" @mouseleave="setIsMenuOpen(false)">
        <LanguageButton :isAnimation="isAnimation" />
        <div class="menu">
          <ul>
            <li
              v-for="(menu, index) in menus"
              :key="`menu-${index}`"
              class="menu-item"
            >
              <span :class="`animation ${isAnimation ? 'fade-up' : ''}`">{{
                menu.name[language]
              }}</span>
              <ul class="sub">
                <li
                  v-for="(subMenu, idx) in menu.sub"
                  :key="`sub-${idx}`"
                  :class="`sub-item animation delay-${idx} ${
                    isAnimation ? 'fade-up' : ''
                  }`"
                  @click="setIsMenuOpen(false)"
                >
                  <template v-if="subMenu.name !== 'Principle'">
                    <nuxt-link :to="subMenu.link">{{
                      subMenu.name[language]
                    }}</nuxt-link>
                  </template>
                  <template v-else>
                    <a :href="principleLink" target="_blank">{{
                      subMenu.name[language]
                    }}</a>
                  </template>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import MobMenu from '@/components/layouts/MobMenu'
  import LanguageButton from '@/components/elements/button/LanguageButton'
  export default {
    components: {
      MobMenu,
      LanguageButton
    },
    data() {
      return {
        isMenu: false,
        isAnimation: false,
        languageList: [
          { name: 'English', value: 'EN' },
          { name: 'Korean', value: 'KR' }
        ]
      }
    },
    computed: {
      ...mapState({
        menus: state => state.menus,
        language: state => state.language,
        isFilterMenuOpen: state => state.isFilterMenuOpen,
        isScrollUp: state => state.isScrollUp,
        isMenuOpen: state => state.isMenuOpen
      }),
      classBind() {
        let classList = ['menu', 'menu-outer', 'hide-target']
        if (this.isScrollUp) {
          classList.push('is-hide')
        }

        return classList.join(' ')
      }
    },
    watch: {
      isMenuOpen(val) {
        if (val) {
          this.$nuxt.$emit('scrollLock', true)
          setTimeout(() => {
            this.isAnimation = true
          }, 300)
        } else {
          this.isAnimation = false
          this.$nuxt.$emit('scrollLock', false)
        }
      }
    },
    methods: {
      ...mapMutations({
        setLanguage: 'setLanguage',
        setIsMenuOpen: 'setIsMenuOpen'
      }),
      hideMenu(value) {
        this.isMenu = value
      },
      async selectLang(lang) {
        localStorage.setItem('language', lang)
        await this.setLanguage(lang)
        await window.location.reload(true)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .menu {
    z-index: 10;
    &-item {
      display: inline-block;
      font-weight: 900;
      &:not(:last-child) {
        margin-right: 30px;
      }
      .num {
        padding-right: 6px;
        vertical-align: top;
        font-size: 12px;
        font-weight: 400;
      }
      .txt {
        font-size: 16px;
        font-weight: 900;
        font-family: 'Inter';
      }
      button {
        padding: 0px;
        background-color: rgba(0, 0, 0, 0);
        color: $gray-9;
      }
    }
    &__light {
      .menu-item button {
        color: #fff;
      }
      & + .menu-btn {
        background-image: url('~/assets/images/mob_menu-w.svg');
      }
    }
  }
  .menu-btn {
    display: none;
    width: 40px;
    height: 40px;
    background-image: url('~/assets/images/mob_menu.svg');
    background-size: cover;
    background-position: center center;
  }
  .hide {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: all 0.3s ease-in-out;
    .language {
      position: absolute;
      right: 30px;
      top: 20px;
      z-index: 10;
      cursor: pointer;
    }
    text-align: center;
    .menu {
      // position: fixed;
      // left: 0;
      // right: 0;
      // top: 0;
      padding: 90px 0 84px;
      background-color: $gray-9;
      &-item {
        text-align: left;
        vertical-align: top;
        color: $gray-0;
        font-size: 22px;
        line-height: 1.3;
        &:not(:last-child) {
          margin-right: 50px;
        }
      }
    }
    .sub {
      margin-top: 30px;
      &-item {
        font-size: 14px;
        line-height: 2.3;
        font-weight: 400;
        a {
          position: relative;
          color: $gray-0;
          &:before {
            content: '';
            position: absolute;
            display: inline-block;
            bottom: -2px;
            left: 0;
            height: 1px;
            background-color: #fff;
            width: 40%;
            opacity: 0;
            transition: all 0.3s ease-out;
          }
          &:hover {
            &:before {
              width: 100%;
              opacity: 1;
            }
          }
        }
      }
    }
  }

  @include pc-large {
    .menu-item {
      .txt {
        font-size: 22px;
      }
    }
  }
  @include pc-4k {
    .menu-item {
      .txt {
        font-size: 34px;
      }
    }
  }
  @include tablet {
    .menu.menu-outer {
      display: none;
    }
    .hide {
      display: none !important;
    }
    .menu-btn {
      display: block;
    }
  }
  @include mobile {
    .menu-btn {
      position: absolute;
      top: 13px;
      right: 15px;
      width: 30px;
      height: 30px;
    }
  }
</style>
