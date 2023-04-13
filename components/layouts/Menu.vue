<template>
  <div class="menu">
    <div :class="classBind">
      <div class="menu-list">
        <ul :class="{ 'menu-enter': isHover }">
          <li
            v-for="(menu, index) in menus"
            :key="`menu-${index}`"
            class="menu-item"
            @mouseenter=";(hoverIndex = index), (isHover = true)"
            @mouseleave="isHover = false"
          >
            <button type="button" @click="openMenu(menu, index)">
              <span class="txt">{{ menu.name[language] }}</span>
            </button>

            <ul
              v-show="clickIndex === index"
              :ref="`subMenu-${index}`"
              :id="`subMenu-${index}`"
              :class="`subMenu-${index}`"
            >
              <li v-for="subMenu in menu.sub" :key="subMenu.category">
                <a
                  v-if="subMenu.target"
                  :href="subMenu.link"
                  :target="subMenu.target"
                  @click.prevent="clickIndex = null"
                >
                  {{ subMenu.name[cookieLang] }}
                </a>
                <nuxt-link v-else exact :to="subMenu.link">
                  {{ subMenu.name[cookieLang] }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div
      :class="{
        'common-menu': true,
        'hide-target': true,
        'is-hide': isScrollUp
      }"
    >
      <a class="tag-link" href="https://www.kakaobrain.com/" target="_blank">
        <img src="@/assets/images/kakaobrain.png" />
      </a>
      <button
        :class="`btn-lang ${cookieLang}`"
        @click="selectLang(cookieLang === 'KR' ? 'EN' : 'KR')"
      ></button>
    </div>
    <button
      :class="{ 'menu-btn': true, 'hide-target': true, 'is-hide': isScrollUp }"
      @click="setIsMenuOpen(true)"
      title="메뉴 열기"
    ></button>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import MobMenu from '@/components/layouts/MobMenu'
  export default {
    components: {
      MobMenu
    },
    data() {
      return {
        isMenu: false,
        isAnimation: false,
        isHover: false,
        hoverIndex: null,
        clickIndex: null,
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
      },
      cookieLang() {
        return this.$cookies.get('brain_careers_language') || this.language
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
    created() {
      this.$nuxt.$on('closeMenu', this.closeMenu)
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
        this.$cookies.set('brain_careers_language', lang)
        await this.setLanguage(lang)
        await window.location.reload(true)
      },
      openMenu(menu, index) {
        if (index === 3) {
          //this.clickIndex = null
          window.open('https://blog.kakaobrain.com', '_blank')
        } else {
          this.clickIndex = index
          this.$nextTick(() => {
            const menu = this.$refs[`subMenu-${index}`][0]
            const subMenuPos =
              menu.parentElement.offsetLeft +
              menu.parentElement.offsetWidth / 2 +
              menu.offsetWidth / 2 +
              20
            console.log(subMenuPos, window.innerWidth)
            if (subMenuPos >= window.innerWidth) {
              menu.style.left = `calc(50% - ${
                subMenuPos - window.innerWidth + 20
              }px)`
            }
          })
        }
      },
      closeMenu() {
        if (this.clickIndex >= 0) {
          this.clickIndex = null
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .menu {
    z-index: 10;
    display: flex;
    &-item {
      position: relative;
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
      ul {
        position: absolute;
        top: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 30px;
        border-radius: 78px;
        background-color: #000;
        display: flex;
        white-space: nowrap;
        li {
          margin-right: 30px;
          &:last-child {
            margin-right: 0;
          }
        }
        a {
          font-size: 14px;
          line-height: 2.1;
          color: #fff;
          font-weight: 400;
          &.nuxt-link-active,
          &:hover {
            color: $brain-yellow;
          }
        }
      }
      #subMenu-3 {
        display: none;
      }
    }
    .menu-enter {
      .menu-item {
        button {
          color: $gray-5;
        }

        &:hover {
          button {
            color: #000;
          }
        }
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
  .common-menu {
    font-size: 0;
    margin-left: 30px;
    a {
      vertical-align: top;
    }
    button {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
      background-color: #fff;
      img {
        width: 100%;
      }
    }

    .tag-link {
      margin-right: 12px;
    }
  }

  @include pc-large {
    .menu-item {
      .txt {
        font-size: 22px;
      }
    }
    .common-menu {
      margin-left: 36px;
      button {
        width: 26px;
        height: 26px;
      }
    }
  }
  @include pc-4k {
    .menu-item {
      .txt {
        font-size: 34px;
      }
    }
    .common-menu {
      button {
        width: 40px;
        height: 40px;
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
    .common-menu {
      margin-left: 0;
      margin-right: 5px;
      button {
        width: 40px;
        height: 40px;
      }
      .tag-link {
        display: none;
      }
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
    .common-menu {
      margin-right: 35px;
      button {
        width: 30px;
        height: 30px;
      }
    }
  }
</style>
