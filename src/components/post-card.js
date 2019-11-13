import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from '@material-ui/core'

import { ArrowForward } from '@material-ui/icons'

import avatarPicker from '../utils/avatarPicker'

// const StyledButton =

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
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const PostCard = ({ title, date, timeToRead, blurb, tags, url }) => {
  const ttr =
    timeToRead > 1
      ? `Time to read: ${timeToRead} minutes`
      : `Time to read: 1 minute`

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

        <TagsContainer>{chips}</TagsContainer>
        <StyledLink to={`blog/${url}`}>
          <Button
            color="primary"
            endIcon={<ArrowForward />}
            raised
            size="large"
            variant="contained"
          >
            Read post
          </Button>
        </StyledLink>
      </StyledCardContent>
    </StyledCard>
  )
}

export default PostCard
