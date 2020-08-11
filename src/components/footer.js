import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { AppBar, Toolbar } from '@material-ui/core'

import { SocialMediaIconButtons } from './icons'

import SVGIcon from './svg-icon'
import youtube from '../assets/icons/test.svg'
import twitter from '../assets/icons/twitter.svg'

const StyledLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
`

const StyledFooter = styled.footer`
  /* box-sizing: border-box; */

  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  padding: 10px;

  margin-top: auto;

  /* original styles up */

  height: 300px;
  background: var(--footerLinearGradient), url(../../bg/footerbg.svg);
  background-blend-mode: screen;
  /* normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity */
  background-repeat: repeat;
  background-size: auto, 8px 8px;

  /* div,
  nav {
    flex: 0 1 300px;
    border: 2px solid orange;
  } */

  svg {
    border: 1px solid orange;
  }
`

const StyledNav = styled.nav`
  display: block;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;

    li {
      display: inline-block;
      font-size: var(--font20);
      color: var(--malibu600);
      text-transform: uppercase;
    }
  }
`

const FormPlaceholder = styled.div`
  width: 200px;
  height: 200px;
  background-color: var(--malibu500);
`

const Box = styled.div`
  background-color: var(--amaranth500);
  width: 400px;
  height: 300px;
  border: 3px solid orange;
`

const Box2 = styled.div`
  background-color: var(--amaranth100);
  width: 200px;
  height: 300px;
  border: 3px solid red;
`

const Copyright = styled.p`
  color: var(--sunshade600);
  font-family: 'Nunito';
  font-size: 18px;
  font-weighsst: normal;
`

const Footer = () => (
  <StyledFooter>
    <StyledNav>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </StyledNav>
    {/* <SVGIcon size="50" fill="#AEEFFE" /> */}
    {/* <SVGIcon path={youtube} id="youtube" /> */}
    <SVGIcon path={twitter} id="twitter" fill="orange" />
    <SVGIcon path={twitter} id="twitter" />
    {/* <Box>© {new Date().getFullYear()} Adam Musiał. All rights reserved.</Box> */}
  </StyledFooter>
)

export default Footer
