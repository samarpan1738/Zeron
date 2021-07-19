import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./features/userDetails/userDetailsSlice";
import transactionsReducer from "./features/transactions/transactionsSlice";

export default configureStore({
    reducer: { userDetails: userDetailsReducer,transactions:transactionsReducer },
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
