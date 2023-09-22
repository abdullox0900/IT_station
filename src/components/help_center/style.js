import { styled } from "styled-components";

export const HelpSection = styled.div`
  padding-top: 128px;
  padding-bottom: 116px;
`;

export const HelpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HelpBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1320px;
  height: 352px;
  border-radius: 24px;
  background: #263039;
  padding: 80px;

  @media only screen and (max-width: 1300px) {
    width: 1150px;
    height: 300px;
    padding: 40px;
  }

  @media only screen and (max-width: 768px) {
    width: 700px;
    height: 252px;
  }

  @media only screen and (max-width: 715px) {
    width: 400px;
    height: 550px;
    flex-direction: column;
  }

  @media only screen and (max-width: 480px) {
    width: 300px;
    height: 550px;
    flex-direction: column;
  }
`;

export const HelpBoxLeft = styled.div``;

export const HelpBoxH2 = styled.h2`
  width: 530px;
  color: #fff;
  font-family: Roboto;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 125% */
  letter-spacing: -1.44px;
  padding-bottom: 20px;

  @media only screen and (max-width: 1300px) {
    width: 350px;
    font-size: 28px;
    line-height: 30px; /* 125% */
    letter-spacing: -1px;
  }

  @media only screen and (max-width: 768px) {
    width: 250px;
    font-size: 24px;
    line-height: 30px; /* 125% */
    letter-spacing: -1px;
  }

  @media only screen and (max-width: 715px) {
    width: 250px;
    font-size: 24px;
    line-height: 30px; /* 125% */
    letter-spacing: -1px;
    text-align: center;
  }

  @media only screen and (max-width: 480px) {
    width: 250px;
    font-size: 18px;
    line-height: 20px; /* 125% */
    letter-spacing: -1px;
    text-align: center;
  }
`;

export const HelpBoxP = styled.p`
  width: 405px;
  color: #e1e5e8;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;

  @media only screen and (max-width: 1300px) {
    width: 240px;
    font-size: 12px;
  }

  @media only screen and (max-width: 768px) {
    width: 250px;
    font-size: 10px;
    line-height: 15px; /* 125% */
  }

  @media only screen and (max-width: 715px) {
    width: 250px;
    font-size: 10px;
    letter-spacing: 1px;
    text-align: center;
  }

  @media only screen and (max-width: 480px) {
    font-size: 8px;
    letter-spacing: 1px;
  }
`;

export const HelpBoxRight = styled.div``;

export const HelpBoxRightBox = styled.div`
  width: 430px;
  height: 449px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #263039;
  background: rgba(23, 34, 43, 0.7);
  box-shadow: -42px 25px 69px -12px rgba(0, 0, 0, 0.08);
  padding: 30px;

  @media only screen and (max-width: 1300px) {
    width: 320px;
    height: 350px;
    padding: 15px;
  }

  @media only screen and (max-width: 768px) {
    width: 250px;
    height: 350px;
    padding: 15px;
  }
`;

export const HelpBoxRightBoxInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  padding-bottom: 62px;
`;

export const HelpBoxRightBoxInput = styled.input`
  border-radius: 8px;
  border: 1px solid #434d54;
  background: #17222b;
  outline: none;
  padding: 17px;
  color: #e1e5e8;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;

  @media only screen and (max-width: 1300px) {
    width: 250px;
    padding: 5px;
    font-size: 15px;
  }

  @media only screen and (max-width: 768px) {
    width: 200px;
    padding: 5px;
    font-size: 12px;
  }
`;

export const HelpBoxRightBoxInputBtn = styled.button`
  width: 356px;
  padding: 18px 0;
  border-radius: 8px;
  border: 2px solid #3f9cfb;
  background: #3f9cfb;
  box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.1),
    0px 4px 6px -1px rgba(0, 0, 0, 0.1);
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.16px;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 1300px) {
    width: 250px;
    padding: 5px;
  }

  @media only screen and (max-width: 768px) {
    width: 156px;
    padding: 5px 0;
  }
`;
