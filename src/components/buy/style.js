import styled from "styled-components";

export const BuySection = styled.div`
  padding-top: 221px;
  padding-bottom: 109px;
`;

export const BuyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BuyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1154px;
  height: 401px;
  border-radius: 16px;
  background: #263039;
  padding: 50px;

  @media only screen and (max-width: 768px) {
    width: 700px;
    height: 300px;
  }

  @media only screen and (max-width: 580px) {
    width: 450px;
    height: 300px;
  }

  @media only screen and (max-width: 480px) {
    width: 350px;
    height: 230px;
  }

  @media only screen and (max-width: 385px) {
    width: 300px;
    height: 230px;
  }
`;

export const BuyBoxLeftH2 = styled.h2`
  width: 478px;
  text-align: center;
  color: #fff;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 62.4px; /* 130% */
  letter-spacing: -2.88px;
  padding-bottom: 15px;

  @media only screen and (max-width: 768px) {
    width: 250px;
    font-size: 24px;
    text-align: center;
    line-height: 40px; /* 130% */
    letter-spacing: -1px;
  }

  @media only screen and (max-width: 580px) {
    font-size: 18px;
    line-height: 20px; /* 130% */
  }

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    letter-spacing: -0.1px;
  }

  @media only screen and (max-width: 385px) {
    font-size: 10px;
  }
`;

export const BuyBoxLeftInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const BuyBoxLeftStar = styled.img`
  width: 24px;
  height: 24px;

  @media only screen and (max-width: 480px) {
    width: 15px;
    height: 15px;
  }
`;

export const BuyBoxLeftP = styled.p`
  color: #fff;
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 250%; /* 16.8px */
  letter-spacing: 0.28px;

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }

  @media only screen and (max-width: 580px) {
    font-size: 8px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 6px;
    white-space: nowrap;
  }

  @media only screen and (max-width: 385px) {
    font-size: 5px;
  }
`;

export const BuyBoxLeftBtn = styled.button`
  padding: 15px 30px;
  border-radius: 10px;
  background: #fff;
  color: #263039;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.32px;
  text-transform: uppercase;
  margin-top: 33px;
  border: none;

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 768px) {
    padding: 10px 15px;
  }

  @media only screen and (max-width: 580px) {
    padding: 8px 10px;
    font-size: 14px;
  }

  @media only screen and (max-width: 480px) {
    padding: 7px 7px;
    font-size: 13px;
  }

  @media only screen and (max-width: 385px) {
    padding: 7px 7px;
    font-size: 10px;
  }
`;