import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  /* This is to eliminate the effect of jumping layout when switching between pages
     with enough content to scroll */

  html {
    overflow-y: scroll;
  }
  
`
export default GlobalStyle
