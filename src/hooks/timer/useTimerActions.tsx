import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { actions } from "../../store/redux/timer";

export default function useTimerActions() {
  const dispatch = useDispatch();

  const onStart = useCallback(() => dispatch(actions.start()), [dispatch]);

  return { onStart };
}
