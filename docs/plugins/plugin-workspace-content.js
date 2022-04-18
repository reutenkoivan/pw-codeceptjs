const fs = require('fs')
const path = require('path')
const glob = require('glob')

const getDocRoots = ({ root, pattern }) => {
  const { workspaces } = require(path.join(root, 'package.json'))

  const packages = workspaces
    .reduce((acc, workspacePattern) => {
      const packagePattern = path.join(root, workspacePattern, 'package.json')
      const roots = glob
        .sync(packagePattern, { ignore: '**/node_modules/**' })
        .map(packageJson => path.dirname(packageJson))

      return acc.concat(roots)
    }, [])

  const docRoots = packages.reduce((acc, packageRoot) => {
    const docRootPattern = path.join(packageRoot, pattern)

    return acc.concat(glob.sync(docRootPattern, { ignore: '**/node_modules/**' }))
  }, [])

  return docRoots.filter(dir => fs.existsSync(dir))
}

// ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---  ---

const pluginWorkspaceContent = (context, { root, pattern = 'doc', showLastUpdateAuthor = true, showLastUpdateTime = true }) => {
  const docRoots = getDocRoots({ root, pattern })

  const mappedPlugins = docRoots.map(docRoot => {
    const rel = docRoot.replace(`${root}/`, '').split('/').slice(1, -1)

    return [
      '@docusaurus/plugin-content-docs',
      {
        id: rel.join('-'),
        routeBasePath: rel.join('/'),
        path: path.relative(process.cwd(), docRoot),
        showLastUpdateAuthor,
        showLastUpdateTime,
      }
    ]
  })

  context.siteConfig.plugins.push(...mappedPlugins)

  return {
    name: 'plugin-workspace-content',
    contentLoaded({ actions: { addRoute } }) {
      // console.log(addRoute.toString())
    }
  }
}

exports.default = pluginWorkspaceContent
