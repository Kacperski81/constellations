import { useSearchParams } from "react-router-dom";
import {constellations} from "../../constellationsInfo";
import styled from "styled-components";

const Wrapper = styled.div`
    border-right: 1px solid rgba(255,255,255,0.2);
    border-left: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    font-size: 1rem;
    margin: 0px 3px;
    padding: .5em .5em;
    text-align: justify;
`

const P = styled.p`
    padding: .2em;
    margin: .4em 0;
`

export default function Info() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const constellationInfoElement = constellations.filter(item => {
        if(searchParams.get("constellation")) {
            return item.name.toLowerCase() === searchParams.get("constellation").toLowerCase();
        }}).map(item => (
        <Wrapper key={item.name} isActive>
            {/* <h2>{item.name}</h2> */}
            <P>{item.shape}</P>
            <img src={item.imageSrc} />
            <P>{item.info}</P>
            {/* <p>Brightest stars:</p>
            {item.brightestStars.map((star,index) => (<p key={index}>{star}</p>))}
            <p>Interesting objects:</p>
            {item.interestingObjects.map((obj,index) => (<p key={index}>{obj}</p>))}
            <p>Right ascension: {item.rightAscension}</p>
            <p>Declination: {item.declination}</p>
            <p>Area: {item.area}</p> */}
        </Wrapper>
    ))
    return (
        <>
            {constellationInfoElement}
        </>

    )
}