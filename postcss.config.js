module.exports = {
  plugins:[
    // 自动补全厂商前缀
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
    }),
    // 移动端适配-viewport
    require('postcss-px-to-viewport')({
      unitToConvert: 'px',
      viewportWidth: 750, // 设计稿的视口宽度
      unitPrecision: 5, // 单位转换后保留的精度
      propList: ['*'], // 能转化为vw的属性列表
      viewportUnit: 'vw', // 希望使用的视口单位
      fontViewportUnit: 'vw', // 字体使用的视口单位
      mediaQuery: false, // 媒体查询里的单位是否需要转换单位
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 1920, // 横屏时使用的视口宽度
      replace: true, //  是否直接更换属性值，而不添加备用属性
      minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      exclude: /node_modules/, // 忽略某些文件夹下的文件或特定文件
    })
  ]
}