import React from 'react'
import styled from 'styled-components'

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import Highlight, { defaultProps } from 'prism-react-renderer'
// import theme from 'prism-react-renderer/themes/oceanicNext'
import theme from 'prism-react-renderer/themes/nightOwl'
// import theme from 'prism-react-renderer/themes/oneDarkPro/'

const StyledPre = styled.pre`
  font-family: 'Victor Mono';
  font-weight: 800;
  padding: 1rem;
  margin-left: -1rem;
  border-radius: 1rem;
  margin-right: -1rem;
  overflow-x: auto;
`

const LineNo = styled.span`
  /* color: pink; */
  display: inline-block;
  width: 1rem;
  margin-right: 0.8rem;
  text-align: right;
  opacity: 0.3;
  user-select: none;
  /* border: 1px solid white; */
  /* padding: 0.1rem; */
`

// const StyledLiveProvider = styled(LiveProvider)`
//   border-radius: 20px;
// `
// const StyledLiveEditor = styled(LiveEditor)`
//   border-radius: 20px;
//   * {
//     font-family: 'Victor Mono';
//   }
//   font-weight: 800;
//   padding: 1rem;
//   margin-left: -1rem;
//   border-radius: 1rem;
//   margin-right: -1rem;
//   overflow-x: auto;
// `

const CodeLive = ({ code, theme }) => {
  return (
    <LiveProvider code={code} theme={theme} noInline>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}

const CodeBlock = props => {
  const { className } = props.children.props

  const isReactLive = props.children.props.metastring
    ? props.children.props.metastring
    : null

  const code = props.children.props.children.trim()

  // Using RegEx to extract code block language from className
  // Example classNames: language-css, language-js, language-jsx, etc.

  const codeBlockLang = className.match(/language-(?<lang>.*)/)
  const language = codeBlockLang.groups.lang ? codeBlockLang.groups.lang : ''

  console.log(isReactLive)
  console.log(props)

  const HiglightedCode = isReactLive ? (
    <CodeLive code={code} theme={theme} />
  ) : (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {/* <LineNo>{i + 1}</LineNo> */}
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </StyledPre>
      )}
    </Highlight>
  )

  return <>{HiglightedCode}</>
}

const InlineCode = styled.code`
  background-color: #011627;
  color: #d6deeb;
  padding: 0.1rem 0.2rem;
  border-radius: 0.2rem;
  font-family: 'Victor Mono';
  font-weight: 800;
`

export { CodeBlock, InlineCode }
