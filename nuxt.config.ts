// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-09-25',
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
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32 48x48'},
        {rel: 'icon', type: 'image/png', href: '/favicon.png'},
        {rel: 'apple-touch-icon', href: '/apple-touch-icon.png'}
      ],
      script: [
        {src: 'https://www.googletagmanager.com/gtag/js?id=G-EQPHWVJHSD', async: true},
        {innerHTML: "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-EQPHWVJHSD');"}
      ]
    },
  },
  content: {
    build: {
      markdown: {
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
      }
    }
  },
  modules: ['@nuxt/content'],
  css: [
   '~/assets/css/main.scss'
]

})

