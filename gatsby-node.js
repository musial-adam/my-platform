// Create Pages API implementation

const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  const result = await graphql(`
    query PostsMDX {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    const previous =
      index === posts.length - 1 ? null : posts[index + 1].node.frontmatter
    const next = index === 0 ? null : posts[index - 1].node.frontmatter

    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      // context: {
      //   data: node,
      // },
      context: {
        id: node.id,
        previous,
        next,
        // data: node,
      },
    })
  })
}

// End of Create Pages API implementation

// EXPERIMENTAL FOR CLIENT ONLY ROUTES

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = '/app/*'
    // Update the page.
    createPage(page)
  }
}

// END: EXPERIMENTAL FOR CLIENT ONLY ROUTES

// FOR NOT LOADING AUTH0 DURING HTML BUILD

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// END: FOR NOT LOADING AUTH0 DURING HTML BUILD
