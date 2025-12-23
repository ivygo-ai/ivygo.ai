import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IvyGo 艾维果',
  tagline: '一键翻译 YouTube 视频，让全球优质内容触手可及',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // Using custom domain: https://docs.ivygo.ai
  url: 'https://docs.ivygo.ai',
  // When using a custom domain and serving at the root, baseUrl should be '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ivygo-ai', // GitHub org/user name
  projectName: 'ivygo.ai', // Repo name

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ivygo-ai/ivygo.ai/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ivygo-ai/ivygo.ai/tree/main/',
          blogTitle: '艾维果动态',
          blogDescription: '了解艾维果产品的最新动态、更新日志和使用技巧',
          postsPerPage: 10,
          blogSidebarTitle: '最新动态',
          blogSidebarCount: 'ALL',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      items: [
        {
          href: 'https://ivygo.ai',
          label: 'IvyGo 艾维果',
          position: 'left',
          className: 'navbar-brand-link',
        },
        {
          href: 'https://ivygo.ai',
          label: '精品课程',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '文档首页',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IvyGo 艾维果. 打破语言障碍，学习无国界。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

