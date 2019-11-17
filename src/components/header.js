import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { AppBar, Button, Toolbar } from '@material-ui/core'

const StyledLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
`

const Header = () => (
  <header>
    <AppBar position="static">
      <Toolbar variant="dense">
        <StyledLink to="/">
          <Button variant="outlined">Home</Button>
        </StyledLink>
        <StyledLink to="/blog">
          <Button variant="outlined">Blog</Button>
        </StyledLink>
        <StyledLink to="/tutorials">
          <Button variant="outlined">Tutorials</Button>
        </StyledLink>
        <StyledLink to="/uses">
          <Button variant="outlined">Uses</Button>
        </StyledLink>
        <StyledLink to="/about">
          <Button variant="outlined">About</Button>
        </StyledLink>
      </Toolbar>
    </AppBar>
  </header>
)

export default Header
