import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./myslice"
const store=configureStore({
    reducer:{
        "mytest":testReducer

    }
})
export default store
