import { combineReducers } from "redux";
import mainReducer from "./reducers";

const rootReducer = combineReducers ({
    main: mainReducer
})

export default rootReducer