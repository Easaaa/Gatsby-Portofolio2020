import styled from 'styled-components';
import { devices, colors, fonts } from '../../constants';

export const AboutContainer = styled.section`
  position: relative;
  padding: 0 20px;
  display: grid;
  place-content: center;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Text = styled.div`
  text-align: start;
  font-weight: 200;
  font-size: ${fonts.text.mobile};
  line-height: 2rem;
  margin: 0;

  mark {
    background: ${colors.mint};
  }

  @media (min-width: 600px) {
    padding-bottom: 0;
    line-height: 2.5rem;
  }

  p {
    margin: 0;
  }
`;

export const BigPar = styled.p`
  font-size: ${fonts.text.laptop};
  margin: 0;
`;

export const Quote = styled.p`
  font-size: 28px;
  margin: 30px 15px !important;
  line-height: 3.3rem;
  color: #423a3a;
  font-weight: 600;
`;

export const Button = styled.button`
  width: 160px;
  height: 40px;
  background: #ffffff;
  display: grid;
  align-items: center;
  place-content: center;
  margin: 30px 0;
  position: relative;
  font-size: ${fonts.text.base};
  border-radius: 5px;
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  outline: none;

  @media ${devices.tabletM} {
    margin-top: 40px;
  }
`;