const siteURL = "https://www.lancejackson.co.nz/headless_wordpress"
const FriendlyErrorsPlugin = require('friendly-errors-plugin');

import axios from "axios"

let dynamicRoutes = () => {
  const routes = axios
    .get(`${siteURL}/wp-json/wp/v2/casestudies/`)
    .then(res => {
      return res.data.map(post => `/blog/${post.slug}`)
    })
  console.log(routes)
  return routes
}

export default {
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://use.typekit.net/udd6esl.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/global.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/posts.server.js",
    "~/plugins/dateformat.js"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/style-resources", 
    "@nuxtjs/gtm",
    'nuxt-gsap-module',
    '@nuxtjs/vuetify',
    '@nuxt/image'
  ],
    /*
   ** Middleware to handle endpoints
   */
  // serverMiddleware: {
  //   '/_ipx': '~/middleware/ipx.js'
  // },
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
  },
    /*
   ** NuxtImg Module
   */
  image: {
    domains: ['localhost','lancejackson.co.nz'],
    screens: {
      sm: 640,
      md: 1024,
      xl: 1280
    },
  },
  /*
  ** Do not import actual styles. Use this module only to import variables, mixins, functions (et cetera) as they won't exist in the actual build. Importing actual styles will include them in every component and will also make your build/HMR magnitudes slower. Do not do this!
  Doc: https://github.com/nuxt-community/style-resources-module
  */
  styleResources: {
    // sass: [],
    scss: [
      "@assets/scss/_mixins.scss",
      "@assets/scss/_variables.scss",
      "@assets/scss/_typography.scss"
    ],
    // less: [],
    // stylus: []
  },
  generate: {
    routes: dynamicRoutes
  },
  /** Google Tag Manager Options
   *  Doc: https://github.com/nuxt-community/gtm-module
   */
  gtm: {
    id: "GTM-XXXXXXX",
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    '@nuxtjs/axios',
  ],
  /** Sitemap options
   * Doc: https://www.npmjs.com/package/@nuxtjs/sitemap
   */
  sitemap: {
    hostname: "https://www.lancejackson.co.nz",
  },
  /** Robots options
   * Doc: https://www.npmjs.com/package/@nuxtjs/robots
   */
  robots: {
    /* module options */
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [
      "gsap"
    ],
    extend(config, {}) {
      config.node = {
          fs: 'empty'
      }
      plugins: [
        new FriendlyErrorsPlugin(),
      ]
    }
  }
}
