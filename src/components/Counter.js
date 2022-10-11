import React, { useEffect, useState } from "react";
import "./DigitalClock.css";
const Counter = (props) => {
  const [time, setTime] = useState(props.timeRemained);

  useEffect(() => {
    if (time < 0) {
      setTime(0);
    }
  }, [time]);

  useEffect(() => {
    let interval = null;

    if (props.timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 10);
      }, 10);
    } else if (!props.timerOn) {
      clearInterval(interval);
      
    }
    return () => clearInterval(interval);
  }, [props]);

  return (
    <div>
      {props.timerOn && (
      <>
        <label>
          <span>
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
            <span className="blink">:</span>
          </span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </label>
        <br />
        <span>remaining</span>
      </>
      )} 
    </div>
  );
};

export default Counter;
