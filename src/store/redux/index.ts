import counter from "./counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ counter });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
