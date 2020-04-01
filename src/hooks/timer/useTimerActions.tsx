import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { actions } from "../../store/redux/timer";

export default function useTimerActions() {
  const dispatch = useDispatch();

  const onStart = useCallback(() => dispatch(actions.start()), [dispatch]);

  const onStop = useCallback(() => dispatch(actions.stop()), [dispatch]);

  const onPause = useCallback(() => dispatch(actions.pause()), [dispatch]);

  const onRestart = useCallback(() => dispatch(actions.restart()), [dispatch]);

  return { onStart, onStop, onPause, onRestart };
}
