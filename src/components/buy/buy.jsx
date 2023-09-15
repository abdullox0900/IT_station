import React from 'react'

// Import Style
import { BuyBox, BuyBoxLeft, BuyBoxLeftBtn, BuyBoxLeftH2, BuyBoxLeftInfoWrapper, BuyBoxLeftP, BuyBoxLeftStar, BuyBoxRight, BuyBoxRightImg, BuySection, BuyWrapper } from './style'

// Import Images
import BuyOpa from "../../assets/img/buy-opa.png"
import BuyStar from "../../assets/svg/buy-star.svg"

export default function buy() {
    return (
        <BuySection>
            <BuyWrapper>
                <BuyBox>
                    <BuyBoxLeft>
                        <BuyBoxLeftH2>It Station blan birga Dasturlashni organing</BuyBoxLeftH2>

                        <BuyBoxLeftInfoWrapper>
                            <BuyBoxLeftStar src={BuyStar} alt='Icon' />
                            <BuyBoxLeftP>Teachers don't get lost in the grid view and have a dedicated Podium space.</BuyBoxLeftP>
                        </BuyBoxLeftInfoWrapper>
                        <BuyBoxLeftInfoWrapper>
                            <BuyBoxLeftStar src={BuyStar} alt='Icon' />
                            <BuyBoxLeftP>Teachers don't get lost in the grid view and have a dedicated Podium space.</BuyBoxLeftP>
                        </BuyBoxLeftInfoWrapper>
                        <BuyBoxLeftInfoWrapper>
                            <BuyBoxLeftStar src={BuyStar} alt='Icon' />
                            <BuyBoxLeftP>Teachers don't get lost in the grid view and have a dedicated Podium space.</BuyBoxLeftP>
                        </BuyBoxLeftInfoWrapper>
                        <BuyBoxLeftInfoWrapper>
                            <BuyBoxLeftStar src={BuyStar} alt='Icon' />
                            <BuyBoxLeftP>Teachers don't get lost in the grid view and have a dedicated Podium space.</BuyBoxLeftP>
                        </BuyBoxLeftInfoWrapper>

                        <BuyBoxLeftBtn>buy now</BuyBoxLeftBtn>
                    </BuyBoxLeft>

                    <BuyBoxRight>
                        <BuyBoxRightImg src={BuyOpa} alt='Opa' />
                    </BuyBoxRight>
                </BuyBox>
            </BuyWrapper>
        </BuySection>
    )
}
