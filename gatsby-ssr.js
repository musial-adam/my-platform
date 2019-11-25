/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import { CodeBlock, InlineCode } from './src/components/code'

const components = {
  pre: CodeBlock,
  inlineCode: InlineCode,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
