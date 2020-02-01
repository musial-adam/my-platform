import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Avatar, Button, Chip } from '@material-ui/core'

import { ArrowBack, ArrowForward } from '@material-ui/icons'

import styled from 'styled-components'

import Layout from '../components/layout'

import GatsbyImg from '../images/gatsby-icon.png'
import GitHubSVG from '../images/github-circle.svg'
import TwitterSVG from '../images/twitter-circle.svg'
import ReactSVG from '../images/react.svg'

const avatarPicker = tag => {
  switch (tag) {
    case 'github':
      return <Avatar src={GitHubSVG} />
    case 'react':
      return <Avatar src={ReactSVG} />
    default:
      return <Avatar>:(</Avatar>
  }
}

const StyledLink = styled(Link)`
  text-decoration: none;
  /* color: black; */
  display: flex;

  p {
    margin: 2px 0 0 0;
  }

  &:hover {
    background-color: orange;
    cursor: pointer;
  }
`

const NextPostLink = styled.div`
  margin-left: auto;
`

const PrevPostLink = styled.div``

const PostsNav = styled.div`
  border: 2px solid red;

  display: flex;
  /* justify-content: space-between; */
`

const ContentWrapper = styled.div`
  background-color: lightgray;
  padding: 2rem;
`

const BlogPost = ({ data, pageContext }) => {
  const { mdx } = data

  const { previous, next } = pageContext
  console.log('previous', previous)
  console.log('next', next)

  const { tags } = mdx.frontmatter

  const chips = tags.map(tag => <Chip avatar={avatarPicker(tag)} label={tag} />)

  const nextPostLink = next && (
    <NextPostLink>
      <StyledLink to={`blog/${next.slug}`}>
        <p>{next.title}</p>
        <ArrowForward />
      </StyledLink>
    </NextPostLink>
  )

  const prevPostLink = previous && (
    <PrevPostLink>
      <StyledLink to={`blog/${previous.slug}`}>
        <ArrowBack />
        <p>{previous.title}</p>
      </StyledLink>
    </PrevPostLink>
  )

  return (
    <Layout>
      <ContentWrapper>
        <h1>{mdx.frontmatter.title}</h1>
        {/* {console.log(mdx)} */}
        {chips}
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <h1>Go to other posts</h1>
        <PostsNav>
          {prevPostLink}
          {nextPostLink}
        </PostsNav>
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
