import { styled } from "styled-components";

export const CourseSection = styled.div`
  padding-bottom: 161px;
`;

export const CourseStart = styled.div`
  padding-bottom: 54px;
`;

export const CourseStartH3 = styled.h3`
  color: #0f1826;
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 56px; /* 175% */
  letter-spacing: -0.64px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const CourseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;

export const CourseCard = styled.div`
  width: 550px;
  height: 300px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.27);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 34px;
`;

export const CourseCardLeft = styled.div``;

export const CourseCardLeftName = styled.h4`
  color: #000;
  font-family: Lato;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px; /* 121.429% */
  letter-spacing: -0.56px;
  padding-bottom: 18px;
`;

export const CourseCardLeftInfo = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.28px;
  padding-bottom: 21px;
`;

export const CourseCardLeftButton = styled.a`
  width: 90px;
  padding: 10px 12px;
  border-radius: 4px;
  background: transparent;
  border: 1px solid #c4c4c4;
  color: #818c96;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background: #0f1826;
    color: #fff;
  }
`;

export const CourseCardRight = styled.div``;
export const CourseCardRightImg = styled.img``;
