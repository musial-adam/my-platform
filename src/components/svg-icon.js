import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// import YT from '../assets/icons/test.svg'

// console.log('youtube', youtube)

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
      <use xlinkHref={iconLink} />
    </svg>
  )
}

SVGIcon.defaultProps = {
  size: '50',
  fill: 'yellow',
}

// SVGIcon.propTypes = {
//   icon: PropTypes.string.isRequired,
//   className: PropTypes.string,
//   fill: PropTypes.string,
// }

// SVGIcon.defaultProps = {
//   className: '',
//   fill: '',
// }

export default SVGIcon
