import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  padding: 0.3rem 1rem;
  border: 2px solid black;
  border-radius: 0.3rem;

  color: black;

  &:hover {
    background-color: #ffc400;
  }

  &:hover,
  :active,
  :visited {
    color: black;
  }
`

const StyledHeader = styled.header`
  background-color: #7c4dff;
  padding: 0.3rem 0.8rem;
  height: 3rem;
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
      /* padding: 0.3rem 1rem;
      border: 1px solid black;
      border-radius: 0.2rem; */
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

const activeStyleLink = {
  backgroundColor: '#ffc400',
}

const Header = () => (
  <StyledHeader>
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
  </StyledHeader>
)

export default Header
