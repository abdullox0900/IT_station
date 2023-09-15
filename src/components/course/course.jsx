import React from 'react'

// Import Style
import { CourseCard, CourseCardLeft, CourseCardLeftButton, CourseCardLeftInfo, CourseCardLeftName, CourseCardRight, CourseCardRightImg, CourseSection, CourseStart, CourseStartH3, CourseWrapper } from './style'

// Import Images
import CourseCardImg from "../../assets/svg/course-card-img.svg"

export default function Course() {
    return (
        <CourseSection>
                <CourseStart>
                    <CourseStartH3>Yo'nalishlar bo'yicha kurslar</CourseStartH3>
                </CourseStart>

                <CourseWrapper>
                    
                    <CourseCard>
                        <CourseCardLeft>
                            <CourseCardLeftName>Dasturlash foundation</CourseCardLeftName>
                            <CourseCardLeftInfo>Foundation dasturlash kursida C va Python
                                dasturlash tillari va ular orqali dasturlashning
                                mantiq-mohiyati o'rgatiladi. Kurs davomida
                                dasturlashning fundamental tushunchalari,
                                dasturchining ishini yengillashtirib beradigan</CourseCardLeftInfo>
                            <CourseCardLeftButton>Dasturlash</CourseCardLeftButton>
                        </CourseCardLeft>

                        <CourseCardRight>
                            <CourseCardRightImg src={CourseCardImg} alt='Network error'/>
                        </CourseCardRight>
                    </CourseCard>

                    <CourseCard>
                        <CourseCardLeft>
                            <CourseCardLeftName>Dasturlash foundation</CourseCardLeftName>
                            <CourseCardLeftInfo>Foundation dasturlash kursida C va Python
                                dasturlash tillari va ular orqali dasturlashning
                                mantiq-mohiyati o'rgatiladi. Kurs davomida
                                dasturlashning fundamental tushunchalari,
                                dasturchining ishini yengillashtirib beradigan</CourseCardLeftInfo>
                            <CourseCardLeftButton>Dasturlash</CourseCardLeftButton>
                        </CourseCardLeft>

                        <CourseCardRight>
                            <CourseCardRightImg src={CourseCardImg} alt='Network error'/>
                        </CourseCardRight>
                    </CourseCard>

                    <CourseCard>
                        <CourseCardLeft>
                            <CourseCardLeftName>Dasturlash foundation</CourseCardLeftName>
                            <CourseCardLeftInfo>Foundation dasturlash kursida C va Python
                                dasturlash tillari va ular orqali dasturlashning
                                mantiq-mohiyati o'rgatiladi. Kurs davomida
                                dasturlashning fundamental tushunchalari,
                                dasturchining ishini yengillashtirib beradigan</CourseCardLeftInfo>
                            <CourseCardLeftButton>Dasturlash</CourseCardLeftButton>
                        </CourseCardLeft>

                        <CourseCardRight>
                            <CourseCardRightImg src={CourseCardImg} alt='Network error'/>
                        </CourseCardRight>
                    </CourseCard>

                    <CourseCard>
                        <CourseCardLeft>
                            <CourseCardLeftName>Dasturlash foundation</CourseCardLeftName>
                            <CourseCardLeftInfo>Foundation dasturlash kursida C va Python
                                dasturlash tillari va ular orqali dasturlashning
                                mantiq-mohiyati o'rgatiladi. Kurs davomida
                                dasturlashning fundamental tushunchalari,
                                dasturchining ishini yengillashtirib beradigan</CourseCardLeftInfo>
                            <CourseCardLeftButton>Dasturlash</CourseCardLeftButton>
                        </CourseCardLeft>

                        <CourseCardRight>
                            <CourseCardRightImg src={CourseCardImg} alt='Network error'/>
                        </CourseCardRight>
                    </CourseCard>

                </CourseWrapper>
        </CourseSection>
    )
}
