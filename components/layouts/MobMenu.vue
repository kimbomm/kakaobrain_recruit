<template>
  <transition name="slide">
    <div v-if="isMenuOpen" class="mob-menu">
      <div class="mob-menu-top">
        <img src="@/assets/images/logo-w.png" />
        <button class="menu-btn" @click="onClose">
          <img
            src="@/assets/images/mob_menu_close.png"
            alt="모바일 메뉴 닫기 이미지"
          />
        </button>
      </div>
      <div class="mob-menu-content">
        <ul class="menu-list">
          <li
            v-for="(menu, index) in menus"
            :key="`menu-${index}`"
            :class="`animation delay-${index} ${isAnimation ? 'fade-up' : ''}`"
          >
            <button
              :class="`${
                active.includes(index) ? 'is-active ' : ''
              }menu-toggle`"
              @click="onClick(index)"
            >
              <span class="menu-name">{{ menu.name[language] }}</span>
            </button>
            <ul class="sub-menu">
              <li
                v-for="(subMenu, idx) in menu.sub"
                :key="`sub-${idx}`"
                @click="onClose"
              >
                <nuxt-link :to="subMenu.link">{{
                  subMenu.name[language]
                }}</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>

        <div class="etc-menu">
          <a
            class="mob-link"
            href="https://careers.kakaobrain.com/"
            target="_blank"
          >
            <img src="@/assets/images/kakaobrain_mob.png" />
          </a>
        </div>
        <MobMenuFooter @onClose="onClose" />
      </div>
    </div>
  </transition>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import Icon from '@/components/elements/Icon'
  import MobMenuFooter from '@/components/layouts/MobMenuFooter'
  export default {
    components: {
      Icon,
      MobMenuFooter
    },
    data() {
      return {
        active: [],
        isAnimation: false
      }
    },
    computed: {
      ...mapState({
        menus: state => state.menus,
        language: state => state.language,
        isMenuOpen: state => state.isMenuOpen
      })
    },
    mounted() {
      setTimeout(() => {
        this.isAnimation = true
      }, 300)
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      this.isAnimation = false
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      ...mapMutations(['setIsMenuOpen']),
      onScroll(e) {
        e.preventDefault()
        e.stopPropagation()
        return false
      },
      onClose() {
        this.setIsMenuOpen(false)
      },
      onClick(idx) {
        this.active.includes(idx)
          ? (this.active = this.active.filter(item => item != idx))
          : this.active.push(idx)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .mob-menu {
    transition: all 0.3s ease-in-out;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background-color: #000;
    color: #fff;
    &-top {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 16px 20px 0 20px;
      img {
        height: 21px;
      }
      button {
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    &-content {
      margin-top: 46px;
      height: calc(100% - 46px);
      padding: 0 20px 50px 20px;
      margin-left: getMargin(2);
      overflow-y: auto;
    }
  }
  .menu-list {
    margin-top: 140px;
    > li {
      margin-top: 60px;
      &:first-child {
        margin-top: 0;
      }
      &:last-child .sub-menu {
        padding-bottom: 0px;
      }
    }
  }
  .sub-menu {
    display: none;
    margin-top: 25px;
    padding-bottom: 40px;
    li {
      font-size: 20px;
      line-height: 1.3;
      font-weight: 400;
      height: 50px;
      display: flex;
      align-items: center;
      a {
        color: #fff;
      }
    }
  }

  .menu-toggle {
    color: #fff;
    &:after {
      content: '▼';
      transform: rotate(180deg);
      margin-left: 10px;
    }
    &.is-active {
      &:after {
        content: '▲';
      }
      & + .sub-menu {
        display: block;
      }
    }
  }

  .etc-menu {
    margin-top: 60px;
  }
  .menu-name {
    font-size: 24px;
    font-weight: 900;
  }
  .menu-num {
    font-size: 18px;
    font-weight: 300;
    position: relative;
    top: -7px;
    left: -2px;
  }
  @include tablet {
    .mob-menu {
      display: block;
    }
    .language {
      margin-top: 110px;
    }
  }
  @include mobile {
    .mob-menu {
      &-top {
        align-items: center;
        padding: 0 15px 0 20px;
        height: 56px;
        span {
          font-size: 18px;
        }
        button {
          width: 30px;
          height: 30px;
        }
      }
      &-content {
        margin-top: 56px;
        height: calc(100% - 56px);
        margin-left: getMargin(1);
      }
    }
    .sub-menu {
      margin-top: 25px;
    }
    .menu-list {
      margin-top: 116px;
    }
    .language {
      margin-top: 60px;
    }
  }
</style>
