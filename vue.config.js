 module.exports = {

    // 基本路径 baseURL已经过时
    publicPath: './', 
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // compiler: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置


    // webpack-dev-server 相关配置
    devServer: {
     open: process.platform === 'darwin',
     disableHostCheck: true,
     https: false,
     hotOnly: false,
     before: app => {}
    },
    configureWebpack: (config) => {
      if (process.env.NODE_ENV === 'production') {// 为生产环境修改配置...
        config.mode = 'production';
        config["performance"] = {//打包文件大小配置
          "maxEntrypointSize": 10000000,
          "maxAssetSize": 30000000
        }
      }
    },
    // 第三方插件配置
    pluginOptions: {
     // ...
    }
    }