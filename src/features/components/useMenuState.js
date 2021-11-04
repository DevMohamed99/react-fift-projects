import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Menu: {
        stateHome: true,
        statePages: false,
        stateVideos: false,
        stateMarket: false,
        stateFriends: false,
        stateProfile: false,
        stateCV19: false,
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
                [payload.activeState]: false, // * was activeted
                [payload.currentState]: true, // * will be active
            };
          
        },
    },
});

export const { setMenuState } = useMenuState.actions;

export const getAllStates = (state) => state.menuStates.Menu;
export const getActiveMenuItem = (state) => {
    const allStatesMenu = state.menuStates.Menu;
    for (const activeItem in allStatesMenu) {
        if (allStatesMenu[activeItem] === true) {
            return activeItem;
        }
    }
};

export default useMenuState.reducer;
