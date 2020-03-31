import timer from "./timer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ timer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
