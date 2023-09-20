import { styled } from "styled-components";

export const FreeCourseCardTop = styled.div``;

export const FreeCourseSection = styled.div`
  padding-top: 250px;
  padding-bottom: 141px;
`;

export const FreeCourseStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 45px;
`;

export const FreeCourseStartH3 = styled.h3`
  color: var(--brand-color-2, #fd661f);
  text-align: center;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 62.4px; /* 130% */
  letter-spacing: -2.88px;

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }

  @media screen and (max-width: 425px) {
    font-size: 28px;
    letter-spacing: -1px;
  }
`;

export const FreeCourseBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-bottom: 61px;
  white-space: nowrap;

  @media screen and (max-width: 1010px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
  }
`;

export const FreeCourseBtns = styled.button`
  width: 125px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  background: transparent;
  color: #818c96;
  font-family: Raleway;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  transition: 0.2s ease-in;

  &:hover {
    background: #263039;
    color: #fff;
  }

  &:active {
    background: #263039;
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    padding: 10px 2px;
    white-space: nowrap;
  }

  @media only screen and (max-width: 425px) {
    width: 125px;
    padding: 10px 12px;
    white-space: nowrap;
  }
`;

export const FreeCourseCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
`;

export const FreeCourseCard = styled.div`
  width: 296px;
  height: auto;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 10px 60px 0px rgba(38, 45, 118, 0.08);
`;

export const FreeCourseCardTopImg = styled.img`
  border-radius: 10px;
`;

export const FreeCourseCardCenter = styled.div`
  padding: 20px;
`;

export const FreeCourseCardCenterP = styled.p`
  color: var(--primary-primary-3, #777795);
  font-family: Raleway;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
  padding-bottom: 8px;
`;

export const FreeCourseCardCenterH5 = styled.h5`
  color: #263039;
  font-family: Raleway;
  font-size: 15.522px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 23.283px */
  letter-spacing: 0.388px;
`;

export const FreeCourseCardCenterInfo = styled.p`
  color: var(--grey-grey-2, #4d4d4d);
  font-family: Raleway;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 16px */
`;

export const FreeCourseCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;
`;

export const FreeCourseCardBottomDollarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const FreeCourseCardBottomH4 = styled.h4`
  color: var(--brand-color-2, #fd661f);
  font-family: Inter;
  font-size: 16.681px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 25.022px */
`;

export const FreeCourseCardBottomDollar = styled.span`
  color: var(--Black, #230f0f);
  font-family: Inter;
  font-size: 14.828px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 22.242px */
  text-decoration: line-through;
`;

export const FreeCourseCardBottomButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  background: transparent;
  color: #818c96;
  font-family: Raleway;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  transition: 0.2s ease;

  &:hover {
    background: #263039;
    color: #fff;
  }
`;
