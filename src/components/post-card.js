import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// import {
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   Typography,
// } from '@material-ui/core'

// import { ArrowForward } from '@material-ui/icons'

// const StyledCard = styled(Card)`
//   max-width: 90%;
//   margin: 10px auto;
//   background-color: var(--amaranth300);
// `

// const StyledCardHeader = styled(CardHeader)`
//   padding-bottom: 0;
//   /* color: var(--my-first-prop); */
//   /* font-size: var(--font72); */
// `

// const StyledCardContent = styled(CardContent)`
//   padding-top: 0;
// `

// const ButtonWrapper = styled.div`
//   margin-top: 20px;
//   display: flex;
//   justify-content: center;
// `

const StyledLink = styled(Link)`
  text-decoration: none;
`

// const PostCard = ({ title, date, timeToRead, description, tags, url }) => {
//   const ttr =
//     timeToRead > 1
//       ? `Time to read: ${timeToRead} minutes`
//       : `Time to read: 1 minute`

//   return (
//     <StyledCard>
//       <StyledCardHeader title={title} subheader={date} />

//       <StyledCardContent>
//         <Typography component="h3" variant="overline" paragraph>
//           {ttr}
//         </Typography>

//         <Typography component="p" variant="body1" paragraph>
//           {description}
//         </Typography>

//         <ButtonWrapper>
//           <StyledLink to={`/blog/${url}`}>
//             <Button
//               color="secondary"
//               endIcon={<ArrowForward />}
//               size="large"
//               variant="contained"
//             >
//               Read post
//             </Button>
//           </StyledLink>
//         </ButtonWrapper>
//       </StyledCardContent>
//     </StyledCard>
//   )
// }

const PostCardWrapper = styled.div`
  box-sizing: border-box;
  width: 450px;
  height: 300px;
  border-radius: var(--cardBorderRadius);
  box-shadow: var(--cardBoxShadow);
  background: var(--cardLinearGradient), url(../../bg/cardbg.svg);
  background-blend-mode: multiply;
  background-repeat: repeat;
  /* background-size: auto, 6px 6px; */
  color: var(--white);
  font-family: var(--primaryFont);
  font-size: var(--font30);
  margin: 10px;

  overflow: hidden;
  position: relative;
  z-index: 1;

  transition: transform 0.1s ease-in-out;

  :hover {
    /* transform: scale(1.05); */
    /* background-size: auto, 4px 4px; */
    cursor: pointer;
  }
`

const PostCardTop = styled.div`
  height: 195px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;

  display: flex;
  align-items: baseline;
  justify-content: space-between;

  overflow: hidden;

  h1 {
    margin: 0;
    color: var(--white);
    font-size: var(--font30);
    font-weight: 600;
    text-shadow: var(--cardElementTextShadow);
    line-height: 105%;
    max-width: 260px;
  }

  position: relative;

  ::after {
    content: '';
    height: 220px;
    width: 220px;
    background: url(../../watermarks/gatsby2.svg);
    position: absolute;
    top: 26.4px;
    left: 245.4px;
    transform: rotate(-16deg);

    z-index: -1;
  }
`

const PostDate = styled.div`
  background-color: var(--sunshade500);
  padding: 6px 10px;
  border-radius: 10px;
  width: fit-content;
  box-shadow: var(--cardElementTextShadow);
  /* align-self: baseline; */
  h2 {
    margin: 0;
    font-size: var(--font18);
    font-weight: 600;
    color: var(--sunshade900);
    text-transform: uppercase;
  }
`

const PostSummary = styled.div`
  width: 450px;
  height: 105px;
  padding: 15px 20px;
  background-color: var(--catalinaBlue700);

  p {
    margin: 0;
    font-size: var(--font24);
    font-weight: normal;
    line-height: 105%;
  }
`

const PostCard = ({ title, date, description, url }) => {
  // console.log(title)
  // console.log(title.substring(0, 10))
  console.log(date)

  return (
    <StyledLink to={`/blog/${url}`}>
      <PostCardWrapper>
        <PostCardTop>
          <h1>{title}</h1>
          <PostDate>
            <h2>{date}</h2>
          </PostDate>
        </PostCardTop>
        <PostSummary>
          <p>
            {/* That my friends is a sample card for a blog post related to React.js.
          Hope you like it! */}
            {description}
          </p>
        </PostSummary>
      </PostCardWrapper>
    </StyledLink>
  )
}

export default PostCard
