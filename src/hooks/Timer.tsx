import { useEffect, useState } from "react";
import { interval, startWith } from "rxjs";

const numbers = interval(1000).pipe(
    startWith(0)
);

const takeFourNumbers = numbers;

export const useTimer = () => {
  const [timer, setTimer] = useState<number>();

  useEffect(() => {
    const sum = takeFourNumbers.subscribe(setTimer);

    return () => sum.unsubscribe();
  }, []);

  return {timer}
};
