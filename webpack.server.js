const path = require('path')

const config = {
  target: 'node',
  entry: './src/index.tsx',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build') 
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

module.exports = config