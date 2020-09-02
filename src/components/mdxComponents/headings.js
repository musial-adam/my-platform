import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h1`
  font-weight: 800;

  span.gradient-text {
    background: linear-gradient(
      45deg,
      var(--amaranth500),
      var(--catalinaBlue600)
    );

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  position: relative;
  z-index: 1;

  /* &::before {
    height: 0.35em;
    width: 5em;
    transform: translateY(0.8em) rotate(-2deg) skew(-25deg);
    content: '';
    pointer-events: none;
    background: var(--sunshade600);
    position: absolute;
    z-index: -1;
  } */
`

const Heading = props => (
  <StyledHeading {...props}>
    <span className="gradient-text">{props.children}</span>
  </StyledHeading>
)

export default Heading
