// !! I am using Styles Provider here to make sure my Styled Components always override Material UI
// !! URL to docs: https://material-ui.com/guides/interoperability/#styled-components

import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'

import { CssBaseline, Container } from '@material-ui/core'
import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles'

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
  },
})

const LayoutWrapper = styled.div`
  width: 800px;
  /* margin: 0 auto; */
  margin: 0 auto;
  border: 4px solid orange;
`

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <GlobalStyle />
          <Container maxWidth="md">
            {/* <LayoutWrapper> */}
            <Header />
            <main>{children}</main>
            <Footer />
            {/* </LayoutWrapper> */}
          </Container>
        </StylesProvider>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
