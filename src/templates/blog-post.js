import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { ArrowBack, ArrowForward } from '@material-ui/icons'

import styled from 'styled-components'
import Heading from '../components/mdxComponents/headings'

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

const ContentWrapper = styled.div``

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
    <ContentWrapper>
      <Heading>{mdx.frontmatter.title}</Heading>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <Heading as="h2">Go to other posts</Heading>
      <nav>
        <PostsNav>
          {prevPostLink}
          {nextPostLink}
        </PostsNav>
      </nav>
    </ContentWrapper>
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
