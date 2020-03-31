import { createAction, ActionType, createReducer } from "typesafe-actions";

// Actions
export const START = "timer/START";

export const start = createAction(START)();

// Types
export const actions = { start };
type TimerAction = ActionType<typeof actions>;
type TimerState = {
  count: number;
};

const initialState: TimerState = {
  count: 0
};

// Reducer
const status = createReducer<TimerState, TimerAction>(initialState, {});

export default status;
