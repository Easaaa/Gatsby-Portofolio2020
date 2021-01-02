import styled from "styled-components"
import Background from '../../assets/PlayBG.png'

export const StyledHeader = styled.header`
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap');

  height: 80vh;
  max-width: 1200px; 
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  place-content: center;
  background-image: url(${Background});
  background-size: cover;

  @media (min-width: 900px) {
    padding: 10rem;
    justify-content: start;
    align-content: center;
    background-image: none;
  }

  h5 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.mint};
    opacity: 0.5;
    font-weight: 400;
    font-size: .9rem;
    letter-spacing: 0.08em;

    @media (min-width: 600px) { font-size: 1.2rem}
  }

  h1 {
    margin: 0.2em 0;
    font-size: 4rem;
    letter-spacing: 0.05em;

    @media (min-width: 600px) { font-size: 6rem}
  }

  h4 {
    letter-spacing: 0.07em;
    font-size: 1.6rem;
    text-transform: initial;
    font-weight: 500;
    margin-bottom: 0.5rem;

    @media (min-width: 600px) { 
      font-size: 2rem;
      line-height: 2.8rem;
    }
  }

  h4:last-of-type {
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.3rem;
  }
`
