import {
  take,
  put,
  fork,
  call,
  flush,
  cancel,
  race,
  select,
  delay,
  all
} from "redux-saga/effects";
import { EventChannel, buffers } from "redux-saga";
import * as TimerActions from "../redux/timer";
import { closeChannel, subscribe } from "./channel";
import { RootState } from "../redux";

const getTimerFromStore = (state: RootState) => state.timer;

export function* start() {
  yield put(TimerActions.watch());
}

export function* watcher() {
  while (yield take(TimerActions.watch)) {
    try {
      yield put(TimerActions.setStatus({ status: "play" }));
      const worker = yield fork(connectChannel);
      yield take(TimerActions.stop);
      yield cancel(worker);
    } catch (error) {
      console.error(error);
    } finally {
      yield all([
        put(TimerActions.setStatus({ status: "stop" })),
        put(TimerActions.setCount(0))
      ]);
    }
  }
}

function* connectChannel() {
  let channel: EventChannel<any>;
  try {
    const timer = 1000;
    const buffer = buffers.sliding(1);

    const param = { buffer, timer };
    channel = yield call(subscribe, param);

    while (true) {
      const message = yield flush(channel);
      const store = yield select(getTimerFromStore);
      const count = store.count;
      yield put(TimerActions.setCount(count + 1));
      const { timeout, pause } = yield race({
        timeout: delay(timer),
        pause: take(TimerActions.pause)
      });

      if (pause) {
        yield put(TimerActions.setStatus({ status: "pause" }));
        yield take(TimerActions.restart);
        yield put(TimerActions.setStatus({ status: "play" }));
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    closeChannel(channel!);
  }
}
