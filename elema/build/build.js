'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

// 转圈的效果
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

// 打包过程中终端的提示文案
const spinner = ora('building for production...')
spinner.start()

// 将根目录下的static文件夹一并压缩到dist的static文件夹中
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  // 执行webpack打包
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
