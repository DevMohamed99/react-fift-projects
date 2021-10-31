import React, { useState } from "react";
import styled from "styled-components";

function ReadMore({ text }) {
    const [isShow, setIsShow] = useState(true);

    return (
        <Read>
            {isShow ? text.slice(0, 140) + " ..." : text}          
            <span onClick={() => setIsShow(!isShow)}>{isShow ? "  Show More" : "  Show Less"}</span>
        </Read>
    );
}

export default ReadMore;

const Read = styled.p`
    font-family: "Roboto Mono";
    font-size: 0.9rem;
    color: var(--grey-700);
    margin-bottom: 1rem;
    span {
        color: #49a6e9;
        cursor: pointer;
        font-weight: bold;
    }
`;
