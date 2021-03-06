// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const fs = require('fs')
const path = require('path')
const glob = require('glob')
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext')

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
  onDuplicateRoutes: 'throw',
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
      '@docusaurus/plugin-content-pages',
      {
        path: path.join(__dirname, 'src/pages'),
      },
    ],
  ],
  themeConfig:
    ({
      navbar: {
        title: 'pw-codeceptjs',
        logo: {
          alt: 'Logo',
          src: 'logo.svg',
        },
        items: [
          {
            position: 'right',
            href: 'https://github.com/reutenkoivan/pw-codeceptjs',
            className: 'header-github-link',
            'aria-label': 'Repository',
          },
        ],
      },
      footer: {
        // eslint-disable-next-line max-len
        copyright: `Copyright ?? ${new Date().getFullYear()} <b>pw-codeceptjs</b>. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

if (process.argv.slice(-1)[0] === 'start') {
  config.plugins.push('@docusaurus/plugin-debug')
}

const getDocRoots = ({ root, pattern }) => {
  const { workspaces } = require(path.join(root, 'package.json'))

  const packages = workspaces
    .reduce((acc, workspacePattern) => {
      const packagePattern = path.join(root, workspacePattern, 'package.json')
      const roots = glob
        .sync(packagePattern, { ignore: '**/node_modules/**' })
        .map(packageJson => path.dirname(packageJson))
        .sort()

      return acc.concat(roots)
    }, [])

  const docRoots = packages.reduce((acc, packageRoot) => {
    const docRootPattern = path.join(packageRoot, pattern)

    return acc.concat(glob.sync(docRootPattern, { ignore: '**/node_modules/**' }))
  }, [])

  return docRoots.filter(dir => fs.existsSync(dir))
}

const getLinksStructure = (root, docRoots) =>  {
  return docRoots.reduce((acc, docRoot) => {
    const base = docRoot.replace(path.join(root, 'packages', '/'), '').split('/').slice(0, -1)
    const rel = docRoot.replace(`${root}/`, '').split('/').slice(1, -1)

    const box = {
      label: require(path.join(docRoot, '..', 'package.json')).name,
      to: rel.join('/'),
      location: path.relative(process.cwd(), docRoot)
    }

    if (base.length === 1) {
      acc.root.push(box)

      return acc
    }

    const [dir] = base

    if (!acc[dir]) {
      acc[dir] = []
    }

    acc[dir].push(box)

    return acc
  }, { root: [] })
}

module.exports = () => {
  const root = path.join(__dirname, '..')
  const docRoots = getDocRoots({ root, pattern: 'doc' })

  const mappedPlugins = docRoots.map(docRoot => {
    const rel = docRoot.replace(`${root}/`, '').split('/').slice(1, -1)

    return [
      '@docusaurus/plugin-content-docs',
      {
        id: rel.join('-'),
        routeBasePath: rel.join('/'),
        path: path.relative(process.cwd(), docRoot),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }
    ]
  })

  config.plugins.push(...mappedPlugins)
  // @ts-ignore
  const headerButtons = config.themeConfig.navbar.items

  const linksMap = getLinksStructure(root, docRoots)

  for (const key in linksMap) {
    if (key === 'root') {
      headerButtons.push(...linksMap[key])
    } else {
      headerButtons.push({
        type: 'dropdown',
        label: key[0].toUpperCase() + key.slice(1).toLowerCase(),
        items: linksMap[key],
      })
    }
  }

  return config
}
