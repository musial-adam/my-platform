import React from 'react'
import styled from 'styled-components'

import SVGIcon from './svg-icon'

import youtube from '../assets/icons/youtube.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'

const IconsContainer = styled.div`
  /* border: 1px dashed black; */

  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    line-height: 0;

    li:not(:last-child) {
      margin-right: 25px;
    }
  }

  a:hover {
    cursor: pointer;

    svg {
      fill: var(--malibu500);
    }
  }

  svg {
    transition: fill 0.2s ease-in-out;
  }
`

const SocialMediaIcons = () => {
  return (
    <IconsContainer>
      <ul>
        <li>
          <a
            href="http://localhost:8000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGIcon path={youtube} id="youtube" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/adam_musial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGIcon path={twitter} id="twitter" />
          </a>
        </li>
        <li>
          <a
            href="http://localhost:8000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGIcon path={instagram} id="instagram" />
          </a>
        </li>
        <li>
          <a
            href="http://localhost:8000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGIcon path={github} id="github" />
          </a>
        </li>
      </ul>
    </IconsContainer>
  )
}

export default SocialMediaIcons
