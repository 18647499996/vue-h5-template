const release = require('./builder/webpack.release')
const dev = require('./builder/webpack.dev')
const base = require('./builder/webpack.base')

const config = process.env.NODE_ENV === 'production' ? release : dev

module.exports = Object.assign(base, config)
