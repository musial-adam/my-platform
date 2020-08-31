import React from 'react'
import styled from 'styled-components'

// TODO - below headings sizes are random choices, create system for headings

const headingSizes = {
  h1: 5,
  h2: 4,
  h3: 3,
  h4: 2,
  h5: 1.5,
  h6: 1.2,
}

const StyledHeading = styled.h1`
  font-size: ${headingSizes.h1}rem;
  font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
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

  &::before {
    /* Yellow square is using ems so it scales up/down with the font size */
    height: 0.35em;
    width: 5em;
    transform: translateY(0.8em) rotate(-2deg) skew(-25deg);
    /* width: 100%; */
    content: '';
    /* color: transparent;
    -webkit-text-fill-color: transparent; */
    pointer-events: none;
    background: var(--sunshade600);
    /* -webkit-background-clip: text; */
    position: absolute;
    /* top: 20px */
    z-index: -1;
    /* --translate: -0.5rem;
    --rotate: 0deg;
    transform: translateX(var(--translate)) translateY(var(--translate))
      rotate(var(--rotate)); */
  }
`

const Heading = props => (
  <StyledHeading {...props}>
    <span className="gradient-text">{props.children}</span>
  </StyledHeading>
)

export default Heading
