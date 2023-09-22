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
                        <HeroLeftTitleH1>Dasturlashga oid kasblarni o'rgatamiz</HeroLeftTitleH1>
                    </HeroLeftTitle>

                    <HeroLeftBtnWrapper>
                        <HeroLeftButton>O'qishni boshlash</HeroLeftButton>
                    </HeroLeftBtnWrapper>
                </HeroLeft>

                <HeroRight>
                    <HeroStudentBox>
                        <HeroStudentOval src={HeroOvalOne} />
                        <HeroStudentOvalTwo src={HeroOvalTwo} />
                        <HeroStudentBg src={HeroStudentImg} />

                        <HeroReactIcon src={React_Icon} />
                        <HeroFigmaIcon src={Figma_Icon} />
                        <HeroHtmlIcon src={Html_Icon} />
                        <HeroJavaScriptIcon src={JavaScript_Icon} />
                        <HeroPythonIcon src={Python_Icon} />
                    </HeroStudentBox>
                </HeroRight>
            </HeroWrapper>
        </HeroSection>
    )
}
