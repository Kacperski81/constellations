import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {constellations} from "../../constellationsInfo"

export default function Map() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [mapUrl, setMapUrl] = useState('');

    const mapElement = constellations.filter(item => item.name === searchParams.get("constellation")).map(item => (
        <img key={item.value} src={item.imageSrc} />
    ))

    return (
        <>
            <h1>{searchParams.get("constellation")} constellation</h1>

            {mapElement}
        </>
        
    )
}