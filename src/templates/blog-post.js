import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Avatar, Chip } from '@material-ui/core'
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

const BlogPost = ({ data: { mdx } }) => {
  const { tags } = mdx.frontmatter

  const chips = tags.map(tag => <Chip avatar={avatarPicker(tag)} label={tag} />)

  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      {console.log(mdx)}
      {chips}
      <MDXRenderer>{mdx.body}</MDXRenderer>
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
