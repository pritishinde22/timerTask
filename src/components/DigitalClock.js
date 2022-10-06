import { useEffect, useState } from "react";
import AfterBreak from "./AfterBreak";
import BeforeBreak from "./BeforeBreak";
import "./DigitalClock.css";

const DigitalClock = () => {
  let liveTime = new Date().toLocaleTimeString();
  const [count, setCount] = useState(liveTime);

  const [timerOn, setTimerOn] = useState(false);
  const [timerOff, setTimerOff] = useState(false);
  const breakTime = "11:37:00";

  const [hrs, min] = breakTime.split(":");

  const UpdateTime = () => {
    setCount(new Date().toLocaleTimeString());
  };
  setInterval(UpdateTime, 1000);

  useEffect(() => {
    if (!timerOn && count > breakTime && !timerOff) {
      setTimerOn(true);
    }
  }, [timerOn, count, timerOff]);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setTimeout(() => {
        setTimerOn(false);
        setTimerOff(true);
      }, 10000);
    } else if (!timerOn) {
      clearTimeout(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  function hourFormat(hr) {
    let hr1 = parseInt(hr);
    if (hr1 > 12) return hr1 - 12;
    else return hr1;
  }
  // console.log("timerOn---", timerOn);
  return (
    <section className="">
      {!timerOn ? (
        <>
          <BeforeBreak count={count} hrs={hrs} min={min} />
        </>
      ) : (
        <AfterBreak
          hrs={hrs}
          min={min}
          setTimerOn={setTimerOn}
          timerOn={timerOn}
          hourFormat={hourFormat}
        />
      )}{" "}
    </section>
  );
};
export default DigitalClock;
