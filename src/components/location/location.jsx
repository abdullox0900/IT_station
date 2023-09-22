import React from "react";

// Import Style
import {
    LocaitonWrapper,
    LocationBgBox,
    LocationBox,
    LocationSection,
    LocationStart,
    LocationStartH3,
} from "./style";

export default function Location() {
    return (
        <LocationSection>
            <LocationStart>
                <LocationStartH3>Bizning manzil</LocationStartH3>
            </LocationStart>

            <LocaitonWrapper data-aos="zoom-out" data-aos-duration="1400">
                <LocationBgBox>
                </LocationBgBox>

                <LocationBox data-aos="flip-left" data-aos-duration="1800">
                </LocationBox>
            </LocaitonWrapper>
        </LocationSection>
    );
}
