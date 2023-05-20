import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeWrapper = styled.div`
    padding: 1em;
`

const H1 = styled.h1`
    text-align: center;
    line-height: 1.2;
    margin-bottom: .5em;
`

const P = styled.p`
    text-align: justify;
    margin-bottom: 1em;
`

const Button = styled.p`
    background-color: rgba(255,255,255, 0.3);
    display: flex;
    text-align: center;
    border: none;
    padding: .5em 1em;
    cursor: pointer;
    transition: background-color .5s ease;
    &:hover {
        background-color: rgba(0,0,0, 0.8);
    }
`

export default function Home() {

    return (
        <HomeWrapper>
            <H1>Welcome to the Space Constellations!</H1>
            <P>
                This website allows you to discover the beauty and mysteries of the night sky
                through the maps of each constellation, as well as information about 
                thier stars, objects and history. Additionally, it will showcase stunning
                images from NASA's Picture of the Day API that are related to each constellation, 
                providing inspiration to fuel your curiosity about the universe.
            </P>
            <P>
                This website is the perfect resource for anyone interested in exploring the cosmos
                and embarking on a journey into the stars. Click the "Explore" button below to
                start your journey and uncover the secrets of each constellation.
            </P>
            <Button>
                <Link style={{flexGrow: 1}} to="/constellation">Explore</Link>
            </Button>
        </HomeWrapper>
    )
}