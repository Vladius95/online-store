import { useState, useRef, useEffect, useCallback } from "react";

export type StopwatchSettings = {
  time: number;
  onEnd?: VoidFunction;
  interval?: number;
  autostart?: boolean;
  repeat?: boolean;
};

/**
 * Секундомер
 * @param time промежуток времени в миллисекундах
 * @param onEnd колбэк на завершение отсчета
 * @param interval частота обновления секундомера (tick) в миллисекундах
 * @param autostart стартовать на маунте
 * @param repeat повторять по окончанию отсчета
 */
export function useStopwatch({ time, onEnd, interval = 1000, autostart = false, repeat = false }: StopwatchSettings) {
  const [tick, setTick] = useState(0);

  const intervalId = useRef<number>(-1);
  const prevTime = useRef<number>(0);

  const onReset = useCallback(() => {
    setTick(0);
  }, []);

  const onResume = useCallback(() => {
    prevTime.current = new Date().getTime();

    intervalId.current = window.setInterval(() => {
      setTick(prevTick => {
        const now = new Date().getTime();
        const nextTick = prevTick + now - prevTime.current;

        prevTime.current = now;
        return nextTick;
      });
    }, interval);
  }, [interval]);

  const onStart = useCallback(() => {
    onReset();
    onResume();
  }, [onReset, onResume]);

  const onPause = useCallback(() => {
    window.clearInterval(intervalId.current);
  }, []);

  useEffect(() => {
    autostart && onStart();

    return onPause;
  }, [autostart]);

  useEffect(() => {
    if (tick >= time) {
      onPause();
      onEnd && onEnd();

      repeat && onStart();
    }
  }, [time, tick]);

  return { tick, onStart, onPause, onResume, onReset };
}
