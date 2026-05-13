
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U2IAPDC5.js"
    ],
    "route": "/services"
  },
  {
    "renderMode": 2,
    "route": "/bussiness"
  },
  {
    "renderMode": 2,
    "route": "/question"
  },
  {
    "renderMode": 2,
    "route": "/pqrs"
  },
  {
    "renderMode": 2,
    "route": "/testimonials"
  },
  {
    "renderMode": 2,
    "route": "/sueroterapia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NPQOGV6U.js",
      "chunk-NCFNA77J.js"
    ],
    "route": "/registro"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2LFBNRD2.js",
      "chunk-NCFNA77J.js"
    ],
    "route": "/portal"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WICBHKIH.js",
      "chunk-NCFNA77J.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3JLFRLZB.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WICBHKIH.js",
      "chunk-NCFNA77J.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WICBHKIH.js",
      "chunk-NCFNA77J.js"
    ],
    "route": "/admin/patients"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WICBHKIH.js",
      "chunk-NCFNA77J.js"
    ],
    "route": "/admin/appointments"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WICBHKIH.js",
      "chunk-NCFNA77J.js"
    ],
    "route": "/admin/availability"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WICBHKIH.js",
      "chunk-NCFNA77J.js"
    ],
    "route": "/admin/users"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WICBHKIH.js",
      "chunk-NCFNA77J.js"
    ],
    "route": "/admin/rips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WICBHKIH.js",
      "chunk-NCFNA77J.js"
    ],
    "route": "/admin/clinical"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WICBHKIH.js",
      "chunk-NCFNA77J.js"
    ],
    "route": "/admin/audit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1359, hash: 'dc56c7a36a547e1b5d53b774f7fb746f761394f9f43d2e56db8a4b286f127cf9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1899, hash: '6602af000978eef4d12f13de542961d67e46fe8610900286d82f263faccf6584', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 151986, hash: '0520e486364454aa7b2cf805853842001748a14a174621e315fdc19ad133ca24', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 141442, hash: '786c169490246d2a6b97eb31d136ded16011fd30bf2cc7e6515318cff6be76d0', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'admin/patients/index.html': {size: 17599, hash: '3564dabaa782dcf8212f5c00d37a51142d5605eebf8bc3c7e41d2f3d8cc69ad9', text: () => import('./assets-chunks/admin_patients_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17547, hash: '4c5be6687642550cb78e1bd7ad4b2e67f69df7690124d365d03eeef0c0461553', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'admin/availability/index.html': {size: 17599, hash: '3564dabaa782dcf8212f5c00d37a51142d5605eebf8bc3c7e41d2f3d8cc69ad9', text: () => import('./assets-chunks/admin_availability_index_html.mjs').then(m => m.default)},
    'admin/rips/index.html': {size: 17599, hash: '3564dabaa782dcf8212f5c00d37a51142d5605eebf8bc3c7e41d2f3d8cc69ad9', text: () => import('./assets-chunks/admin_rips_index_html.mjs').then(m => m.default)},
    'admin/audit/index.html': {size: 17599, hash: '3564dabaa782dcf8212f5c00d37a51142d5605eebf8bc3c7e41d2f3d8cc69ad9', text: () => import('./assets-chunks/admin_audit_index_html.mjs').then(m => m.default)},
    'question/index.html': {size: 84133, hash: '9a51aca3a4f76f6b719a2f9b35c17d29b410028633f0981dccfa4c6d9e8198b5', text: () => import('./assets-chunks/question_index_html.mjs').then(m => m.default)},
    'testimonials/index.html': {size: 86262, hash: '3c57310a718d8dce1555467ff4cb9d1c00efb22c46ec75099326318a3d7f32df', text: () => import('./assets-chunks/testimonials_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 17599, hash: '3564dabaa782dcf8212f5c00d37a51142d5605eebf8bc3c7e41d2f3d8cc69ad9', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'registro/index.html': {size: 18563, hash: '56524c3e480c247a6fae0f51a790066058f44778b2d0ff6a4f737a65529cf4d5', text: () => import('./assets-chunks/registro_index_html.mjs').then(m => m.default)},
    'admin/clinical/index.html': {size: 17599, hash: '3564dabaa782dcf8212f5c00d37a51142d5605eebf8bc3c7e41d2f3d8cc69ad9', text: () => import('./assets-chunks/admin_clinical_index_html.mjs').then(m => m.default)},
    'pqrs/index.html': {size: 88250, hash: 'f0f6bf3455afa47dbcd3d901225ecdf82e659c2f5cf76d68ac2d098d9e24b405', text: () => import('./assets-chunks/pqrs_index_html.mjs').then(m => m.default)},
    'admin/appointments/index.html': {size: 17599, hash: '3564dabaa782dcf8212f5c00d37a51142d5605eebf8bc3c7e41d2f3d8cc69ad9', text: () => import('./assets-chunks/admin_appointments_index_html.mjs').then(m => m.default)},
    'sueroterapia/index.html': {size: 223375, hash: '6e8b880cac001aeebfe75afc83081baf72a1e87dd176eebc51303031c76aadc2', text: () => import('./assets-chunks/sueroterapia_index_html.mjs').then(m => m.default)},
    'admin/dashboard/index.html': {size: 17599, hash: '3564dabaa782dcf8212f5c00d37a51142d5605eebf8bc3c7e41d2f3d8cc69ad9', text: () => import('./assets-chunks/admin_dashboard_index_html.mjs').then(m => m.default)},
    'bussiness/index.html': {size: 160102, hash: 'ddeb106d8171340a46b4f496d608ea6ecfb7a6aa34a93baf972712a80a7dd1f9', text: () => import('./assets-chunks/bussiness_index_html.mjs').then(m => m.default)},
    'admin/users/index.html': {size: 17599, hash: '3564dabaa782dcf8212f5c00d37a51142d5605eebf8bc3c7e41d2f3d8cc69ad9', text: () => import('./assets-chunks/admin_users_index_html.mjs').then(m => m.default)},
    'portal/index.html': {size: 17599, hash: 'ac9a04fc111c86645a47d87f79b440be4bea7548d15c02f39cfbadffb71d434d', text: () => import('./assets-chunks/portal_index_html.mjs').then(m => m.default)}
  },
};
