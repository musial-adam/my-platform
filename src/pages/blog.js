import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Container } from '@material-ui/core'

import Layout from '../components/layout'
import PostCard from '../components/post-card'

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `

const StyledContainer = styled(Container)`
  /* background-color: lightgray; */
  /* padding: 30px; */
  border: 10px solid pink;
`

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  const postsList = posts.map(post => {
    const { id, timeToRead } = post.node
    const { title, date, description, slug, tags } = post.node.frontmatter

    return (
      <PostCard
        key={id}
        title={title}
        date={date}
        timeToRead={timeToRead}
        description={description}
        tags={tags}
        url={slug}
      />
    )
  })

  return (
    <Layout>
      {/* <StyledContainer>{postsList}</StyledContainer> */}
      {postsList}
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query allMDXPosts {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date(formatString: "MMMM D, YYYY")
            description
            tags
          }
          timeToRead
        }
      }
    }
  }
`
