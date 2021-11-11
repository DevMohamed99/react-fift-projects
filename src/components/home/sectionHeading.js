import styled from "styled-components";

function sectionHeading({ textHeading, mT, mB, clrFront="var(--grey-700)", clrBack="1.5px var(--grey-300)" }) {
    return (
        <Header textHeading={textHeading} marginTop={mT} marginBottom={mB} clrFront={clrFront} clrBack={clrBack}>
            {textHeading}
        </Header>
    );
}

export default sectionHeading;

const Header = styled.h1`
    margin: 0 auto;
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    text-align: center;
    font-size: clamp(1rem, 65vw, 3.1rem);
    font-family: "Montserrat";
    letter-spacing: 0.2rem;
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    color: ${(props) => props.clrFront};
    &:before {
        content: "${(props) => props.textHeading}";
        font-family: "Montserrat";
        left: 1%;
        top: -20%;
        width: 100%;
        position: absolute;
        text-align: center;
        color: transparent;
        letter-spacing: 0.2rem;
        -webkit-text-stroke: ${props => props.clrBack};
        z-index: -1;
    }
    @media (max-width: 600px) {
        font-size: 2.5rem;
        margin-top: 1.5rem;
    }
`;
