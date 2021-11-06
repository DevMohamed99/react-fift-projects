import styled from "styled-components";

function sectionHeading({ textHeading, mT, mB }) {
    return (
        <Header textHeading={textHeading} marginTop={mT} marginBottom={mB}>
            {textHeading}
        </Header>
    );
}

export default sectionHeading;

const Header = styled.h1`
    width: 80%;
    margin: 0 auto;
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    text-align: center;
    font-size: clamp(1.5rem, 6vw, 5rem);
    font-family: "Montserrat";
    letter-spacing: 0.2rem;
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    color: var(--grey-700);
    &:before {
        content: "${(props) => props.textHeading}";
        font-family: "Montserrat";
        left: 2%;
        top: -20%;
        width: 100%;
        position: absolute;
        text-align: center;
        color: transparent;
        letter-spacing: 0.2rem;
        -webkit-text-stroke: 1.5px var(--grey-300);
        z-index: -1;
    }
`;
