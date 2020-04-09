import styled from "styled-components"

export const StyledHeader = styled.header`
  padding: 2rem;

  h5 {
    text-transform: uppercase;
    color: #3F3D56;
    opacity: 0.5;
    font-weight: 400;
    font-size: .9rem;
    letter-spacing: 0.08em;
  }

  h1 {
    margin: 0.2em 0;
    font-size: 4rem;
    letter-spacing: 0.05em;
  }

  h4 {
    letter-spacing: 0.07em;
    font-size: 1.6rem;
    text-transform: initial;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  h4:last-of-type {
    margin-bottom: 3rem;
  }

  a {
    padding: 1rem;
    border: 4px solid #3F3D56;
    border-radius: 20px;    
  }
`
