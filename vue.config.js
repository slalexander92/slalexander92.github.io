const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/my-project/' : '/',
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin(
        // Absolute path to compiled SPA
        path.resolve(__dirname, 'dist'),
        // List of routes to prerender
        [ '/'],
        {
          // options
        }
      ),
    ]
  }
}