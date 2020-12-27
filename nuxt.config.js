export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-amp-tailwind',
    meta: [
      // use charset and viewport inject from AMP MODULE
      // { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/jsonld'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-purgecss',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },
  purgeCSS: {
    mode: 'postcss',
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/amp',
  ],
  amp: {
    origin: process.env.ORIGIN_URL || 'http://localhost:3000',
    mode: 'hybrid',
    // disable validator and use chrome extension https://chrome.google.com/webstore/detail/amp-validator/nmoffdblmcmgeicmolmhobpoocbbmknc?hl=en
    validator: false,
    removeInlineStyles: false,
  },
  googleFonts: {
    families: {
      Poppins: {
        wght: [400, 500, 600, 700],
      },
    },
    display: 'swap',
    download: false,
    // This option injects useStylesheet into the head of your project which is recommended for projects that use the AMP module that removes scripts.
    useStylesheet: true,
  },
  // Disable loading bar since AMP will not use client side navigation
  loading: false,
  render: {
    // Disable resourceHints since we don't load any scripts for AMP
    resourceHints: false,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
