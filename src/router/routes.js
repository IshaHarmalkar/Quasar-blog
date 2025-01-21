const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue'), name: 'home' },
      {
        path: 'admin', // New route path for the admin page
        component: () => import('pages/AdminPage.vue'), // Path to your admin page component
        name: 'Admin',
      },
      {
        path: 'create', // New route for the BlogEditor
        component: () => import('pages/BlogEditor.vue'), // Path to the BlogEditor component
        name: 'create', // Named route for easier navigation
      },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'), // Use custom layout for login
    children: [
      {
        path: '', // Empty path to load the login page directly
        component: () => import('pages/LoginPage.vue'),
        name: 'login',
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
