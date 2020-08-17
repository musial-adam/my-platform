import React from 'react'
import styled from 'styled-components'

import HeaderNav from './navigation/header-nav'

// import bg from '../assets/patterns/cardbg.svg'

const StyledHeader = styled.header`
  height: 100px;
  background: var(--headerLinearGradient);
  /* margin: 0; */
  /* background: url(${bg}); */
  /* background-repeat: repeat; */
`

const Header = () => (
  <StyledHeader>
    <HeaderNav />
  </StyledHeader>
)

export default Header
