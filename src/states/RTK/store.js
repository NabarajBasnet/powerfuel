import { configureStore } from "@reduxjs/toolkit";
import mainReducer from './mainSlicer'

const store = configureStore({
    reducer: {
        rtkreducers: mainReducer
    }
});

export default store;
