import React from 'react'
// import styled from 'styled-components'
import PropTypes from 'prop-types'

const SVGIcon = ({ path, id, size, fill }) => {
  const iconLink = `${path}#${id}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={iconLink} />
    </svg>
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
