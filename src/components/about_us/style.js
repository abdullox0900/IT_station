import { styled } from "styled-components";

export const AboutSection = styled.div``;
export const AboutWrapper = styled.div``;

export const AboutStart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 26px;
`;

export const AboutStartH3 = styled.h3`
  width: 251.585px;
  color: #17222b;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 62.4px; /* 156% */
  letter-spacing: -2.4px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 425px) {
    font-size: 25px;
    letter-spacing: 0.1px;
  }
`;

export const AboutVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 190px;
`;
