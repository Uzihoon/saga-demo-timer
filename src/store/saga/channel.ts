import { EventChannel, Buffer, eventChannel, buffers } from "redux-saga";

interface ISubscibe {
  buffer: Buffer<any>;
  timer: number;
}

export function subscribe(param: ISubscibe) {
  const { buffer, timer } = param;

  return eventChannel<number>(emit => {
    const iv = setInterval(() => {
      emit(+timer);
    }, timer);

    return () => {
      clearInterval(iv);
    };
  }, buffer || buffers);
}

export function closeChannel(channel: EventChannel<any>) {
  if (channel) channel.close();
}
