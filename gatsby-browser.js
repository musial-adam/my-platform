/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'

import styled from 'styled-components'

import { CodeBlock, InlineCode } from './src/components/code'

const StyledPre = styled.pre`
  font-family: 'Victor Mono';
  font-weight: 800;
  padding: 1rem;
  margin-left: -1rem;
  border-radius: 1rem;
  margin-right: -1rem;
`

const StyledCode = styled.code`
  /* color: "#d6deeb",
    backgroundColor: "#011627" */
  background-color: #011627;
  color: #d6deeb;
  padding: 0.1rem 0.2rem;
  border-radius: 0.2rem;
  font-family: 'Victor Mono';
  font-weight: 800;
`

const exampleCode = `
const Comp = ({data}) => (
  <div>{data}</div>
)

(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`

const components = {
  // pre: props => {
  //   // const className = props.children.props.className || ''
  //   // const matches = className.match(/language-(?<lang>.*)/)
  //   return (
  //     <Highlight
  //       {...defaultProps}
  //       code={props.children.props.children.trim()}
  //       language="jsx"
  //       theme={theme}
  //     >
  //       {({ className, style, tokens, getLineProps, getTokenProps }) => (
  //         <StyledPre className={className} style={style}>
  //           {tokens.map((line, i) => (
  //             <div {...getLineProps({ line, key: i })}>
  //               {line.map((token, key) => (
  //                 <span {...getTokenProps({ token, key })} />
  //               ))}
  //             </div>
  //           ))}
  //         </StyledPre>
  //       )}
  //     </Highlight>
  //   )
  // },

  pre: CodeBlock,

  inlineCode: StyledCode,
  // code: props => <pre style={{ color: 'navy' }} {...props} />,
  // pre: props => {
  //   console.log(props)
  //   return <pre {...props} />
  // },
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
