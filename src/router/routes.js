
const routes = [
  {
    path: '/',
    component: () => import('layouts/base'),
    children: [
      { path: '', component: () => import('pages/Index') }
    ]
  },
  {
    path: '/welcome',
    component: () => import('layouts/base'),
    children: [
      { path: '', component: () => import('pages/welcome') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
