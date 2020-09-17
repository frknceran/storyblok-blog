export { default as Logo } from '../../components/Logo.vue'
export { default as PostPreview } from '../../components/Blog/PostPreview.vue'
export { default as TheHeader } from '../../components/TheHeader/TheHeader.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyPostPreview = import('../../components/Blog/PostPreview.vue' /* webpackChunkName: "components/Blog/PostPreview" */).then(c => c.default || c)
export const LazyTheHeader = import('../../components/TheHeader/TheHeader.vue' /* webpackChunkName: "components/TheHeader/TheHeader" */).then(c => c.default || c)
