import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { ArrowBack, ArrowForward } from '@material-ui/icons'

import styled from 'styled-components'

import Layout from '../components/layout'

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`

const PostsNav = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  li {
    flex-grow: 0;
    max-width: 45%;
  }

  li:nth-child(2) {
    /* margin-left: auto; */
    a {
      text-align: right;
    }
  }
`

const ContentWrapper = styled.div`
  background-color: lightgray;
  padding: 2rem;
`

const BlogPost = ({ data, pageContext }) => {
  const { mdx } = data

  const { previous, next } = pageContext

  const nextPostLink = next ? (
    <li>
      <StyledLink to={`/blog/${next.slug}`}>
        {next.title}
        <ArrowForward />
      </StyledLink>
    </li>
  ) : (
    <li />
  )

  const prevPostLink = previous ? (
    <li>
      <StyledLink to={`/blog/${previous.slug}`}>
        <ArrowBack />
        {previous.title}
      </StyledLink>
    </li>
  ) : (
    <li />
  )

  return (
    <Layout>
      <ContentWrapper>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <h1>Go to other posts</h1>
        <nav>
          <PostsNav>
            {prevPostLink}
            {nextPostLink}
          </PostsNav>
        </nav>
      </ContentWrapper>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        tags
      }
    }
  }
`
