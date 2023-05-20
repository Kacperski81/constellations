import styled from "styled-components";

const ToggleButton = styled.button`
    background: none;
    border: none;
    padding: 1em;
`

const Hamburger = styled.span`
    display: block;
    position: relative;
    width: 2em;
    height: 3px;
    border-radius: 1em;
    background-color: #fff;

    &:before {
        content: "";
        width: 2em;
        height: 3px;
        border-radius: 1em;
        background-color: #fff;
        position: absolute;
        top: 6px;
        left: 0;
        right: 0;
    }

    &:after {
        content: "";
        width: 2em;
        height: 3px;
        border-radius: 1em;
        background-color: #fff;
        position: absolute;
        bottom: 6px;
        left: 0;
        right: 0;
    }
`

export default function ToggleMenuButton({onClick}) {

    return (
        <ToggleButton onClick={onClick}>
            <Hamburger></Hamburger>
        </ToggleButton>
    )
}