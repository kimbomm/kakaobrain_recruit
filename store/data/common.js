const menus = [
  {
    name: {
      KR: '영입',
      EN: 'Recruit'
    },
    link: '/',
    sub: [
      {
        name: {
          KR: '영입공고',
          EN: 'Job Openings'
        },
        link: '/recruit'
      },
      {
        name: {
          KR: '영입절차',
          EN: 'Recruitment process'
        },
        link: '/recruit/process'
      },
      {
        name: {
          KR: 'FAQ',
          EN: 'FAQ'
        },
        link: '/faq'
      },
      {
        name: {
          KR: 'External Referral Program',
          EN: ''
        },
        link: '/recommend'
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
    sub: [
      {
        name: {
          KR: '우리의 일하는 방식',
          EN: 'How we work'
        },
        link: '/company'
      },
      {
        name: {
          KR: '인턴 체험스토리',
          EN: 'Internship Experiences'
        },
        link: '/company/intern'
      },
      {
        name: {
          KR: '사이버 윤리',
          EN: 'Cyber ethics'
        },
        link: '/company/ethics'
      },
      {
        name: {
          KR: '찾아오시는 길',
          EN: 'Maps & Directions'
        },
        link: '/company/map'
      }
    ]
  },
  {
    name: {
      KR: '복지소개',
      EN: 'Welfare'
    },
    link: '/welfare',
    alarm: '',
    sub: [
      {
        name: {
          KR: '원격근무와 유연근무제',
          EN: 'Teleworking&Flexible Working'
        },
        link: '/welfare'
      },
      {
        name: {
          KR: '복지혜택',
          EN: 'Benefits'
        },
        link: '/welfare/benefits'
      }
    ]
  }
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
