import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-family: 'Nunito';
  font-size: var(--font20);
  color: var(--malibu600);
  text-decoration: none;
  text-transform: uppercase;

  position: relative;

  &:hover {
    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    background-color: var(--sunshade600);
    width: 10px;
    height: 10px;
    border-radius: 20px;
    position: absolute;
    left: -20px;
    top: 8px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
`

const StyledNav = styled.nav`
  display: block;
  width: 200px;

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

const activeStyleLink = {
  fontWeight: 'bold',
}

const FooterNav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledLink to="/" activeStyle={activeStyleLink}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/blog" activeStyle={activeStyleLink} partiallyActive>
            Blog
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/tutorials"
            activeStyle={activeStyleLink}
            partiallyActive
          >
            Tutorials
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/uses" activeStyle={activeStyleLink}>
            Uses
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/about" activeStyle={activeStyleLink}>
            About
          </StyledLink>
        </li>
      </ul>
    </StyledNav>
  )
}

export default FooterNav
