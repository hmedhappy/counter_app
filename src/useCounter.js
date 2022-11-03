import React, { useState, useEffect, useCallback } from "react";
import formatSeconds from "./utils/formatSeconds";

export default function useCounter(time) {
  const [timeCount, settimeCount] = useState(time);
  const [counter, setCounter] = useState("0:00");
  const [active, setActive] = useState(false);

  useEffect(() => {
    setCounter(formatSeconds(active ? timeCount || time : time));
  }, [timeCount, time, active]);

  useEffect(() => {
    let interval;
    settimeCount(time);
    if (active) {
      interval = setInterval(() => {
        settimeCount((count) => count - 1);
      }, 1000);
    } else settimeCount(0);

    return () => {
      clearInterval(interval);
    };
  }, [active]);

  const start = () => {
    if (time) setActive(true);
  };

  const reset = () => {
    setActive(false);
  };

  return [start, reset, { counter, age: 34 }, "DOM"];
}
