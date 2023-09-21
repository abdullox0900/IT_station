// Import Hooks
import React, { useState } from 'react';

// Import Style
import { NavbarButton, NavbarHamburgerBtn, NavbarHamburgerList, NavbarHamburgerSpan, NavbarHamburgerSpanWrapper, NavbarItem, NavbarList, NavbarLogo, NavbarLogoImg, NavbarSection, NavbarWrapper } from './style'

// Import Images
import NavbarBrand from "../../assets/img/ItStation-logo.png"

// Import Prime React
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";


export default function Navbar() {

    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <NavbarSection>
            <NavbarWrapper>
                <NavbarLogo>
                    <NavbarLogoImg src={NavbarBrand} alt='Logo' />
                </NavbarLogo>

                <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                    <NavbarHamburgerList>
                        <NavbarLogoImg src={NavbarBrand} alt='Logo' />
                        <NavbarItem>Kurslar</NavbarItem>
                        <NavbarItem>Blog</NavbarItem>
                        <NavbarItem>Contact</NavbarItem>
                        <NavbarItem>Blog</NavbarItem>
                        <NavbarButton>Login</NavbarButton>
                    </NavbarHamburgerList>
                </Sidebar>

                <NavbarList>
                    <NavbarItem>Kurslar</NavbarItem>
                    <NavbarItem>Blog</NavbarItem>
                    <NavbarItem>Contact</NavbarItem>
                    <NavbarButton>Login</NavbarButton>
                </NavbarList>

                <NavbarHamburgerBtn onClick={() => setVisibleRight(true)}>
                    <NavbarHamburgerSpanWrapper>
                        <NavbarHamburgerSpan></NavbarHamburgerSpan>
                        <NavbarHamburgerSpan></NavbarHamburgerSpan>
                        <NavbarHamburgerSpan></NavbarHamburgerSpan>
                    </NavbarHamburgerSpanWrapper>
                </NavbarHamburgerBtn>

            </NavbarWrapper>
        </NavbarSection>
    )
}
