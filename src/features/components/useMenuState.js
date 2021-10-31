import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Menu: {
        stateCV19: true,
        stateJobs: false,
        stateGroups: false,
        stateMessanger: false,
        stateQuestions: false,
        stateSaved: false,
    },
};

const useMenuState = createSlice({
    name: "menuStates",
    initialState,
    reducers: {
        setMenuState: (state, { payload }) => {
            state.Menu = {
                ...state.Menu,
                [payload.activeState]: false, // is active
                [payload.currentState]: true, // will be active
            };
            // state.Menu[payload.activeState] = false; // is active
            // state.Menu[payload.currentState] = true; // will be active
        },
    },
});

export const { setMenuState } = useMenuState.actions;

export const getAllStates = (state) => state.menuStates.Menu

export default useMenuState.reducer;
