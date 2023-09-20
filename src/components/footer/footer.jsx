import React from 'react'
import { FooterFourWrap, FooterFourWrapH5, FooterLogoImg, FooterLogoWrapper, FooterOneWrap, FooterOneWrapP, FooterSection, FooterThreeWrap, FooterThreeWrapH5, FooterThreeWrapP, FooterTwoWrap, FooterTwoWrapH5, FooterTwoWrapP, FooterWrapper } from './style'

// Import Imgaes
import Brand from "../../assets/img/ItStation-logo.png"

export default function Footer() {
  return (
    <>
      <FooterSection>
        <FooterLogoWrapper>
          <FooterLogoImg src={Brand} />
        </FooterLogoWrapper>

        <FooterWrapper>

          <FooterOneWrap>
            <FooterOneWrapP>Tel: 92131312</FooterOneWrapP>
            <FooterOneWrapP>Response hourse: 8 to 20</FooterOneWrapP>
            <FooterOneWrapP>Email: info@onelearn.com</FooterOneWrapP>
          </FooterOneWrap>

          <FooterTwoWrap>
            <FooterTwoWrapH5>Categories</FooterTwoWrapH5>
            <FooterTwoWrapP>Counseling</FooterTwoWrapP>
            <FooterTwoWrapP>Health and fitness</FooterTwoWrapP>
            <FooterTwoWrapP>Individual development</FooterTwoWrapP>
            <FooterTwoWrapP>More</FooterTwoWrapP>
          </FooterTwoWrap>

          <FooterThreeWrap>
            <FooterThreeWrapH5>Links</FooterThreeWrapH5>
            <FooterThreeWrapP>About Us</FooterThreeWrapP>
            <FooterThreeWrapP>Blog</FooterThreeWrapP>
          </FooterThreeWrap>

          <FooterFourWrap>
            <FooterFourWrapH5>Socialmedia</FooterFourWrapH5>
          </FooterFourWrap>
        </FooterWrapper>
      </FooterSection>
    </>
  )
}
