module.exports = {
  plugins: ['autobar'],
  title: '一个vue写的文档记录系统',
  description: '王安会',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '回到首页', link: 'http://localhost:8080'},
      // {text: 'mybatis-plus', link: '/guide/mybatis/mybatis'},  
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 3, // 侧边栏显示2级
  }
};




// 安装
// npm install -D boboidream/vuepress-bar
// 复制代码// 配置中添加插件
// // .vuepress/config.js
// // or
// // .vuepress/theme/index.js

// module.exports = {
//   plugins: ['autobar']
// }