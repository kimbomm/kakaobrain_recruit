import data from './data/common.json'

export const state = () => ({
  language: 'KR',
  menus: data.menus,
  footerMenu: data.footer,
  isMenuOpen: false,
  members: data.members,
  sns: data.sns,
  category: data.category,
  filter: [],
  filterList: [],
  touchDevice: false,
  isFilterMenuOpen: false,
  isScrollUp: false,
  device: {
    touch: false,
    mobile: false
  }
})
export const getters = {
  // newsCategory(state) {
  //   return state.category.news
  // }
}
export const mutations = {
  setIsFilterMenuOpen(state, payload) {
    state.isFilterMenuOpen = payload
  },
  setTouchDevice(state, payload) {
    state.device = Object.assign(state.device, payload)
  },
  setLanguage(state, payload) {
    state.language = payload
  },
  setFilter(state, payload) {
    state.filter = payload
  },
  setFilterList(state, payload) {
    switch (payload) {
      case 'innovation':
        state.filterList = state.category['innovation']
        break
    }
  },
  setIsScrollUp(state, payload) {
    state.isScrollUp = payload
  },
  setIsMenuOpen(state, payload) {
    state.isMenuOpen = payload
  }
}
export const actions = {
  changeFilterMenuOpen({ commit }, payload) {
    commit('setIsFilterMenuOpen', payload)
  },
  async getContentDetail({}, payload) {
    const res = await this.$axios.get(`/content/${payload}`)
    // console.log('RES::', res)
    return res
  },
  getFilterList({ commit }, payload) {
    commit('setFilterList', payload)
  },
  async getList() {
    return await this.$axios.get(
      'https://api.lever.co/v0/postings/leverdemo?mode=json'
    )
  },
  async getRecruitList({}, payload) {
    const res = await this.$axios.post(
      'recruit',
      {
        url: 'https://api.recruiter.co.kr/mrs2/api/getRecruitNoticeList',
        formData: {
          isPost: '1',
          isInprogress: '1',
          isContainsContents: '1'
        }
      },
      {
        withCredentials: true
      }
    )

    return res
  }
}
