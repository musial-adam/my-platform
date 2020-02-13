import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { AppBar, Toolbar } from '@material-ui/core'

import { SocialMediaIconButtons } from './icons'

const StyledLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
`

const StyledAppBar = styled(AppBar)`
  display: flex;
  justify-content: center;
`

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: white;

  margin-top: auto;
`

const Footer = () => (
  <StyledFooter>
    <Toolbar variant="dense">
      <SocialMediaIconButtons />
    </Toolbar>
    © {new Date().getFullYear()} Adam Musiał. All rights reserved.
  </StyledFooter>
)

export default Footer
