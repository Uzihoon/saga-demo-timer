import { put, delay } from "redux-saga/effects";
import * as CounterActions from "../redux/counter";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * plusRandom
 * Counter Store에서 counter 값을 가져와 random 값을 더한 후 저장
 */

export function* plusRandom() {
  try {
    const num = getRandomInt(1, 20);
    yield put(CounterActions.plus({ num }));
  } catch (error) {
    console.error(error);
  }
}

/**
 * plusAfterOneSeconds
 * 1초 후 plusRandom 액션 발행
 */

export function* plusAfterOneSeconds() {
  try {
    yield delay(1000);
    yield put(CounterActions.plusRandom());
  } catch (error) {
    console.error(error);
  }
}
