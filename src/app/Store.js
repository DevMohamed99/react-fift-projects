import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/usersSlice";
import useMenuReducer from "../features/components/useMenuState"

export const store = configureStore({
    reducer: {
        users: userReducer,
        menu: useMenuReducer,
    },
})
