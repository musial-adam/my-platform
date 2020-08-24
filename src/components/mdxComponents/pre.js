import React from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
// import theme from 'prism-react-renderer/themes/oceanicNext'
// import theme from 'prism-react-renderer/themes/oneDarkPro/'

const StyledPre = styled.pre`
  /* font-family: 'Victor Mono' !important; */
  font-weight: 800;
  padding: 1rem;
  margin-left: -1rem;
  border-radius: 1rem;
  margin-right: -1rem;
  overflow-x: auto;
`

// const LineNo = styled.span`
//   display: inline-block;
//   width: 1rem;
//   margin-right: 0.8rem;
//   text-align: right;
//   opacity: 0.3;
//   user-select: none;
// `

// const FileName = styled.div`
//   padding: 1rem;
//   margin: 0rem -1rem;
//   border-bottom: 1px solid white;
//   opacity: 0.5;
//   user-select: none;
// `

// const LanguageIndicator = styled.span`
//   color: black;
//   display: inline-block;
//   padding: 0rem 0.4rem;
//   border-radius: 0 0 5px 5px;
//   margin-bottom: 1rem;

//   color: white;
//   border: 1px solid white;
//   border-top: none;
//   opacity: 0.5;
// `

const Pre = props => {
  const { className, metastring } = props.children.props

  // Using RegEx to extract code block language from className
  // Example classNames: language-css, language-js, language-jsx, etc.

  const codeBlockLang = className.match(/language-(?<lang>.*)/)
  const language = codeBlockLang.groups.lang ? codeBlockLang.groups.lang : ''

  // code block - info about file name

  // const filename = metastring || null

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className} style={style}>
          {/* {filename && <FileName>{filename}</FileName>} */}
          {/* <LanguageIndicator>{language}</LanguageIndicator> */}
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
}

export default Pre
