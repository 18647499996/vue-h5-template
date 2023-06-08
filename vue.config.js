const release = require('./builder/webpack.release')
const base = require('./builder/webpack.base')
const dev = require('./builder/webpack.dev')

const config = process.env.NODE_ENV === 'production' ? release : dev

module.exports = Object.assign(base, config)
