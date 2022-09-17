import { useState, useEffect } from "react";

const Timer = ({ setState, min = 0, sec = 0 }) => {
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          setState(false);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <p>00:00</p>
      ) : (
        <p>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      )}
    </div>
  );
};

export default Timer;
