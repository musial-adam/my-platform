import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { CssBaseline, Container } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { purple } from '@material-ui/core/colors'

import Header from './header'
import Footer from './footer'
// import './layout.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00e676',
    },
    secondary: purple,
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Header siteTitle={data.site.siteMetadata.title} />
          {/* <div> */}
          {/* <main> */}
          {children}
          {/* </main> */}
          {/* </div> */}
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
