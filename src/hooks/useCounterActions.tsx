import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { actions, IPlus } from "../store/redux/counter";

export default function useCounterActions() {
  const dispatch = useDispatch();

  const onPlus = useCallback((param: IPlus) => dispatch(actions.plus(param)), [
    dispatch
  ]);
  const onMinus = useCallback(() => dispatch(actions.minus()), [dispatch]);
  const onPlusRandom = useCallback(() => dispatch(actions.plusRandom()), [
    dispatch
  ]);
  const onPlusAfterOneSeconds = useCallback(
    () => dispatch(actions.plusAfterOneSeconds()),
    [dispatch]
  );

  return { onPlus, onMinus, onPlusRandom, onPlusAfterOneSeconds };
}
