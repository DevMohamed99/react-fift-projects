import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stateMenu: {
        stateCV19: true,
        stateJobs: false,
        stateGroups: false,
        stateMessanger: false,
        stateQuestions: false,
        stateSaved: false,
    },
};

const useMenuState = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setMenuState: (state, { payload }) => {
            state.stateMenu = {
                ...state.stateMenu,
                [payload.activeState]: true,
                [payload.currentState]: false,
            };
        },
    },
});

export const { setMenuState } = useMenuState.actions;

export const getStatesMenu = (state) => state.menu.stateMenu;

export const getActiveStateMenu = (state) => {
    const activeState = state.menu.stateMenu;
    for (const activeItem in activeState) {
        if (activeState[activeItem] === true) {
            return activeItem;
        }
    }
};

export default useMenuState.reducer;
