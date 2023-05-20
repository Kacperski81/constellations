import React from "react";
import { MobileMenuContext } from "../contexts/mobileMenuContext";
import ToggleMenuButton from "./ToggleMenuButton";
import TopNavigation from "./TopNavigation";
import styled from "styled-components";
import { useContext } from "react";

const HeaderElement = styled.header`
    background-color: rgba(0,0,0, 0.6);
    // position: sticky;
    // top: 0;
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: ${({isMenuOpen}) => isMenuOpen ? "50px 40px" : "50px 0px"};
    overflow: hidden;
    transition: grid-template-rows 1s ease-in-out;
    z-index: 100;
`

const Title = styled.h1`
    // font-family: 'Roboto Mono', monospace;
    justify-self: center;
`

export default function Header() {
    const {state,dispatch} = useContext(MobileMenuContext)
    const {isMenuOpen} = state;

    const handleClick = () => {
        dispatch({type: "toggleMenu"});
    }

    return (
        <HeaderElement isMenuOpen={isMenuOpen}>
            <ToggleMenuButton onClick={handleClick} />
            <Title>Constellations</Title>
            <TopNavigation />
        </HeaderElement>
    )
}