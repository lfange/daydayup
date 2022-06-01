module.exports = {
  base: '/',
  dest: 'dist',
  title: 'Lfg Blog!',
  description: 'The Blog about improving',
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.png`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: `/icons/apple-touch-icon-152x152.png`
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#3eaf7c'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/icons/msapplication-icon-144x144.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  serviceWorker: false,
  themeConfig: {
    // nav: [{
    //   text: 'Languages',
    //   ariaLabel: 'Language Menu',
    //   items: [{
    //       text: 'Chinese',
    //       link: '/language/chinese/'
    //     },
    //     {
    //       text: 'Japanese',
    //       link: '/language/japanese/'
    //     }
    //   ]
    // }],
    sidebar: [{
        title: 'frps', // 必要的
        path: '/frps/frpsUsage', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          '/frpsUsage'
        ]
      },
      // {
      //   title: 'Group title',
      //   children: [ /* ... */ ],
      //   initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      // }
    ]
  }
}