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
`

const PostsNav = styled.div`
  /* border: 2px solid red; */

  display: flex;
  /* justify-content: space-between; */
`

// EXPERIMENTAL CSS

const PostLinkContainer = styled.div`
  border: 2px solid black;
  padding: 10px;
  height: 100px;
  display: flex;
  align-items: center;
`

const PostLink = styled.p`
  margin: 0;
`

// END

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
    <>
      <p>{next.title} &#x02192;</p>
      <p>{next.title} &#x027f9;</p>
      <p>&nacute;</p>

      <StyledLink to={`blog/${next.slug}`}>
        <Button
          color="secondary"
          endIcon={<ArrowForward />}
          raised
          size="large"
          variant="contained"
        >
          Next
        </Button>
      </StyledLink>
    </>
  )

  const prevPostLink = previous && (
    <>
      <StyledLink to={`blog/${previous.slug}`}>
        <Button
          color="secondary"
          startIcon={<ArrowBack />}
          raised
          size="large"
          variant="contained"
        >
          Previous
        </Button>
      </StyledLink>
      <p>{previous.title}</p>
    </>
  )

  return (
    <Layout>
      <ContentWrapper>
        <h1>{mdx.frontmatter.title}</h1>
        {/* {console.log(mdx)} */}
        {chips}
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <h1>Prev - Next</h1>
        <PostsNav>
          {prevPostLink}
          {nextPostLink}
        </PostsNav>
        <h1>Next - Prev</h1>
        <PostsNav>
          <PostLinkContainer>
            <PostLink>texten</PostLink>
            <ArrowForward />
          </PostLinkContainer>
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
