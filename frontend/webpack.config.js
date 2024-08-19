const Webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: {
    // 共通のライブラリなどは vendor.bundle.js としてひとまとめにする
    vendor: ['vue'],
    index: './src/main/index.js',
  },
  output: {
    // ビルド成果物はルートプロジェクトの src/main/resources/static/dist に出力する
    path: path.resolve(__dirname, '../src/main/resources/static/dist'),
    // Webpack によって生成される各バンドルのファイル名 ([name]はエントリーポイントの名前で置き換え)
    filename: 'js/[name].bundle.js',
    // ビルド成果物を出力する前に、出力ディレクトリをクリーンアップする
    clean: true,
  },
  plugins: [
    // .vue ファイルをバンドルするために必要なプラグイン
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      // .vue ファイルをビルドおよびバンドルする
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // .vue ファイル内の style をビルドおよびバンドルする
      {
        test: /\.vue\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      // ESM (ECMAScript Modules) のバンドラー向けビルドを使用する
      vue$: 'vue/dist/vue.esm-bundler.js',
      // .js ファイルや .vue ファイル内で @src エイリアスを使用して src ディレクトリを参照する
      '@src': path.resolve(__dirname, 'src/'),
    },
  },
};
