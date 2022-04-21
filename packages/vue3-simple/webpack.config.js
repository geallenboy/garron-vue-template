module.exports = {
  target: 'web',
  framework: 'vue',
  entry: {
    index: 'src/app.js'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.runtime.esm-bundler.js',
    }
  }
};
