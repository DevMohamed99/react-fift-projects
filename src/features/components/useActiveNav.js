import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navBarHeight: {
        Home: 0,
        About: 0,
        Projects: 0,
    },
};

const useActiveNav = createSlice({
    name: "navBar",
    initialState,
    reducers: {
        setNavBarHeight: (state, { payload }) => {
            state.navBarHeight = {
                ...state.navBarHeight,
                [payload.stateName]: payload.stateHeight,
            };
        },
    },
});

// * set states
export const { setNavBarHeight } = useActiveNav.actions;

// * get states
export const getNavBarHeightState = (state) => state.navBar.navBarHeight;

export default useActiveNav.reducer;
