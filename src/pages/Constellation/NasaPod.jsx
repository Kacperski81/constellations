import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getSpaceObjectInfoFromTitle,getSpaceObjectInfoFormExplanation } from "../../nasaData";

const NasaWrapper = styled.div`
    border-right: 1px solid rgba(255,255,255,0.2);
    // border-top: 1px solid rgba(255,255,255,0.2);
    border-left: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    font-size: 1rem;
    margin: 0 3px;
    padding: 1em;
`

const PictureWrapper = styled.div`

`

const H3 = styled.h3`
    text-align: center;
    margin-bottom: .5em;
`
const P = styled.p`
    margin-bottom: .5em;
    text-align: justify;
`

const Span = styled.span`

    &:hover {
        cursor: pointer;
    }
`

export default function NasaPod() {
    const [searchParams,setSearchParams] = useSearchParams();
    // console.log("Title: " + getSpaceObjectInfoFromTitle(searchParams.get("constellation")).length);
    // console.log("Explanation: " + getSpaceObjectInfoFormExplanation(searchParams.get("constellation")).length);

    const pictureOfDayTitleElement = getSpaceObjectInfoFromTitle(searchParams.get("constellation"))
        .filter(item => item.media_type === "image")
        .map(item => (
            <PictureWrapper key={item.date}>
                <H3>{item.title}</H3>
                <img src={item.url} />
                <P>{item.explanation.slice(0,45)} <Span onClick={() => console.log(item)}>...</Span></P>
            </PictureWrapper>
        ))
    
    const pictureOfDayExplanationElement = getSpaceObjectInfoFormExplanation(searchParams.get("constellation"))
        .filter(item => item.media_type === "image")
        .map(item => (
            <PictureWrapper key={item.date}>
                <H3>{item.title}</H3>
                <img src={item.url} />
                <P>{item.explanation}</P>
            </PictureWrapper>
        ))

    return (
        <NasaWrapper>
            {pictureOfDayTitleElement}
            {pictureOfDayExplanationElement}
        </NasaWrapper>
    )
}