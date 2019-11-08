import React from 'react'
import styled from 'styled-components'

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
} from '@material-ui/core'

import GatsbyImg from '../images/gatsby-icon.png'
import GitHubSVG from '../images/github-circle.svg'
import TwitterSVG from '../images/twitter-circle.svg'
import ReactSVG from '../images/react.svg'

import { GitHubIcon } from './icons'

const PostCard = () => {
  return (
    <Card>
      <CardHeader title="This is dummy header" subheader="08-11-2019" />

      <CardContent>
        <p>... and this is dummy content</p>

        <Chip
          avatar={<Avatar src={GatsbyImg} />}
          color="default"
          label="Gatsby"
        />
        <Chip
          avatar={<Avatar src={ReactSVG} />}
          color="default"
          label="React"
        />
        <Chip
          avatar={<Avatar src={GitHubSVG} />}
          color="default"
          label="GitHub"
        />
        <Chip
          avatar={<Avatar src={TwitterSVG} />}
          color="default"
          label="Twiterrolloo"
        />

        <Chip
          avatar={
            <Avatar>
              <GitHubIcon />
            </Avatar>
          }
          label="GitHub"
        />
        <GitHubIcon />
      </CardContent>
    </Card>
  )
}

export default PostCard
