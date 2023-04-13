const menus = [
  {
    name: {
      KR: '영입',
      EN: 'Careers'
    },
    link: '/',
    target: '',
    sub: [
      {
        name: {
          KR: '영입공고',
          EN: 'Jobs'
        },
        link: '/careers',
          target: ''
      },
      {
        name: {
          KR: '영입절차',
          EN: 'Process'
        },
        link: '/careers/process',
        target: ''
      },
      {
        name: {
          KR: 'FAQ',
          EN: 'FAQ'
        },
        link: '/faq',
          target: ''
      },
      {
        name: {
          KR: '사외 추천 제도',
          EN: 'External Referral Program'
        },
        link: '/referral',
          target: ''
      }
    ]
  },
  {
    name: {
      KR: '회사소개',
      EN: 'Company'
    },
    link: '/company',
    alarm: '',
    target: '',
    sub: [
      {
        name: {
          KR: '우리의 일하는 방식',
          EN: 'How We Work'
        },
        link: '/company',
          target: ''
      },
      {
        name: {
          KR: '인턴 체험스토리',
          EN: 'Internship Experiences'
        },
        link: '/company/intern',
          target: ''
      },
      {
        name: {
          KR: '사이버 윤리',
          EN: 'Cyber Ethics'
        },
        link: '/company/ethics',
          target: ''
      },
      {
        name: {
          KR: '찾아오시는 길',
          EN: 'Maps & Directions'
        },
        link: '/company/map',
          target: ''
      }
    ]
  },
  {
    name: {
      KR: '복지소개',
      EN: 'Life At Kakao Brain'
    },
    link: '/benefits',
    alarm: '',
    target: '',
    sub: [
      {
        name: {
          KR: '원격근무와 유연근무제',
          EN: 'Remote Work'
        },
        link: '/benefits',
           target: '',
      },
      {
        name: {
          KR: '복지혜택',
          EN: 'Benefits'
        },
        link: '/benefits/benefits',
          target: '',
      }
    ]
  },
  {
    name: {
      KR: 'Blog',
      EN: 'Blog',
    },
    link: 'https://blog.kakaobrain.com',
    target: '_blank'



  },


]

const footer = [
  {
    name: {
      KR: '오시는 길',
      EN: 'Maps & Directions '
    },
    link: '/company/map'
  },
  {
    name: {
      KR: '이메일무단수집거부',
      EN: 'Unaccept to Share  EmailAddress'
    },
    link: '/privacy/email'
  },
  {
    name: {
      KR: '개인정보처리방침',
      EN: 'Privacy Policy'
    },
    link: '/privacy'
  }
]

const sns = [
  { name: 'facebook', link: 'https://www.facebook.com/kakaobrain' },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/company/kakaobrain/'
  },
  { name: 'github', link: 'https://github.com/kakaobrain' },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/channel/UCdfmJNL-t_PdVHyn__tGrpg'
  }
]

export default {
  menus,
  footer,
  sns
}
