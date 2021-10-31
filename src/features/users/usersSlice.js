import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        isLogged: true,
        name: "",
        profilePic: "",
    },
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userState: (state, { payload }) => {
            state.user.isLogged = payload.isLogged;
            state.user.name = payload.name;
            state.user.profilePic= payload.profilePic;
        },
        userLogged: (state, { payload }) => {
            state.user.isLogged = payload.isLogged;
        }
    },
});

export const { userState, userLogged } = usersSlice.actions;

export const getLoginState = (state) => state.users.user.isLogged;
export const getName = (state) => state.users.user.name;
export const getProfilePic = (state) => state.users.user.profilePic;

export default usersSlice.reducer;
