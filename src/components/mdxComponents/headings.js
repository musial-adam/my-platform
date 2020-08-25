import React from 'react'
import styled from 'styled-components'

const headingSizes = {
  h1: 4,
  h2: 3,
  h3: 2.5,
  h4: 2,
  h5: 1.8,
  h6: 1.2,
}

const StyledHeading = styled.h1`
  /* color: var(--catalinaBlue700); */
  font-size: ${headingSizes.h1}rem;
  font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
  font-weight: 800;
  /* color: transparent; */

  background: var(--headerLinearGradient);
  background: linear-gradient(
    90deg,
    var(--amaranth500),
    var(--catalinaBlue600)
  );

  /* display: inline-block; */
  /* background-clip: text; */

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const Heading = props => (
  <StyledHeading {...props}>{props.children}</StyledHeading>
)

export default Heading
