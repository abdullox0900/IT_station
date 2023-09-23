import React from "react";
import {
  FooterBg,
  FooterFourWrap,
  FooterFourWrapH5,
  FooterLogoImg,
  FooterLogoWrapper,
  FooterOneWrap,
  FooterOneWrapBox,
  FooterOneWrapIcon,
  FooterOneWrapP,
  FooterSection,
  FooterThreeWrap,
  FooterThreeWrapH5,
  FooterThreeWrapP,
  FooterTwoWrap,
  FooterTwoWrapH5,
  FooterTwoWrapP,
  FooterWrap,
  FooterWrapper,
} from "./style";

// Import Imgaes
import Brand from "../../assets/img/ItStation-logo.png";
import CallIcon from "../../assets/svg/call-icon.svg"
import EmailIcon from "../../assets/svg/email-icon.svg"
import TimeIcon from "../../assets/svg/time-icon.svg"

// Container
import { Container } from "../container/container";

export default function Footer() {
  return (
    <>
      <FooterWrap>

        <FooterBg data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-duration="1200" />

        <Container>
          <FooterSection>
            <FooterLogoWrapper>
              <FooterLogoImg src={Brand} />
            </FooterLogoWrapper>

            <FooterWrapper>

              <FooterOneWrap>

                <FooterOneWrapBox>
                  <FooterOneWrapIcon src={CallIcon} />
                  <FooterOneWrapP>Tel: 92131312</FooterOneWrapP>
                </FooterOneWrapBox>

                <FooterOneWrapBox>
                  <FooterOneWrapIcon src={TimeIcon} />
                  <FooterOneWrapP>Response hourse: 8 to 20</FooterOneWrapP>
                </FooterOneWrapBox>

                <FooterOneWrapBox>
                  <FooterOneWrapIcon src={EmailIcon} />
                  <FooterOneWrapP>Email: info@onelearn.com</FooterOneWrapP>
                </FooterOneWrapBox>

              </FooterOneWrap>

              <FooterTwoWrap>
                <FooterTwoWrapH5>Categories</FooterTwoWrapH5>
                <FooterTwoWrapP>Counseling</FooterTwoWrapP>
                <FooterTwoWrapP>Health and fitness</FooterTwoWrapP>
                <FooterTwoWrapP>Individual development</FooterTwoWrapP>
              </FooterTwoWrap>

              <FooterThreeWrap>
                <FooterThreeWrapH5>Links</FooterThreeWrapH5>
                <FooterThreeWrapP>About Us</FooterThreeWrapP>
                <FooterThreeWrapP>Blog</FooterThreeWrapP>
                <FooterThreeWrapP>Contact</FooterThreeWrapP>
              </FooterThreeWrap>

              <FooterFourWrap>
                <FooterFourWrapH5>Socialmedia</FooterFourWrapH5>
              </FooterFourWrap>

            </FooterWrapper>
          </FooterSection>
        </Container>
      </FooterWrap>
    </>
  );
}
