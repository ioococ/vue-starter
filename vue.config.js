const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})
module.exports = {
  //...
  configureWebpack: {
    devServer: {
      host: '0.0.0.0'
    },
    devServer: {
      port: 80
    }
  }
}