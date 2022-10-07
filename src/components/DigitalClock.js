import { useEffect, useState } from "react";
import AfterBreak from "./AfterBreak";
import BeforeBreak from "./BeforeBreak";

import TimePicker from "react-time-picker";
import "./DigitalClock.css";

const DigitalClock = () => {
  let liveTime = new Date().toLocaleTimeString();
  const [count, setCount] = useState(liveTime);
  const [timepickerValue, setTimepickerValue] = useState();
  const [timerOn, setTimerOn] = useState(false);
  const [timerOff, setTimerOff] = useState(false);

  const UpdateTime = () => {
    setCount(new Date().toLocaleTimeString());
  };
  setInterval(UpdateTime, 1000);
  const live = count.split(":");
  const livemin = live[0] * 60 + live[1];

  const break1 = timepickerValue ? timepickerValue?.split(":") : "";
  const breakmin = timepickerValue ? break1[0] * 60 + 30 + break1[1] : "";

  useEffect(() => {
    if (
      !timerOn &&
      count > timepickerValue &&
      livemin < breakmin &&
      !timerOff
    ) {
      setTimerOn(true);
    }
    if(livemin > breakmin)
    {
      setTimerOn(false);
    }
  }, [timerOn, count, timerOff]);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setTimeout(() => {
        setTimerOn(false);
        setTimerOff(true);
      }, 1800000);
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
  return (
    <section className="">
      {!timerOn ? (
        <>
          <BeforeBreak count={count}>
            {" "}
            <TimePicker
              onChange={setTimepickerValue}
              value={timepickerValue}
              clockIcon={null}
              clearIcon={null}
              clearAriaLabel={null}
              onClockOpen={undefined}
              minTime={new Date()}
            />
          </BeforeBreak>
        </>
      ) : (
        <AfterBreak
          timepicker={timepickerValue}
          setTimerOn={setTimerOn}
          timerOn={timerOn}
          hourFormat={hourFormat}
        />
      )}{" "}
    </section>
  );
};
export default DigitalClock;
