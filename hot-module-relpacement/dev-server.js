const webPackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.config')

const options = {
  hot: true,
  host: 'localhost'
}

webPackDevServer.addDevServerEntrypoints(config, options)

const compiler = webpack(config)

const server = new webPackDevServer(compiler, options)

server.listen(1234, 'localhost', () => {
  console.log('dev server run on port 1234')
})