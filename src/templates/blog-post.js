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

const BlogPost = ({ data, pageContext }) => {
  const { mdx } = data

  const { previous, next } = pageContext

  const { tags } = mdx.frontmatter

  const chips = tags.map(tag => <Chip avatar={avatarPicker(tag)} label={tag} />)

  const nextPostLink = next && (
    <>
      <p>{next.title}</p>

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
      <p>{previous.title}</p>
      <StyledLink to={`blog/${previous.slug}`}>
        <Button
          color="secondary"
          endIcon={<ArrowBack />}
          raised
          size="large"
          variant="contained"
        >
          Previous
        </Button>
      </StyledLink>
    </>
  )

  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      {console.log(mdx)}
      {chips}
      <MDXRenderer>{mdx.body}</MDXRenderer>
      {/* {nextUrl && <Link to={`blog/${nextUrl}`}>Next</Link>} */}
      {nextPostLink}
      {/* {prevUrl && <Link to={`blog/${prevUrl}`}>Previous</Link>} */}
      {prevPostLink}
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
