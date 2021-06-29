import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./features/userDetails/userDetailsSlice";

export default configureStore({
    reducer: { userDetails: userDetailsReducer },
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
