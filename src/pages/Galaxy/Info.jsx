import { useSearchParams } from "react-router-dom";
import {constellations} from "../../constellationsInfo";
import styled from "styled-components";

const Wrapper = styled.div`
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    font-size: 1rem;
    margin: 0px 3px;
    padding: .5em .5em;
    text-align: justify;
    
`

export default function Info() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const constellationInfoElement = constellations.filter(item => {
        if(searchParams.get("constellation")) {
            return item.name.toLowerCase() === searchParams.get("constellation").toLowerCase();
        }}).map(item => (
        <Wrapper key={item.name} isActive>
            {/* <h2>{item.name}</h2> */}
            <p>{item.shape}</p>
            <img src={item.imageSrc} />
            <p>{item.info}</p>
            <p>Brightest stars:</p>
            {item.brightestStars.map((star,index) => (<p key={index}>{star}</p>))}
            <p>Interesting objects:</p>
            {item.interestingObjects.map((obj,index) => (<p key={index}>{obj}</p>))}
            <p>Right ascension: {item.rightAscension}</p>
            <p>Declination: {item.declination}</p>
            <p>Area: {item.area}</p>
        </Wrapper>
    ))
    return (
        <>
            {constellationInfoElement}
        </>

    )
}