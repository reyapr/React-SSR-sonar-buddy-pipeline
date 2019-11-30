const path = require('path')

const config = (env, argv) =>{
  const outputPath = argv.mode === 'production'? path.join(__dirname, 'prod') : path.join(__dirname, 'public')

  return {
    mode: argv.mode,
    devtool: 'source-map',
    entry: path.join(__dirname, './src/client/index.tsx'),
    output: {
      path: outputPath,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module:{
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
        }
      ]
    },
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
  }
}

module.exports = config