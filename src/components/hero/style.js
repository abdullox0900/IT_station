import { styled } from "styled-components";

export const HeroLeft = styled.div``;
export const HeroRight = styled.div``;
export const HeroLeftTitle = styled.div``;

export const HeroSection = styled.div`
  padding-bottom: 150px;
`;

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const HeroLeftTitleH1 = styled.h1`
  width: 547px;
  color: #17222b;
  font-family: Roboto;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 76px;
  letter-spacing: -1.92px;
  padding-bottom: 40px;

  @media only screen and (max-width: 1250px) {
    font-size: 55px;
  }

  @media only screen and (max-width: 1086px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 1075px) {
    width: 347px;
    font-size: 30px;
  }

  @media only screen and (max-width: 1140px) {
    width: 347px;
    font-size: 40px;
    line-height: 50px;
  }

  @media only screen and (max-width: 884px) {
    width: 357px;
    font-size: 35px;
    line-height: 50px;
  }

  @media only screen and (max-width: 815px) {
    width: 300px;
    font-size: 35px;
    line-height: 50px;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 40px;
    text-align: center;
  }

  @media only screen and (max-width: 425px) {
    width: 300px;
    text-align: center;
    font-size: 34px;
    line-height: 45px;
  }
`;

export const HeroLeftBtnWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
  }
`;

export const HeroLeftButton = styled.button`
  width: 201px;
  padding: 20px 10px;
  border-radius: 10px;
  border: 2px solid #ffb200;
  background: #ffb200;
  box-shadow: 0px 8px 10px -6px rgba(255, 221, 85, 0.4),
    0px 20px 25px -5px rgba(255, 178, 0, 0.3);
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.16px;

  @media only screen and (max-width: 425px) {
    padding: 15px 10px;
    width: 181px;
  }
`;

export const HeroRightImg = styled.img`
  @media only screen and (max-width: 1250px) {
    width: 550px;
    height: 450px;
  }

  @media only screen and (max-width: 1086px) {
    width: 530px;
    height: 430px;
  }

  @media only screen and (max-width: 1140px) {
    width: 520px;
    height: 420px;
  }

  @media only screen and (max-width: 1110px) {
    width: 500px;
    height: 400px;
  }

  @media only screen and (max-width: 868px) {
    width: 410px;
    height: 320px;
  }

  @media only screen and (max-width: 800px) {
    width: 400px;
    height: 320px;
  }

  @media only screen and (max-width: 768px) {
    width: 400px;
    height: 320px;
  }

  @media only screen and (max-width: 425px) {
    width: 400px;
    height: 300px;
  }
`;
