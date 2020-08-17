import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

  /* border: 5px solid orange; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const ContentContainer = styled.div`
  /* background-color: #f7fafc; */
  background-color: white;
  flex-grow: 1;
  /* height: 100%; */
  /* border: 1px solid green; */
  width: 100%;
  max-width: 42rem;
  /* padding-top: 20px; */
  /* padding-top: 20px; */
  /* padding-bottom: 20px; */
  padding-left: 1.3125rem;
  padding-right: 1.3125rem;
  margin-left: auto;
  margin-right: auto;

  /* h1 {
    margin: 0;
  } */
`

const StyledMain = styled.main`
  flex-grow: 1;
  height: 100%;
  /* line-height: 0; */
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <LayoutContainer>
        <Header />
        <StyledMain>
          <ContentContainer>{children}</ContentContainer>
        </StyledMain>
        <Footer />
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
