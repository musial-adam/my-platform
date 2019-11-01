import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { AppBar, Button, Toolbar } from '@material-ui/core'

const StyledLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <header>
    <AppBar position="static">
      <Toolbar variant="dense">
        <StyledLink to="/">
          <Button variant="outlined">Home</Button>
        </StyledLink>
        <StyledLink to="/blog">
          <Button variant="outlined">Blog</Button>
        </StyledLink>
        <StyledLink to="/about">
          <Button variant="outlined">About</Button>
        </StyledLink>
      </Toolbar>
    </AppBar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
