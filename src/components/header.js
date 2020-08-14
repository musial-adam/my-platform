import React from 'react'
import styled from 'styled-components'

import HeaderNav from './navigation/header-nav'

const StyledHeader = styled.header`
  height: 5rem;
`

const Header = () => (
  <StyledHeader>
    <HeaderNav />
  </StyledHeader>
)

export default Header
