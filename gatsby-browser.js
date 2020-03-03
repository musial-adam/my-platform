import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { CodeBlock, InlineCode } from './src/components/code'
import Layout from './src/components/layout'

import { checkSession } from './src/services/auth'

// FOR MDX

const components = {
  pre: CodeBlock,
  inlineCode: InlineCode,
}

// FOR AUTH0

class SessionCheck extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     loading: true,
  //   }
  // }

  state = {
    loading: true,
  }

  componentWillMount() {
    checkSession(this.handleCheckSession)
  }

  handleCheckSession = () => {
    console.log(
      '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'
    )
    this.setState({ loading: false })
  }

  // render() {
  //   return this.state.loading === false ?? <>{this.props.children}</>
  // }

  render() {
    return this.state.loading === false && <>{this.props.children}</>
  }
}

export const wrapRootElement = ({ element }) => (
  <SessionCheck>
    <MDXProvider components={components}>{element}</MDXProvider>
  </SessionCheck>
)

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}
