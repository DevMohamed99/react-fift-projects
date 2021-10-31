import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
    Group,
    Chat,
    HelpOutline,
    TurnedInNot,
    LocalHospital,
    ExpandMoreOutlined,
    WorkOutline,
} from "@mui/icons-material";
import { setMenuState, getAllStates } from "../../../features/components/useMenuState";

function LeftSide() {
    const dispatch = useDispatch();
    // get all states menu
    const allStatesMenu = useSelector(getAllStates);
    // get active menu item
    const isActiveMenuItem = () => {
        for (const activeItem in allStatesMenu) {
            if (allStatesMenu[activeItem] === true) {
                return activeItem;
            }
        }
    };
    const payloadState = { activeState: isActiveMenuItem(), currentState: "" };
    // a function for updating a state menu item
    const changeStateMenu = (state, currentState) => {
        if (!state) {
            payloadState.currentState = currentState;
            dispatch(setMenuState(payloadState));
        }
    };

    return (
        <MainLeftSide>
            <LeftSideRow
                Icon={LocalHospital}
                title="Covid-19 Info"
                Color={"var(--red-dark)"}
                onclick={() => changeStateMenu(allStatesMenu.stateCV19, "stateCV19")}
                isActive={allStatesMenu.stateCV19}
            />
            <LeftSideRow
                Icon={WorkOutline}
                title="Jobs"
                Color={"var(--orange)"}
                onclick={() => changeStateMenu(allStatesMenu.stateJobs, "stateJobs")}
                isActive={allStatesMenu.stateJobs}
            />
            <LeftSideRow
                Icon={Group}
                title="Groups"
                Color={"var(--blue-600)"}
                onclick={() => changeStateMenu(allStatesMenu.stateGroups, "stateGroups")}
                isActive={allStatesMenu.stateGroups}
            />
            <LeftSideRow
                Icon={Chat}
                title="Messanger"
                Color={"var(--primary-color)"}
                onclick={() => changeStateMenu(allStatesMenu.stateMessanger, "stateMessanger")}
                isActive={allStatesMenu.stateMessanger}
            />
            <LeftSideRow
                Icon={HelpOutline}
                title="Questions"
                Color={"var(--main)"}
                onclick={() => changeStateMenu(allStatesMenu.stateQuestions, "stateQuestions")}
                isActive={allStatesMenu.stateQuestions}
            />
            <LeftSideRow
                Icon={TurnedInNot}
                title="Saved"
                Color={"var(--green-dark)"}
                onclick={() => changeStateMenu(allStatesMenu.stateSaved, "stateSaved")}
                isActive={allStatesMenu.stateSaved}
            />
            <LeftSideRow Icon={ExpandMoreOutlined} title="Show More" Color={"var(--blue-400)"} />
        </MainLeftSide>
    );
}

function LeftSideRow({ Icon, title, Color, isActive, onclick }) {
    return (
        <SideRow colorSvg={Color} active={isActive} onClick={onclick}>
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
    background-color: ${(props) => (props.active ? "var(--grey-300)" : "transparent")};
    svg {
        width: 30px;
        height: 30px;
        color: ${(props) => props.colorSvg};
    }
    h4 {
        color: ${(props) => props.active && props.colorSvg};
    }
    &:hover {
        background-color: var(--grey-300);
        color: ${(props) => props.colorSvg};
    }
`;
