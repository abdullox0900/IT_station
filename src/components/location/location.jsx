import React from "react";
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

            <LocaitonWrapper>
                <LocationBgBox>
                </LocationBgBox>

                <LocationBox>
                </LocationBox>
            </LocaitonWrapper>
        </LocationSection>
    );
}
