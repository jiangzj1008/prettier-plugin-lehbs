const path = require('path');
const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.resolve(__dirname, 'src/plugin', 'index.js'),
  mode: PRODUCTION ? 'production' : 'development',
  devtool: PRODUCTION ? undefined : 'inline-source-map',
  output: {
    filename: 'standalone.js',
    path: __dirname,
    globalObject: 'this',
    library: {
      name: 'prettierPluginLehbs',
      type: 'umd',
    },
  },
  externals: {
    prettier: {
      commonjs: 'prettier',
      commonjs2: 'prettier',
      amd: 'prettier/standalone',
      root: 'prettier',
    },
  },
  optimization: {
    minimize: PRODUCTION ? true : false,
  },
  node: {
    __dirname: true,
  },
};
