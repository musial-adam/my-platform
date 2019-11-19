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

const components = {
  h1: props => (
    <h1 style={{ color: 'red' }} {...props}>
      {props.children}
    </h1>
  ),
  // pre: props => <div {...props} />,
  // code: props => <pre style={{ color: 'navy' }} {...props} />,
  pre: props => (
    <Highlight
      {...defaultProps}
      code={`
        (function someDemo() {
          var test = "Hello World!";
          console.log(test);
        })();

        return () => <App />;
      `}
      language="jsx"
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  ),
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
