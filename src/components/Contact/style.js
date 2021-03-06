import styled from 'styled-components';
import { devices, fonts } from '../../constants';

export const ContactContainer = styled.section`
  padding: 20px;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.primary100};
  margin: 0 auto;

  mark {
    background-color: ${({ theme }) => theme.mint};
  }

  p {
    text-align: start;
    font-weight: 200;
    font-size: ${fonts.text.mobile};
    line-height: 2rem;
    width: 100%;
  }

  @media ${devices.tablet} {
    h3 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;

export const ResumeButton = styled.a`
  width: 100%;
  padding-bottom: 2rem;
  text-align: start;
  font-weight: 200;
  line-height: 35px;
  font-size: 1.2rem;
  text-decoration: underline;

  @media (min-width: 600px) {
    line-height: 2.7rem;
    text-align: end;
  }
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  text-align: start;
  padding: 3rem 0;
  width: 100%;
  margin: 0;

  @media only screen and (min-width: 600px) {
    text-align: end;
  }
`;

export const SocialLinkContainer = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-gap: 20px;
  grid-auto-flow: column;
`;

export const SocialLink = styled.div`
  a {
    max-width: 300px;
    width: 100%;
    padding: 1.5rem;
    font-size: 1rem;
    display: grid;
    place-content: center;
    margin: 1.3rem 0;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    color: ${({ theme }) => theme.primary800};

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.dirty_white};

      svg {
        transform: scale(1.3);
      }
    }

    svg {
      font-size: 24px;
      transition: transform 100ms ease-in-out;
    }
  }
`;
