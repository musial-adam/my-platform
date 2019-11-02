import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPost = ({ data: { mdx } }) => (
  <Layout>
    <h1>Hi, I am a template</h1>
    <h1>{mdx.frontmatter.title}</h1>
    <MDXRenderer>{mdx.body}</MDXRenderer>
  </Layout>
)

export default BlogPost

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`