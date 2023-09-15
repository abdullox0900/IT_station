import styled from "styled-components";

export const BuySection = styled.div`
  padding-top: 221px;
  padding-bottom: 109px;
`;

export const BuyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BuyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1154px;
  height: 401px;
  border-radius: 16px;
  background: #263039;
  padding: 50px;

  @media only screen and (max-width: 768px) {
    width: 700px;
    height: 301px;
  }
`;

export const BuyBoxLeft = styled.div``;

export const BuyBoxLeftH2 = styled.h2`
  width: 478px;
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
`;

export const BuyBoxLeftInfoWrapper = styled.div`
  width: 750px;
  display: flex;
  align-items: center;
  gap: 5px;

  @media only screen and (max-width: 768px) {
    width: 450px;
  }
`;

export const BuyBoxLeftStar = styled.img`
  width: 24px;
  height: 24px;
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
`;

export const BuyBoxRight = styled.div`
  position: relative;
`;

export const BuyBoxRightImg = styled.img`
  position: absolute;
  right: -300px;
  bottom: -200px;
  width: 819px;
  height: 540px;

  @media only screen and (max-width: 768px) {
    position: absolute;
    right: -220px;
    bottom: -150px;
    width: 554px;
    height: 300px;
  }
`;
