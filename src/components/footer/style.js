import { styled } from "styled-components";

export const FooterWrap = styled.footer`
  position: relative;
`;

export const FooterBg = styled.div`
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 400px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.26) 0%,
    #f2b100 100%
  );
  z-index: -1;

  @media only screen and (max-width: 768px) {
    height: 850px;
  }
`;

export const FooterSection = styled.div`
  position: relative;
  padding-bottom: 50px;
`;

export const FooterLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding-bottom: 66px;
`;

export const FooterLogoImg = styled.img`
  width: 121px;
  height: 57px;
  cursor: pointer;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
    text-align: center;
  }
`;

export const FooterOneWrap = styled.div`
  /* width: 250px; */
`;

export const FooterOneWrapBox = styled.div`
  display: flex;
  gap: 15px;
`;

export const FooterOneWrapIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const FooterOneWrapP = styled.p`
  margin-bottom: 17px;
  color: #263039;
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 185.714% */
`;

export const FooterTwoWrap = styled.div``;

export const FooterTwoWrapH5 = styled.h5`
  margin-bottom: 30px;
  color: #0a033c;
  font-family: Raleway;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const FooterTwoWrapP = styled.p`
  position: relative;
  margin-top: 17px;
  color: #263039;
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    height: 2px;
    width: 100%;
    left: 0;
    border-radius: 10px;
    background-color: #000;
    transition: 0.3s;
    transition-timing-function: ease-in-out;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const FooterThreeWrap = styled.div``;

export const FooterThreeWrapH5 = styled.h5`
  margin-bottom: 30px;
  color: #0a033c;
  font-family: Raleway;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const FooterThreeWrapP = styled.p`
  position: relative;
  margin-top: 17px;
  color: #263039;
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    height: 2px;
    width: 100%;
    left: 0;
    border-radius: 10px;
    background-color: #000;
    transition: 0.3s;
    transition-timing-function: ease-in-out;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const FooterFourWrap = styled.div``;

export const FooterFourWrapH5 = styled.h5`
  margin-bottom: 30px;
  color: #0a033c;
  font-family: Raleway;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;
