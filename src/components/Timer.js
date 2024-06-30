import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        secondsRemaining > 0 && dispatch({ type: "countdown" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch, secondsRemaining]
  );
  return (
    <div className="timer">
      {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
    </div>
  );
}

export default Timer;
