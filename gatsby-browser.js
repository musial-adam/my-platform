import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { CodeBlock, InlineCode } from './src/components/code'
import Layout from './src/components/layout'

import 'typeface-nunito'

// import { checkSession } from './src/services/auth'

// FOR MDX

const components = {
  pre: CodeBlock,
  inlineCode: InlineCode,
}

// FOR AUTH0

// class SessionCheck extends React.Component {
//   state = {
//     loading: true,
//   }

//   componentDidMount() {
//     checkSession(this.handleCheckSession)
//   }

//   handleCheckSession = () => {
//     this.setState({ loading: false })
//   }

//   render() {
//     return this.state.loading === false && <>{this.props.children}</>
//   }
// }

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}
