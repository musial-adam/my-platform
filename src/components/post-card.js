import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core'

import { ArrowForward } from '@material-ui/icons'

const StyledButton = styled(Button)`
  /* background-color: orange; */
`

const StyledCard = styled(Card)`
  max-width: 95%;
  margin: 10px auto;
`

const StyledCardHeader = styled(CardHeader)`
  padding-bottom: 0;
`

const StyledCardContent = styled(CardContent)`
  padding-top: 0;
`

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const PostCard = ({ title, date, timeToRead, description, tags, url }) => {
  const ttr =
    timeToRead > 1
      ? `Time to read: ${timeToRead} minutes`
      : `Time to read: 1 minute`

  return (
    <StyledCard>
      <StyledCardHeader title={title} subheader={date} />

      <StyledCardContent>
        <Typography component="h3" variant="overline" paragraph>
          {ttr}
        </Typography>

        <Typography component="p" variant="body1" paragraph>
          {description}
        </Typography>

        <ButtonWrapper>
          <StyledLink to={`blog/${url}`}>
            <StyledButton
              color="secondary"
              endIcon={<ArrowForward />}
              raised
              size="large"
              variant="contained"
            >
              Read post
            </StyledButton>
          </StyledLink>
        </ButtonWrapper>
      </StyledCardContent>
    </StyledCard>
  )
}

export default PostCard
