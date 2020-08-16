// !! I am using Styles Provider here to make sure my Styled Components always override Material UI
// !! URL to docs: https://material-ui.com/guides/interoperability/#styled-components

// TODO: Footer is faulty as the moment as it injects <header></header>

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CssBaseline } from '@material-ui/core'
import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles'

import Header from './header'
import Footer from './footer'
import GlobalStyle from '../utils/globalStyles'
// import './layout.css'

import bgpattern from '../assets/patterns/sidebg.svg'

const LayoutContainer = styled.div`
  /* max-width: 44.625rem; this was important for limiting layout box*/
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;

  background: url(${bgpattern});
  /* background: url(../../bg/cardbg.svg); */

  background-repeat: repeat;
  background-size: 8px 8px;
  /* background-size: auto, 16px 16px; */
  /* background-repeat: repeat; */
  /* background-size: 8px 8px; */

  /* border: 5px solid orange; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const ContentContainer = styled.div`
  background-color: #f7fafc;
  flex-grow: 1;
  border: 5px solid green;
  width: 100%;
  max-width: 42rem;
  padding-left: 1.3125rem;
  padding-right: 1.3125rem;
  margin-left: auto;
  margin-right: auto;
`

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      {/* <ThemeProvider theme={theme}> */}
      <StylesProvider injectFirst>
        <GlobalStyle />
        {/* <Container maxWidth="md"> */}
        <LayoutContainer>
          <Header />
          <main>
            <ContentContainer>{children}</ContentContainer>
          </main>
          <Footer />
        </LayoutContainer>
      </StylesProvider>
      {/* </ThemeProvider> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
