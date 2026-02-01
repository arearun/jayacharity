
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/programs"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/donate"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1082, hash: 'f9d0011d8eb30569d11e731246db76dd35f8973f5bc15d86e5698278c0159152', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 943, hash: 'fb54ba65373f0be31b563058236dfaa65e8338e0fd0d25335fe9e71a43d78e69', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16975, hash: 'f6a9068190e549022d9703b2929f29f9fda1f4772803a5b308eaf191a0c38673', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20287, hash: '671236869eb1dacf2ca7b8f7af4bb0b8ab763bdd02d302bd18b7a7a830ff6214', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 16975, hash: 'f6a9068190e549022d9703b2929f29f9fda1f4772803a5b308eaf191a0c38673', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'donate/index.html': {size: 22819, hash: '14278427f87ff5a0f5fa27062f62e4032bd26ab63b5ef4d35fc3ba67136e4eb7', text: () => import('./assets-chunks/donate_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 12600, hash: 'ce13f664744de4c863899c791bc9ad90603739e71fcc752eb718bd433ffe7fc6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'programs/index.html': {size: 26240, hash: 'e71d9d1d3e10b2ba9a5c30f5e775da7b79fb7405127a7e63f88e7f8bab2335da', text: () => import('./assets-chunks/programs_index_html.mjs').then(m => m.default)},
    'styles-ZGANYAM6.css': {size: 540, hash: 's8wzLzb1efk', text: () => import('./assets-chunks/styles-ZGANYAM6_css.mjs').then(m => m.default)}
  },
};
