import React from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
// import theme from 'prism-react-renderer/themes/oceanicNext'
import theme from 'prism-react-renderer/themes/nightOwl'

const StyledPre = styled.pre`
  font-family: 'Victor Mono';
  font-weight: 800;
  padding: 1rem;
  margin-left: -1rem;
  border-radius: 1rem;
  margin-right: -1rem;
`

const CodeBlock = props => {
  console.log(props)

  const { className } = props.children.props

  // Using RegEx to extract code block language from className
  // Example classNames: language-css, language-js, language-jsx, etc.

  const codeBlockLang = className.match(/language-(?<lang>.*)/)
  console.log(codeBlockLang)
  const language = codeBlockLang.groups.lang ? codeBlockLang.groups.lang : ''

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </StyledPre>
      )}
    </Highlight>
  )
}

const InlineCode = styled.code`
  background-color: pink;
  color: navy;
  padding: 0.1rem;
  border-radius: 0.1rem;
  font-family: 'Victor Mono';
`

export { CodeBlock, InlineCode }
