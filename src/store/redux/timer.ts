import { createAction, ActionType, createReducer } from "typesafe-actions";

export type Status = "stop" | "pause" | "play";
export interface ISetStatus {
  status: Status;
}

// Actions
export const START = "timer/START";
export const PAUSE = "timer/PAUSE";
export const STOP = "timer/STOP";
export const WATCH = "timer/WATHC";
export const RESTART = "timer/RESTART";
export const SET_STATUS = "timer/SET_STATUS";
export const SET_COUNT = "timer/SET_COUNT";

export const start = createAction(START)();
export const watch = createAction(WATCH)();
export const pause = createAction(PAUSE)();
export const stop = createAction(STOP)();
export const restart = createAction(RESTART)();
export const setStatus = createAction(SET_STATUS)<ISetStatus>();
export const setCount = createAction(SET_COUNT)<number>();

export const actions = {
  start,
  watch,
  pause,
  stop,
  restart,
  setStatus,
  setCount
};
// Types
type TimerAction = ActionType<typeof actions>;
type TimerState = {
  status: Status;
  count: number;
};
export type TimerKey = keyof TimerState;

const initialState: TimerState = {
  status: "stop",
  count: 0
};

// Reducer
const status = createReducer<TimerState, TimerAction>(initialState, {
  [SET_STATUS]: (state, action) => {
    const { status } = action.payload;
    const _state = { ...state, status };
    return _state;
  },
  [SET_COUNT]: (state, action) => {
    const { payload: count } = action;
    const _state = { ...state, count };
    return _state;
  }
});

export default status;
