import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./silice/counterSlice"
export default configureStore({
    reducer:{
        counter: counterReducer
    }
})