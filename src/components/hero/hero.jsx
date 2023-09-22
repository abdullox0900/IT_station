import React from 'react'

// Import Style
import { HeroLeft, HeroLeftButton, HeroLeftTitle, HeroLeftTitleH1, HeroRight, HeroSection, HeroWrapper, HeroLeftBtnWrapper, HeroStudentBox, HeroStudentOval, HeroStudentBg, HeroStudentOvalTwo, HeroReactIcon, HeroFigmaIcon, HeroHtmlIcon, HeroJavaScriptIcon, HeroPythonIcon } from './style'

// Import Images
import HeroStudentImg from "../../assets/img/hero-student.png"
import HeroOvalOne from "../../assets/svg/hero-oval-one.svg"
import HeroOvalTwo from "../../assets/svg/hero-oval-two.svg"

// Import Icons
import React_Icon from "../../assets/svg/react-icon.svg"
import Figma_Icon from "../../assets/svg/figma-icon.svg"
import Html_Icon from "../../assets/svg/html-icon.svg"
import JavaScript_Icon from "../../assets/svg/javascript-icon.svg"
import Python_Icon from "../../assets/svg/python-icon.svg"

export default function Hero() {
    return (
        <HeroSection>
            <HeroWrapper>
                <HeroLeft>
                    <HeroLeftTitle>
                        <HeroLeftTitleH1 data-aos="fade-right" data-aos-duration="1400">Dasturlashga oid kasblarni o'rgatamiz</HeroLeftTitleH1>
                    </HeroLeftTitle>

                    <HeroLeftBtnWrapper>
                        <HeroLeftButton data-aos="fade-up-right" data-aos-duration="1400">O'qishni boshlash</HeroLeftButton>
                    </HeroLeftBtnWrapper>
                </HeroLeft>

                <HeroRight>
                    <HeroStudentBox>
                        <HeroStudentOval src={HeroOvalOne} data-aos="fade-up" data-aos-duration="800" />
                        <HeroStudentOvalTwo src={HeroOvalTwo} data-aos="fade-up" data-aos-duration="1200" />

                        <HeroStudentBg src={HeroStudentImg} data-aos="zoom-in-up" data-aos-duration="1200" />

                        <HeroReactIcon src={React_Icon} data-aos="zoom-in-right" data-aos-duration="1200" />
                        <HeroFigmaIcon src={Figma_Icon} data-aos="fade-up" data-aos-duration="3000" />
                        <HeroHtmlIcon src={Html_Icon} data-aos="fade-up" data-aos-duration="3000" />
                        <HeroJavaScriptIcon src={JavaScript_Icon} data-aos="fade-left" data-aos-duration="3000" />
                        <HeroPythonIcon src={Python_Icon} data-aos="zoom-in-left" data-aos-duration="1200" />
                    </HeroStudentBox>
                </HeroRight>
            </HeroWrapper>
        </HeroSection>
    )
}
