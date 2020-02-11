import React from 'react'

import { Avatar } from '@material-ui/core'

// SVG imports

import GatsbyImg from '../images/gatsby-icon.png'
import GitHubSVG from '../images/github-circle.svg'
import ReactSVG from '../images/react.svg'

const avatarPicker = tag => {
  switch (tag) {
    case 'gatsby':
      return <Avatar src={GatsbyImg} />
    case 'github':
      return <Avatar src={GitHubSVG} />
    case 'react':
      return <Avatar src={ReactSVG} />
    default:
      return <Avatar>:(</Avatar>
  }
}

export default avatarPicker
