import { takeEvery, all, fork } from "redux-saga/effects";

// Saga
import * as TimerSaga from "./timer";

// Reducer
import * as TimerActions from "../redux/timer";

export default function* rootSaga() {
  // Root Saga
  yield all([fork(handleTimer)]);
}

function* handleTimer() {
  yield takeEvery(TimerActions.start, TimerSaga.start);
}
