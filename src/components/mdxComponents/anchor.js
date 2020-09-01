import styled from 'styled-components'

const Anchor = styled.a`
  color: var(--grey800);

  position: relative;
  z-index: 1;

  text-decoration: none;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    bottom: 0.1em;
    z-index: -1;
    height: 0.4em;
    width: 100%;
    background-color: var(--sunshade300);
    transition: transform 0.1s ease-in;
  }

  &:hover::before {
    transform: translateY(0.2em);
  }
`

export default Anchor
