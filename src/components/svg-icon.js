import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSVG = styled.svg`
  use {
    transition: fill 0.2s ease-in-out;
  }

  use:hover {
    cursor: pointer;
    fill: var(--malibu400);
  }
`

const SVGIcon = ({ path, id, size, fill }) => {
  const iconLink = `${path}#${id}`

  return (
    <StyledSVG
      width={size}
      height={size}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={iconLink} fill={fill} />
    </StyledSVG>
  )
}

SVGIcon.propTypes = {
  path: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
  fill: PropTypes.string,
}

SVGIcon.defaultProps = {
  size: 50,
  fill: '#AEEFFE',
}

export default SVGIcon
