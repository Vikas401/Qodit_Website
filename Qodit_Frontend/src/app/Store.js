import { configureStore } from "@reduxjs/toolkit";
import UserAuthReducer from "./UserAuth";

export default configureStore({
    reducer:{
        user:UserAuthReducer,
    }
})