import styled from "styled-components";

const FooterElement = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background-color: rgba(0,0,0,0.7);
`

export default function Footer() {
    return (
        <FooterElement>
            <h5>kacperski81@gmail.com</h5>
        </FooterElement>
    )
}