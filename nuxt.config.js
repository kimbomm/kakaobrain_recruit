export default {
  publicRuntimeConfig: {
    baseURL: process.env.VUE_APP_BASE_URL,
    apiBaseURL: process.env.VUE_APP_API_BASE_URL,
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '카카오브레인 채용',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        'http-equiv': 'Content-Security-Policy',
        content: 'upgrade-insecure-requests'
      },
      { name: 'referrer', content: 'no-referrer-when-downgrade' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: '/script/bodyScrollLock.js' }]
  },
  axios: {
    credentials: true,
    baseURL: process.env.VUE_APP_API_BASE_URL
  },

  router: {
    middleware: ['middleRouter']
  },

  css: ['~assets/scss/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/axios.js' },
    { src: '@/plugins/eventbus.js' },
    { src: '@/plugins/vue-device-detector.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  dotenv: {
    filename: '.env' + process.env.NODE_ENV
  },
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/dayjs'],

  dayjs: {
    locales: ['en', 'ko'],
    defaultLocale: 'en'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    scss: [
      '~assets/scss/var.scss',
      '~assets/scss/functions.scss',
      '~assets/scss/mixins.scss'
    ]
  },
  server: {
    host: process.env.SERVER_HOST,
    port: 3012
  }
}
