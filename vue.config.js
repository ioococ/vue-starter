const { defineConfig } = require("@vue/cli-service");
const debug = process.env.NODE_ENV !== "production";
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  productionSourceMap: false,
  //devtool: "cheap-module-source-map",
  //"devtool": "source-map",
  configureWebpack: (config) => {
    //console.log(workspaceFolder)
    if (debug) {
      // 开发环境配置
      config.devtool = "source-map";
    }
  },
});
module.exports = {
  //...
  configureWebpack: {
    devServer: {
      host: "0.0.0.0",
      port: 80,
      open: true, //自动打开浏览器
    },
  },
};
