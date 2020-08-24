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
  color: var(--catalinaBlue700);
  font-size: ${headingSizes.h1}rem;
  font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
`

const Heading = props => (
  <StyledHeading {...props}>{props.children}</StyledHeading>
)

export default Heading
