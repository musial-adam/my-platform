import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
// import TestComponent from '../components/test-component'
// import { GitHubIcon } from '../components/icons'

const StyledLink = styled(Link)`
  /* margin-right: 10px; */
  text-decoration: none;
`

const Wrapper = styled.div`
  border: 1px solid green;
`

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  const postsList = posts.map(post => (
    <React.Fragment key={post.node.id}>
      <StyledLink to={`/blog/${post.node.frontmatter.slug}`}>
        <Wrapper>
          <h1>{post.node.frontmatter.title}</h1>
          <h2>{post.node.frontmatter.date}</h2>
        </Wrapper>
      </StyledLink>
    </React.Fragment>
  ))

  return (
    <Layout>
      {console.log(posts)}
      {postsList}
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query allMDXPosts {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            # date(formatString: "MMMM DD, YYYY")
            date
          }
        }
      }
    }
  }
`
