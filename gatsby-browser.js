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
