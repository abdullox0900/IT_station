import { styled } from "styled-components";

export const LocationSection = styled.div`
  padding-top: 110px;
  padding-bottom: 200px;
`;

export const LocationStart = styled.div`
  padding-bottom: 80px;
`;

export const LocationStartH3 = styled.h3`
  color: #0f1826;
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 56px; /* 175% */
  letter-spacing: -0.64px;

  @media only screen and (max-width: 580px) {
    width: 250px;
  }
`;

export const LocaitonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LocationBox = styled.div`
  width: 1000px;
  height: 450px;
  border-radius: 10px;
  background: #d9d9d9;
`;

export const LocationBgBox = styled.div`
  position: absolute;
  width: 1000px;
  height: 400px;
  transform: rotate(8.395deg);
  border-radius: 10px;
  background: rgba(243, 186, 29, 0.59);
  z-index: -1;
`;
