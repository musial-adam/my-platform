import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import FooterNav from './navigation/footer-nav'
import SocialMediaIcons from './social-media'

const StyledLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
`

const StyledFooter = styled.footer`
  /* box-sizing: border-box; */

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* flex-direction: column; */
  /* padding: 10px; */

  margin-top: auto;

  /* original styles up */

  height: 300px;
  background: var(--footerLinearGradient), url(../../bg/footerbg.svg);
  background-blend-mode: screen;
  /* normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity */
  background-repeat: repeat;
  background-size: auto, 8px 8px;
`

const StyledNav = styled.nav`
  display: block;
  width: 200px;
  border: 1px solid yellow;
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

const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;

  /* border: 2px solid orange; */
`

const Copyright = styled.p`
  color: var(--sunshade600);
  font-family: 'Nunito';
  font-size: 18px;
  font-weight: normal;
  /* line-height: 1; */
`

const FormPlaceholder = styled.div`
  border-radius: 10px;

  background-color: var(--malibu600);

  width: 200px;
  height: 250px;
`

const Footer = () => (
  <StyledFooter>
    {/* <StyledNav>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 4</li>
      </ul>
    </StyledNav> */}
    <FooterNav />
    <MiddleBox>
      <SocialMediaIcons />
      <Copyright>
        © {new Date().getFullYear()} Adam Musiał. All rights reserved.
      </Copyright>
    </MiddleBox>
    <FormPlaceholder />
  </StyledFooter>
)

export default Footer
