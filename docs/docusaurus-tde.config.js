const path = require('path')
const { dropdownBuilder } = require('./utils/dropdownBuilder')

module.exports = {
  logo: './logo.svg',
  title: '@pw-codeceptjs',
  baseUrl: process.env.BASE_URL,
  navbar: {
    support: {
      url: 'https://github.com/reutenkoivan/pw-codeceptjs/issues',
    },
    repository: {
      url: 'https://github.com/reutenkoivan/pw-codeceptjs',
    },
  },
  themes: [
    '@docusaurus-tde/components-theme',
  ],
  hooks: [
    ['@docusaurus-tde/debug-hook', { enabled: !process.env.CI, logs: !!process.env.CI }],
    ['@docusaurus-tde/custom-css-hook', { source: './custom.css' }],
    ['@docusaurus-tde/react-pages-hook', { root: path.join(__dirname, 'react-pages'), exclude: ['components/**'] }],
    ['@docusaurus-tde/package-documentation-hook', { dropdownBuilder }],
  ],
}
