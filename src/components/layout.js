// !! I am using Styles Provider here to make sure my Styled Components always override Material UI
// !! URL to docs: https://material-ui.com/guides/interoperability/#styled-components

// TODO: Footer is faulty as the moment as it injects <header></header>

import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from 'gatsby'

// import styled from 'styled-components'

import { CssBaseline, Container } from '@material-ui/core'
import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles'

import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import GlobalStyle from '../utils/globalStyles'
// import './layout.css'

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#00e676',
//     },
//     secondary: '#7c4dff',
//   },
// })

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7c4dff',
    },
    secondary: {
      main: '#ffc400',
    },
    background: {
      default: '#EDF2F7',
    },
  },
})

const LayoutContainer = styled.div`
  max-width: 42rem;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  /* padding: 2.625rem 1.3125rem; */
  padding-left: 1.3125rem;
  padding-right: 1.3125rem;
  background-color: #edf2f7;

  border: 5px solid orange;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const ContentContainer = styled.div`
  background-color: #f7fafc;
  flex-grow: 1;
  border: 5px solid green;
`

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <GlobalStyle />
          {/* <Container maxWidth="md"> */}
          <LayoutContainer>
            <Header />
            {/* <main> */}
            <ContentContainer>{children}</ContentContainer>
            {/* </main> */}
            <Footer />
          </LayoutContainer>
        </StylesProvider>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
