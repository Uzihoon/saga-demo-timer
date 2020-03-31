import { useSelector } from "react-redux";
import { RootState } from "../store/redux";

export default function useCounter() {
  const counter = useSelector((state: RootState) => state.counter);
  return counter;
}
