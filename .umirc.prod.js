// https://umijs.org/config/
import { resolve } from 'path'
const fs = require('fs')
const path = require('path')
const lessToJs = require('less-vars-to-js')

// how to speed compile: https://umijs.org/guide/boost-compile-speed
export default {
  // IMPORTANT! change next line to yours or delete. And hide in dev
  publicPath: 'https://vlhb-admin.vercel.app/',
  // Webpack Configuration
  proxy: {
    '/api/v1/weather': {
      target: 'https://api.seniverse.com/',
      changeOrigin: true,
      pathRewrite: { '^/api/v1/weather': '/v3/weather' },
    },
    '/api/v1': {
      target: 'https://admin-key-manager.herokuapp.com/',
      changeOrigin: true,
      pathRewrite: { '^/api/v1': '' },
    },
  },
}
