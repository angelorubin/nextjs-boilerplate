const withPWA = require('next-pwa')
require('dotenv').config()

const isProd = process.env.ENVIRONMENT === 'production'

module.exports = withPWA({
  // other next config
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
