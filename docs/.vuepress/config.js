module.exports = {
  base: './', //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '停宜慧开放平台',
      description: 'VuePress模板，主题，插件演示。展示了一个简单的VuePress案例模板，用户可以直接clone这个仓库，作为初始化一个VuePress网站启动项目，在这个项目的基础上新增自定义配置和功能。'
    }
  },
  plugins: [
  ],
  themeConfig: {

    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '指南', link: '/guide/', ariaLabel: '指南' }
        ],
        sidebar: {
          '/guide/': [
            '',
            'theme',
            'plugin'
          ]
        }
      }
    }
  },

}
