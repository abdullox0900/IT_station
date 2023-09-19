import React from "react";
import {
    LocaitonWrapper,
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
                <LocationBox>
                  
                </LocationBox>
            </LocaitonWrapper>
        </LocationSection>
    );
}
