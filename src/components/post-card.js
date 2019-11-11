import React from 'react'
import styled from 'styled-components'

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from '@material-ui/core'

// import GatsbyImg from '../images/gatsby-icon.png'
// import GitHubSVG from '../images/github-circle.svg'
// import TwitterSVG from '../images/twitter-circle.svg'
// import ReactSVG from '../images/react.svg'

import avatarPicker from '../utils/avatarPicker'

// PostCard Props: title,

const StyledCard = styled(Card)`
  max-width: 70%;
  margin: 10px auto;
`

const StyledCardHeader = styled(CardHeader)`
  padding-bottom: 0;
`

const StyledCardContent = styled(CardContent)`
  padding-top: 0;
`

const StyledChip = styled(Chip)`
  margin-right: 5px;
`

const TagsContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
`

const PostCard = ({ title, date, timeToRead, blurb, tags }) => {
  const ttr =
    timeToRead > 1
      ? `Time to read: ${timeToRead} minutes`
      : `Time to read: 1 minute`

  console.log(tags)

  const tagL = tags

  // const chips = tags.map(tag => <p>tag</p>)

  const chips = tags.map(tag => (
    <StyledChip avatar={avatarPicker(tag)} label={tag} />
  ))

  return (
    <StyledCard>
      <StyledCardHeader title={title} subheader={date} />

      <StyledCardContent>
        <Typography component="h3" variant="overline" paragraph>
          {ttr}
        </Typography>

        <Typography component="p" variant="body1" paragraph>
          {blurb}
        </Typography>

        <TagsContainer>
          {/* <StyledChip
            avatar={<Avatar src={GatsbyImg} />}
            color="default"
            label="Gatsby"
          />
          <StyledChip
            avatar={<Avatar src={ReactSVG} />}
            color="default"
            label="React"
          />
          <StyledChip
            avatar={<Avatar src={GitHubSVG} />}
            color="default"
            label="GitHub"
          />
          <StyledChip
            avatar={<Avatar src={TwitterSVG} />}
            color="default"
            label="Twiterrolloo"
          /> */}
          {chips}
        </TagsContainer>
      </StyledCardContent>
    </StyledCard>
  )
}

export default PostCard
