import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled, { css } from "styled-components";
import React, {useContext} from "react";
import { MobileMenuContext } from "../contexts/mobileMenuContext";

const SiteWrapper = styled.div`
    display: flex;
    // position: relative;
    flex-direction: column;
    min-width: 320px;
    width: 100vw;
    max-width: 480px;
    margin: 0 auto;
    min-height: 100vh;
    background-image: url("../images/mobileBackground.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
`

const MainWrapper = styled.main`
    display: flex;
    background-color: rgba(0,0,0,0.6);
    // margin-top: ${props => props.isMenuOpen ? "115px" : "70px"};
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    flex-grow: 1;
    transition: margin-top 1s ease;
`
    
export default function Layout() {
    const mobileMenuContext = useContext(MobileMenuContext);

    return (
        <SiteWrapper isMenuOpen={mobileMenuContext.state.isMenuOpen}>
            <Header />
            <MainWrapper isMenuOpen={mobileMenuContext.state.isMenuOpen}>
                <Outlet />
            </MainWrapper>
            <Footer />
        </SiteWrapper>
    )
}