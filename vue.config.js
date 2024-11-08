const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // 你的后端服务地址
        changeOrigin: true,              // 是否允许跨域
        pathRewrite: { '^/api': '' },    // 将 '/api' 替换为空
      },
    },
  },
};
