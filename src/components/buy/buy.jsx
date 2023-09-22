import React from 'react'

// Import Style
import { BuyBox, BuyBoxLeftBtn, BuyBoxLeftH2, BuyBoxLeftInfoWrapper, BuyBoxLeftP, BuyBoxLeftStar, BuySection, BuyWrapper } from './style'

// Import Images
import BuyStar from "../../assets/svg/buy-star.svg"

export default function buy() {
    return (
        <BuySection>
            <BuyWrapper>
                <BuyBox data-aos="zoom-out" data-aos-duration="1400">
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
                </BuyBox>
            </BuyWrapper>
        </BuySection>
    )
}
