import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2aaeca9c = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _0e41659e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _96a6866e = () => interopDefault(import('../pages/_postId/index.vue' /* webpackChunkName: "pages/_postId/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2aaeca9c,
    name: "about"
  }, {
    path: "/",
    component: _0e41659e,
    name: "index"
  }, {
    path: "/:postId",
    component: _96a6866e,
    name: "postId"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
