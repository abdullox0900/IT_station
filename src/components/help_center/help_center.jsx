import React from 'react'

// Import Style
import { HelpBox, HelpBoxH2, HelpBoxLeft, HelpBoxP, HelpBoxRight, HelpBoxRightBox, HelpBoxRightBoxInput, HelpBoxRightBoxInputBtn, HelpBoxRightBoxInputWrapper, HelpSection, HelpWrapper } from './style'


export default function HelpCenter() {
    return (
        <HelpSection>
            <HelpWrapper>
                <HelpBox data-aos="zoom-out" data-aos-duration="1400">
                    <HelpBoxLeft>
                        <HelpBoxH2>Kasb tanlashdagi birinchi yordamni beramiz!</HelpBoxH2>
                        <HelpBoxP>Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz</HelpBoxP>
                    </HelpBoxLeft>

                    <HelpBoxRight>
                        <HelpBoxRightBox>

                            <HelpBoxRightBoxInputWrapper>
                                <HelpBoxRightBoxInput placeholder='Ismingiz' type='name' />
                                <HelpBoxRightBoxInput placeholder='Telefon raqamingiz' type='name' />
                            </HelpBoxRightBoxInputWrapper>

                            <HelpBoxRightBoxInputBtn>Jo'natish</HelpBoxRightBoxInputBtn>
                        </HelpBoxRightBox>
                    </HelpBoxRight>
                </HelpBox>
            </HelpWrapper>
        </HelpSection>
    )
}
