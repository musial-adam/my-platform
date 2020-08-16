// import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import FooterNav from './navigation/footer-nav'
import SocialMediaIcons from './social-media'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-top: auto;

  height: 300px;
  background: var(--footerLinearGradient), url(../../bg/footerbg.svg);
  background-blend-mode: screen;
  /* normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity */
  background-repeat: repeat;
  background-size: auto, 8px 8px;
  /* background-size: auto, 16px 16px; */
`

const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
`

const Copyright = styled.p`
  color: var(--sunshade600);
  font-family: 'Nunito';
  font-size: 18px;
  font-weight: normal;
`

const FormPlaceholder = styled.div`
  border-radius: 10px;
  background-color: var(--malibu600);
  width: 200px;
  height: 250px;
`

const Footer = () => (
  <StyledFooter>
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
