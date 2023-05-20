import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getSpaceObjectInfoFromTitle,getSpaceObjectInfoFormExplanation } from "../../nasaData";

const NasaWrapper = styled.div`
    border-right: 1px solid #fff;
    // border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    font-size: 1rem;
    margin: 0 3px;
    padding: 1em;
`

export default function NasaPod() {
    const [searchParams,setSearchParams] = useSearchParams();
    console.log("Title: " + getSpaceObjectInfoFromTitle(searchParams.get("constellation")).length);
    console.log("Explanation: " + getSpaceObjectInfoFormExplanation(searchParams.get("constellation")).length)
    const pictureOfDayTitleElement = getSpaceObjectInfoFromTitle(searchParams.get("constellation"))
        .map(item => (
            <div key={item.date}>
                <h3>{item.title}</h3>
                <img src={item.url} />
                <p>{item.explanation}</p>
            </div>
        ))
    
    const pictureOfDayExplanationElement = getSpaceObjectInfoFormExplanation(searchParams.get("constellation"))
        .map(item => (
            <div key={item.date}>
                <h3>{item.title}</h3>
                <img src={item.url} />
                <p>{item.explanation}</p>
            </div>
        ))

    return (
        <NasaWrapper>
            {pictureOfDayTitleElement}
            {pictureOfDayExplanationElement}
        </NasaWrapper>
    )
}