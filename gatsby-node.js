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
    const prevUrl =
      index === posts.length - 1 ? null : posts[index + 1].node.frontmatter.slug
    const nextUrl = index === 0 ? null : posts[index - 1].node.frontmatter.slug

    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      // context: {
      //   data: node,
      // },
      context: {
        id: node.id,
        prevUrl,
        nextUrl,
        // data: node,
      },
    })
  })
}

// End of Create Pages API implementation
