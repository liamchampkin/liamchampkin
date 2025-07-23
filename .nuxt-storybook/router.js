import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4881d364 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _99004ebc = () => interopDefault(import('../pages/All.vue' /* webpackChunkName: "pages/All" */))
const _4523708f = () => interopDefault(import('../pages/Articles/index.vue' /* webpackChunkName: "pages/Articles/index" */))
const _525cba5c = () => interopDefault(import('../pages/Asia/index.vue' /* webpackChunkName: "pages/Asia/index" */))
const _69afe004 = () => interopDefault(import('../pages/Australia/index.vue' /* webpackChunkName: "pages/Australia/index" */))
const _a2c6e918 = () => interopDefault(import('../pages/Europe/index.vue' /* webpackChunkName: "pages/Europe/index" */))
const _ba5c5e3c = () => interopDefault(import('../pages/MixTape/index.vue' /* webpackChunkName: "pages/MixTape/index" */))
const _6c80e485 = () => interopDefault(import('../pages/Notes/index.vue' /* webpackChunkName: "pages/Notes/index" */))
const _436ccf47 = () => interopDefault(import('../pages/Articles/_slug.vue' /* webpackChunkName: "pages/Articles/_slug" */))
const _50a61914 = () => interopDefault(import('../pages/Asia/_slug.vue' /* webpackChunkName: "pages/Asia/_slug" */))
const _67f93ebc = () => interopDefault(import('../pages/Australia/_slug.vue' /* webpackChunkName: "pages/Australia/_slug" */))
const _a6342ba8 = () => interopDefault(import('../pages/Europe/_slug.vue' /* webpackChunkName: "pages/Europe/_slug" */))
const _bdc9a0cc = () => interopDefault(import('../pages/MixTape/_slug.vue' /* webpackChunkName: "pages/MixTape/_slug" */))
const _6aca433d = () => interopDefault(import('../pages/Notes/_slug.vue' /* webpackChunkName: "pages/Notes/_slug" */))
const _f7f65d9a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _fb63a02a = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _4881d364,
    name: "About"
  }, {
    path: "/All",
    component: _99004ebc,
    name: "All"
  }, {
    path: "/Articles",
    component: _4523708f,
    name: "Articles"
  }, {
    path: "/Asia",
    component: _525cba5c,
    name: "Asia"
  }, {
    path: "/Australia",
    component: _69afe004,
    name: "Australia"
  }, {
    path: "/Europe",
    component: _a2c6e918,
    name: "Europe"
  }, {
    path: "/MixTape",
    component: _ba5c5e3c,
    name: "MixTape"
  }, {
    path: "/Notes",
    component: _6c80e485,
    name: "Notes"
  }, {
    path: "/Articles/:slug",
    component: _436ccf47,
    name: "Articles-slug"
  }, {
    path: "/Asia/:slug",
    component: _50a61914,
    name: "Asia-slug"
  }, {
    path: "/Australia/:slug",
    component: _67f93ebc,
    name: "Australia-slug"
  }, {
    path: "/Europe/:slug",
    component: _a6342ba8,
    name: "Europe-slug"
  }, {
    path: "/MixTape/:slug",
    component: _bdc9a0cc,
    name: "MixTape-slug"
  }, {
    path: "/Notes/:slug",
    component: _6aca433d,
    name: "Notes-slug"
  }, {
    path: "/",
    component: _f7f65d9a,
    name: "index"
  }, {
    path: "/:slug",
    component: _fb63a02a,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
