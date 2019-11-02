import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { AppBar, Box, Button, IconButton, Toolbar } from '@material-ui/core'

import {
  GitHubIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
  SocialMediaIconButtons,
} from './icons'

const StyledLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
`

const StyledAppBar = styled(AppBar)`
  display: flex;
  justify-content: center;
`

const StyledFooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`

const Footer = () => (
  <footer>
    <AppBar color="default" position="static">
      <StyledFooterBox>
        <Toolbar variant="dense">
          {/* <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <YouTubeIcon />
          </IconButton> */}
          <SocialMediaIconButtons />
        </Toolbar>
        © {new Date().getFullYear()} Adam Musiał. All rights reserved.
      </StyledFooterBox>
    </AppBar>
  </footer>
)

export default Footer
