import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../slices/postSlice";
import platformReducer from "../slices/platformSlice";

export const store = configureStore({

    reducer:{

        posts:postReducer,

        platform:platformReducer

    }

});