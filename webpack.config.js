const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) =>{
  const outputPath = argv.mode === 'production'? path.join(__dirname, 'build') : path.join(__dirname, 'dist')

  return {
    mode: argv.mode,
    devtool: 'source-map',
    entry: path.join(__dirname, './src/index.tsx'),
    output: {
      path: outputPath,
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: outputPath,
      publicPath: '/',
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
        inject: 'body'
      })
    ],
    module:{
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: ['awesome-typescript-loader']
        },
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
  }
}