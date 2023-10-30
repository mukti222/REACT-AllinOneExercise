import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './Appreduxtoolkit'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})