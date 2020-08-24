import React from 'react'
import Code from './code'
import Pre from './pre'
import Paragraph from './paragraph'
import Heading from './headings'

const components = {
  inlineCode: Code,
  pre: Pre,
  p: Paragraph,
  h1: props => <Heading as="h1" {...props} />,
  h2: props => <Heading as="h2" {...props} />,
  h3: props => <Heading as="h3" {...props} />,
  h4: props => <Heading as="h4" {...props} />,
  h5: props => <Heading as="h5" {...props} />,
  h6: props => <Heading as="h6" {...props} />,
}
// h1: Headings.H1,

export default components
