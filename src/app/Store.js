import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/usersSlice";
import useMenuReducer from "../features/components/useMenuState";
import useNavBarReducer from "../features/components/useActiveNav";

export const store = configureStore({
    reducer: {
        users: userReducer,
        menuStates: useMenuReducer,
        navBar: useNavBarReducer,
    },
});
