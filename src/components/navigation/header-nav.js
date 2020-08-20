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
    width: calc(100% + 20px);
    /* width: 100%; */
    height: 10px;
    background-color: var(--amaranth500);
    position: absolute;
    top: 30px;
    left: 0;
    margin-left: -10px;
    z-index: -1;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  &.active {
    &::before {
      transform: scaleX(1);
    }
  }
`

const StyledNav = styled.nav`
  width: 760px;
  /* margin: 0 auto; */
  /* box-sizing: border-box; */

  /* border: 1px dashed darkgrey; */

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin-right: 2rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

const HeaderNav = () => (
  <StyledNav>
    <ul>
      <li>
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
