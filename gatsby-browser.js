import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import { CodeBlock, InlineCode } from './src/components/code'

import Layout from './src/components/layout'

const components = {
  pre: CodeBlock,
  inlineCode: InlineCode,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}
