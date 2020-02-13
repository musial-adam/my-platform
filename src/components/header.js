import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { AppBar, Button, Toolbar } from '@material-ui/core'

const StyledLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
`

const StyledHeader = styled.header`
  background-color: #7c4dff;
  padding: 0.3rem 0.8rem;
`

const Header = () => (
  <StyledHeader>
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
  </StyledHeader>
)

export default Header
