import { useSelector } from "react-redux";
import { RootState } from "../../store/redux";
import { TimerKey } from "../../store/redux/timer";

export default function useTimer(key: TimerKey) {
  const timer = useSelector((state: RootState) => state.timer[key]);
  return timer;
}
