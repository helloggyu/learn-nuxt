const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}),

//https://cli.vuejs.org/config/#lintonsave 
// eslint off
module.exports={
 lintOnSave:false,
}