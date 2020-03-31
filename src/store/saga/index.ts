import { takeEvery, all, fork } from "redux-saga/effects";

// Saga
import * as CounterSaga from "./counter";

// Reducer
import * as CounterActions from "../redux/counter";

export default function* rootSaga() {
  // Root Saga
  yield all([fork(handleCounter)]);
}

function* handleCounter() {
  yield takeEvery(
    CounterActions.plusAfterOneSeconds,
    CounterSaga.plusAfterOneSeconds
  );
  yield takeEvery(CounterActions.plusRandom, CounterSaga.plusRandom);
}
