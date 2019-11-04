// Create Pages API implementation

const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  const result = await graphql(`
    query PostsMDX {
      allMdx {
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

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      // context: {
      //   data: node,
      // },
      context: {
        id: node.id,
        // data: node,
      },
    })
  })
}

// End of Create Pages API implementation
