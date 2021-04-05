module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      chainWebpackRendererProcess: config => {
        config.plugin('define').tap(args => {
          args[0]['process.env.FLUENTFFMPEG_COV'] = false
          return args
        })
      },
      nodeIntegration: true,
      externals: [
        'archiver', 
        'fluent-ffmpeg', 
        'chokidar', 
        'sharp',
        'ffmpeg-static',
        'ffprobe-static',
      ],
      builderOptions: {
        win: {
          icon: 'public/icons/icon.png',
          asar: true,
          asarUnpack: [
            "node_modules/@ffmpeg-installer",
            "node_modules/@ffprobe-installer"
          ],
        },
        linux: {
          icon: 'public/icons/icons.icns',
          target: ['AppImage'],
          category: 'Utility',
        },
        mac: {
          icon: 'public/icons/icons.icns',
          asar: true,
          asarUnpack: [
            "node_modules/@ffmpeg-installer",
            "node_modules/@ffprobe-installer"
          ],
        },
      },
    }
  },
  devServer: {
    // hot: false,
    liveReload: false
  },
  pages: {
    index: {
      entry: './src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'AVDB',
    },
    player: {
      entry: './src/player.js',
      template: 'public/player.html',
      filename: 'player.html',
      title: 'Player',
    },
  },
  // configureWebpack: {
  //   watchOptions: {
  //     ignored: /public/
  //   }
  // }
  // module: {
  //   rules: [
  //     {
  //       test: /\.vue$/,
  //       loader: 'vue-loader',
  //       options: {
  //         hotReload: false
  //       }
  //     }
  //   ]
  // }
}