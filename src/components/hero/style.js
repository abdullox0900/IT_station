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
  width: 470px;
  color: #17222b;
  font-family: Roboto;
  font-size: 54px;
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
    padding-top: 10px;
    text-align: center;
  }

  @media only screen and (max-width: 425px) {
    padding-top: 30px;
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
    padding-bottom: 30px;
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

// <- -------------------------- Hero Right -------------------------------- ->

export const HeroStudentBox = styled.div`
  position: relative;
  width: 720px;
  height: 553px;

  @media only screen and (max-width: 1240px) {
    width: 550px;
    height: 450px;
  }

  @media only screen and (max-width: 950px) {
    width: 450px;
    height: 350px;
  }

  @media only screen and (max-width: 480px) {
    width: 350px;
    height: 250px;
  }
`;

export const HeroStudentOval = styled.img`
  position: absolute;
  left: 80px;
  bottom: 0;

  @media only screen and (max-width: 1240px) {
    width: 450px;
    height: 250px;
    left: 50px;
  }

  @media only screen and (max-width: 950px) {
    width: 400px;
    height: 200px;
    left: 27px;
  }

  @media only screen and (max-width: 480px) {
    width: 300px;
    height: 150px;
  }
`;

export const HeroStudentOvalTwo = styled.img`
  position: absolute;
  left: 5px;
  bottom: 0;

  @media only screen and (max-width: 1240px) {
    width: 500px;
    height: 300px;
    left: 25px;
  }

  @media only screen and (max-width: 950px) {
    width: 450px;
    height: 250px;
    left: 0px;
  }

  @media only screen and (max-width: 480px) {
    width: 300px;
    height: 180px;
    left: 25px;
  }
`;

export const HeroStudentBg = styled.img`
  position: absolute;
  right: -20px;
  z-index: 2;

  @media only screen and (max-width: 1240px) {
    width: 600px;
    height: 450px;
    bottom: 0;
  }

  @media only screen and (max-width: 950px) {
    width: 500px;
    height: 350px;
  }

  @media only screen and (max-width: 480px) {
    width: 350px;
    height: 250px;
    right: 0;
  }
`;

// <- ------------------------------------ Hero Icons ------------------------------------------ ->

export const HeroReactIcon = styled.img`
  position: absolute;
  width: 78px;
  height: 69px;
  top: 190px;
  left: 50px;

  @media only screen and (max-width: 1240px) {
    width: 68px;
    height: 60px;
  }

  @media only screen and (max-width: 950px) {
    width: 50px;
    height: 40px;
    top: 130px;
    left: 50px;
  }

  @media only screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
    top: 120px;
    left: 30px;
  }
`;

export const HeroFigmaIcon = styled.img`
  position: absolute;
  width: 82.998px;
  height: 122px;
  top: 180px;
  right: 160px;

  @media only screen and (max-width: 1240px) {
    width: 65px;
    height: 110px;
    top: 140px;
    right: 120px;
  }

  @media only screen and (max-width: 950px) {
    width: 50px;
    height: 80px;
    top: 110px;
    right: 100px;
  }

  @media only screen and (max-width: 480px) {
    width: 40px;
    height: 60px;
    top: 80px;
    right: 70px;
  }
`;

export const HeroHtmlIcon = styled.img`
  position: absolute;
  width: 110px;
  height: 155px;
  top: 190px;
  left: 170px;

  @media only screen and (max-width: 1240px) {
    width: 100px;
    height: 100px;
    top: 170px;
    left: 120px;
  }

  @media only screen and (max-width: 950px) {
    width: 80px;
    height: 80px;
    top: 135px;
    left: 100px;
  }

  @media only screen and (max-width: 480px) {
    width: 60px;
    height: 60px;
    top: 100px;
    left: 85px;
  }
`;

export const HeroJavaScriptIcon = styled.img`
  position: absolute;
  width: 163px;
  height: 161px;
  left: 15px;
  bottom: -40px;

  @media only screen and (max-width: 1240px) {
    width: 120px;
    height: 120px;
    left: 25px;
    bottom: -40px;
  }

  @media only screen and (max-width: 950px) {
    width: 100px;
    height: 100px;
    left: 20px;
    bottom: -30px;
  }

  @media only screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
    left: 20px;
    bottom: -10px;
  }
`;

export const HeroPythonIcon = styled.img`
  position: absolute;
  width: 111px;
  height: 102.846px;
  right: 60px;
  bottom: -50px;

  @media only screen and (max-width: 1240px) {
    width: 100px;
    height: 100px;
    right: 35px;
    bottom: -50px;
  }

  @media only screen and (max-width: 950px) {
    width: 80px;
    height: 80px;
    right: 40px;
    bottom: -40px;
  }

  @media only screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
    right: 40px;
    bottom: -20px;
  }
`;
