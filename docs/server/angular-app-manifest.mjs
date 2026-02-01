
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/jayacharity/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/jayacharity"
  },
  {
    "renderMode": 2,
    "route": "/jayacharity/home"
  },
  {
    "renderMode": 2,
    "route": "/jayacharity/about"
  },
  {
    "renderMode": 2,
    "route": "/jayacharity/programs"
  },
  {
    "renderMode": 2,
    "route": "/jayacharity/contact"
  },
  {
    "renderMode": 2,
    "route": "/jayacharity/donate"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1093, hash: '1c065ab27544c0d791fee127e19a71d79ec6f9df59ca4d9f8e3bd6c9411e4eeb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: '3c67ef02703854c02678ad7a8709250d3fa98bc8a899a94289ed4b160aa98c8d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20353, hash: '245345d3fc35b9d58bc315a5732a7990883935ebd4eed716f23acba9ee109fec', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 17041, hash: '459fd7d4a81e1e805e2741104a25e86408e89b4ac469a8f064528e060fe0aacc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 17041, hash: '459fd7d4a81e1e805e2741104a25e86408e89b4ac469a8f064528e060fe0aacc', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'donate/index.html': {size: 22885, hash: '3c810d865f4714b580c9d029fe9d721b0e01aaa7024fa22fb9f65d88d91010c2', text: () => import('./assets-chunks/donate_index_html.mjs').then(m => m.default)},
    'programs/index.html': {size: 26306, hash: '696f595e3b10df3980d5c2158eb35798b4630bfe62e5ac7b006ca701997450f4', text: () => import('./assets-chunks/programs_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 12666, hash: '94a0af91dc6e0929aa2b6a07d0aa767acff3d815105295dbf1d1411a4f9d8949', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-ZGANYAM6.css': {size: 540, hash: 's8wzLzb1efk', text: () => import('./assets-chunks/styles-ZGANYAM6_css.mjs').then(m => m.default)}
  },
};
