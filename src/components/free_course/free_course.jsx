import React from 'react'
import { FreeCourseBtnWrapper, FreeCourseBtns, FreeCourseCard, FreeCourseCardBottom, FreeCourseCardBottomButton, FreeCourseCardBottomDollar, FreeCourseCardBottomDollarWrapper, FreeCourseCardBottomH4, FreeCourseCardCenter, FreeCourseCardCenterH5, FreeCourseCardCenterInfo, FreeCourseCardCenterP, FreeCourseCardTop, FreeCourseCardTopImg, FreeCourseCardsWrapper, FreeCourseSection, FreeCourseStart, FreeCourseStartH3 } from './style'

// Import Components
import { Container } from '../container/container'

// Import Images
import FreeCourseCardImgPng from "../../assets/img/free-course-card-img.png"
import FreeCourseLine from "../../assets/svg/free-course-line.svg"


export default function FreeCourse() {
    return (
        <FreeCourseSection>
            <Container>
                <FreeCourseStart>
                    <FreeCourseStartH3>Bepul Online kurslar</FreeCourseStartH3>
                </FreeCourseStart>

                <FreeCourseBtnWrapper>
                    <FreeCourseBtns>all programme</FreeCourseBtns>
                    <FreeCourseBtns>ui/ux design</FreeCourseBtns>
                    <FreeCourseBtns>program  design</FreeCourseBtns>
                    <FreeCourseBtns>program  design</FreeCourseBtns>
                    <FreeCourseBtns>program  design</FreeCourseBtns>
                    <FreeCourseBtns>program  design</FreeCourseBtns>
                </FreeCourseBtnWrapper>

                <FreeCourseCardsWrapper>

                    <FreeCourseCard>
                        <FreeCourseCardTop>
                            <FreeCourseCardTopImg src={FreeCourseCardImgPng} />
                        </FreeCourseCardTop>

                        <FreeCourseCardCenter>
                            <FreeCourseCardCenterP>1 - 28 July 2022</FreeCourseCardCenterP>
                            <FreeCourseCardCenterH5>Product Management Basic - Course</FreeCourseCardCenterH5>
                            <FreeCourseCardCenterInfo>Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</FreeCourseCardCenterInfo>
                        </FreeCourseCardCenter>

                        <FreeCourseCardBottom>
                            <FreeCourseCardBottomDollarWrapper>
                                <FreeCourseCardBottomH4>Belup</FreeCourseCardBottomH4>
                                <FreeCourseCardBottomDollar>$ 500</FreeCourseCardBottomDollar>
                            </FreeCourseCardBottomDollarWrapper>

                            <FreeCourseCardBottomButton>enroll now</FreeCourseCardBottomButton>
                        </FreeCourseCardBottom>
                    </FreeCourseCard>
                    <FreeCourseCard>
                        <FreeCourseCardTop>
                            <FreeCourseCardTopImg src={FreeCourseCardImgPng} />
                        </FreeCourseCardTop>

                        <FreeCourseCardCenter>
                            <FreeCourseCardCenterP>1 - 28 July 2022</FreeCourseCardCenterP>
                            <FreeCourseCardCenterH5>Product Management Basic - Course</FreeCourseCardCenterH5>
                            <FreeCourseCardCenterInfo>Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</FreeCourseCardCenterInfo>
                        </FreeCourseCardCenter>

                        <FreeCourseCardBottom>
                            <FreeCourseCardBottomDollarWrapper>
                                <FreeCourseCardBottomH4>Belup</FreeCourseCardBottomH4>
                                <FreeCourseCardBottomDollar>$ 500</FreeCourseCardBottomDollar>
                            </FreeCourseCardBottomDollarWrapper>

                            <FreeCourseCardBottomButton>enroll now</FreeCourseCardBottomButton>
                        </FreeCourseCardBottom>
                    </FreeCourseCard>
                    <FreeCourseCard>
                        <FreeCourseCardTop>
                            <FreeCourseCardTopImg src={FreeCourseCardImgPng} />
                        </FreeCourseCardTop>

                        <FreeCourseCardCenter>
                            <FreeCourseCardCenterP>1 - 28 July 2022</FreeCourseCardCenterP>
                            <FreeCourseCardCenterH5>Product Management Basic - Course</FreeCourseCardCenterH5>
                            <FreeCourseCardCenterInfo>Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</FreeCourseCardCenterInfo>
                        </FreeCourseCardCenter>

                        <FreeCourseCardBottom>
                            <FreeCourseCardBottomDollarWrapper>
                                <FreeCourseCardBottomH4>Belup</FreeCourseCardBottomH4>
                                <FreeCourseCardBottomDollar>$ 500</FreeCourseCardBottomDollar>
                            </FreeCourseCardBottomDollarWrapper>

                            <FreeCourseCardBottomButton>enroll now</FreeCourseCardBottomButton>
                        </FreeCourseCardBottom>
                    </FreeCourseCard>

                </FreeCourseCardsWrapper>
            </Container>
        </FreeCourseSection>
    )
}
