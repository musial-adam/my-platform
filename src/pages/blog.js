import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import { Container } from '@material-ui/core'

import Layout from '../components/layout'
import PostCard from '../components/post-card'

const StyledLink = styled(Link)`
  /* margin-right: 10px; */
  text-decoration: none;
`

const StyledContainer = styled(Container)`
  background-color: lightgray;
  padding: 30px;
`

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  // const postsList = posts.map(post => (
  //   <React.Fragment key={post.node.id}>
  //     <StyledLink to={`/blog/${post.node.frontmatter.slug}`}>
  //       <StyledCard>
  //         <h2>{post.node.frontmatter.title}</h2>
  //         <h3>{post.node.frontmatter.date}</h3>
  //       </StyledCard>
  //     </StyledLink>
  //   </React.Fragment>
  // ))

  const postsList = posts.map(post => {
    const { id, timeToRead } = post.node
    const { title, date, blurb, slug, tags } = post.node.frontmatter

    return (
      <PostCard
        key={id}
        title={title}
        date={date}
        timeToRead={timeToRead}
        blurb={blurb}
        tags={tags}
        url={slug}
      />
    )
  })

  return (
    <Layout>
      <StyledContainer>{postsList}</StyledContainer>
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
            date(formatString: "MMMM D, YYYY")
            blurb
            tags
          }
          timeToRead
        }
      }
    }
  }
`
