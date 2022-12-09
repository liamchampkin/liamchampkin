// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: 'Liam Champkin',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},


      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]
    },
  },
  content: {
    highlight: {
      // OR
      theme: {
        // Default theme (same as single string)
        default: 'github-dark',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
        light: 'github-light',
      }
    }
  },
  modules: ['@nuxt/content'],
  css: [
   '~/assets/css/main.scss'
]

})

