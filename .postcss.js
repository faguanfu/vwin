
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-pxtorem": { // 此处为添加部分
      rootValue: 37.5, // 对应16px 适配移动端750px宽度
    }
  }
}