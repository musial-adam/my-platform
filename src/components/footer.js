import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core'

import { GitHubIcon, InstagramIcon, TwitterIcon, YouTubeIcon, SocialMediaIconButtons } from './icons'

const StyledLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
`

const Footer = () => (
  <footer>
    <AppBar color="default" position="static">
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
      © {new Date().getFullYear()}, Built with{' '}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </AppBar>
  </footer>
)

export default Footer
