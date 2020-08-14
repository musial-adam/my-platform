import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-family: 'Nunito';
  font-size: var(--font36);
  font-weight: 600;
  color: var(--catalinaBlue700);
  text-decoration: none;
  text-transform: uppercase;

  /* to be able to position ::before */
  position: relative;
  z-index: 1;

  &:hover {
    &::before {
      transform: scaleX(1);
    }
  }

  &::before {
    content: '';
    display: block;
    width: 110%;
    height: 10px;
    background-color: var(--amaranth500);
    position: absolute;
    top: 30px;
    left: 0;
    margin-left: -5%;
    z-index: -1;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  &.active {
    /* color: red; */
    &::before {
      transform: scaleX(1);
    }
  }

  /* &:hover,
  :active,
  :visited {
    color: black;
  } */
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  height: 100%;

  ul {
    list-style: none;
    margin: auto 0;
    padding: 0;

    li {
      display: inline-block;
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

const activeStyleLink = {
  backgroundColor: '#ffc400',
}

const HeaderNav = () => (
  <StyledNav>
    <ul>
      <li>
        {/* <StyledLink to="/" activeStyle={activeStyleLink}> */}
        <StyledLink to="/" activeClassName="active">
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/blog" activeClassName="active" partiallyActive>
          Blog
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/tutorials" activeClassName="active" partiallyActive>
          Tutorials
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/uses" activeClassName="active">
          Uses
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/about" activeClassName="active">
          About
        </StyledLink>
      </li>
    </ul>
  </StyledNav>
)

export default HeaderNav
