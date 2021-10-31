import React from "react";
import styled from "styled-components";

import {
    Group,
    Chat,
    HelpOutline,
    TurnedInNot,
    LocalHospital,
    ExpandMoreOutlined,
    WorkOutline,
} from "@mui/icons-material";

function LeftSide() {
    return (
        <MainLeftSide>
            <LeftSideRow Icon={LocalHospital} title="Covid-19 Info" Color={"var(--red-dark)"} />
            <LeftSideRow Icon={WorkOutline} title="Jobs" Color={"var(--orange)"} />
            <LeftSideRow Icon={Group} title="Groups" Color={"var(--blue-600)"} />
            <LeftSideRow Icon={Chat} title="Messanger" Color={"var(--primary-color)"} />
            <LeftSideRow Icon={HelpOutline} title="Questions" Color={"var(--main)"} />
            <LeftSideRow Icon={TurnedInNot} title="Saved" Color={"var(--green-dark)"} />
            <LeftSideRow Icon={ExpandMoreOutlined} title="Show More" Color={"var(--blue-400)"} />
        </MainLeftSide>
    );
}

function LeftSideRow({ Icon, title, Color }) {
    return (
        <SideRow colorSvg={Color}>
            {Icon && <Icon />}
            <h4>{title}</h4>
        </SideRow>
    );
}

export default LeftSide;

const MainLeftSide = styled.div`
    padding: 1.3rem 0.6rem;
    border-right: 2px solid var(--grey-300);
`;

//Left Side Row
const SideRow = styled.div`
    width: auto;
    display: flex;
    padding: 0.6rem 2rem;
    border-radius: 33px;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.7rem;
    font-family: "Inconsolata";
    font-weight: 100;
    letter-spacing: 0.1rem;
    cursor: pointer;
    svg {
        width: 30px;
        height: 30px;
        color: ${(props) => props.colorSvg};
    }

    &:hover {
        background-color: var(--grey-300);
        color: ${(props) => props.colorSvg};
    }
`;
