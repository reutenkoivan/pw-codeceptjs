// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path')
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const searchTranslations = {
  'search_placeholder': 'Search',
  'see_all_results': 'See all results',
  'no_results': 'No results.',
  'search_results_for': 'Search results for "{{ keyword }}"',
  'search_the_documentation': 'Search the documentation',
  'count_documents_found': '{{ count }} document found',
  'count_documents_found_plural': '{{ count }} documents found',
  'no_documents_were_found': 'No documents were found',
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '@pw-codeceptjs',
  url: 'https://reutenkoivan.github.io',
  baseUrl: process.env.CI ? '/pw-codeceptjs/' : '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'favicon.ico',
  projectName: 'pw-codeceptjs',
  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: [
          require.resolve('./src/css/custom.css'),
        ],
      },
    ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexPages: true,
        indexBlog: false,
        language: ['en', 'ru'],
        highlightSearchTermsOnTargetPage: true,
        docsDir: [],
        translations: searchTranslations,
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: path.join(__dirname, 'content'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        path: path.join(__dirname, 'src/pages'),
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/theme-classic')} */
    ({
      navbar: {
        title: 'pw-codeceptjs',
        logo: {
          alt: 'Logo',
          src: 'logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Intro',
          },
        ],
      },
      footer: {
        // eslint-disable-next-line max-len
        copyright: `Copyright © ${new Date().getFullYear()} <b>pw-codeceptjs</b>. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
