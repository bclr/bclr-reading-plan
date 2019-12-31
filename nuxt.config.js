
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'BCLR Reading Together 2020 Plan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display&display=swap', defer: true }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/b464320c92.js', crossorigin: 'anonymous', defer: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#003366' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/fullpage', ssr: false },
    { src: '~/plugins/vue-i18n', ssr: false }

    /* { src: '~/plugins/fontawesome.js' } */
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  pwa: {
    manifest: {
      name: 'BCLR Reading Together',
      lang: 'en'
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: 'https://kit.fontawesome.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: /\.pdf$/,
          handler: 'networkFirst',
          options: { cache: { name: 'pdfs' } }
        }
      ]
    }
  }
}
