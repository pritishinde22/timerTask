import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AfterBreak from "./AfterBreak";
import BeforeBreak from "./BeforeBreak";

import "./DigitalClock.css";

const DigitalClock = () => {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let month = months[d.getMonth()];
  let day = days[d.getDay()];
  let year = d.getFullYear();
  let date = d.getDate();

  let liveTime = new Date().toLocaleTimeString();
  const [count, setCount] = useState(liveTime);
  const [timepickerValue, setTimepickerValue] = useState();
  const [timerOn, setTimerOn] = useState(false);
  const [timerOff, setTimerOff] = useState(false);

  const [hr, sethr] = useState(timepickerValue?.split(":")[0]);
  const [min, setmin] = useState(timepickerValue?.split(":")[1]);

  const UpdateTime = () => {
    setCount(new Date().toLocaleTimeString());
  };
  setInterval(UpdateTime, 1000);
  const live = count.split(":");
  const livemin = +live[0] * 60 + +live[1];

  const break1 = timepickerValue ? timepickerValue?.split(":") : "";
  const breakmin = timepickerValue ? +break1[0] * 60 + 30 + +break1[1] : "";

  // document.cookie = `breaktime=${timepickerValue}`;
  // let x = document.cookie;
  // console.log(x)
  useEffect(() => {
    if (hr && min) setTimepickerValue(`${hr}:${min}`);
  }, [hr, min]);

  useEffect(() => {
    if (timerOn) {
      localStorage.setItem("timepickerValue", timepickerValue);
    }
  }, [timepickerValue, timerOn]);

  useEffect(() => {
    if (!timepickerValue) {
      let breakTime = localStorage.getItem("timepickerValue");
      setTimepickerValue(breakTime);
    }
  }, [timepickerValue]);

  useEffect(() => {
    if (
      !timerOn &&
      count > timepickerValue &&
      livemin < breakmin &&
      !timerOff
    ) {
      setTimerOn(true);
    }
    if (livemin > breakmin) {
      setTimerOn(false);
    }
  }, [timerOn, count, timerOff, timepickerValue, livemin, breakmin]);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setTimeout(() => {
        setTimerOn(false);
        setTimerOff(true);
        localStorage.removeItem("timepickerValue");
        window.location.reload();
      }, (breakmin - livemin) * 60000);
    } else if (!timerOn) {
      clearTimeout(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn, livemin]);

  function hourFormat(hr) {
    let hr1 = parseInt(hr);
    if (hr1 > 12) return hr1 - 12;
    else return hr1;
  }
  return (
    <section className="">
      {!timerOn ? (
        <>
          <BeforeBreak
            count={count}
            month={month}
            day={day}
            date={date}
            year={year}
          >
            <BreakTimePicker
              timepickerValue={timepickerValue}
              hr={hr}
              min={min}
              sethr={sethr}
              setmin={setmin}
              count={count}
            />
          </BeforeBreak>
        </>
      ) : (
        <AfterBreak
          count={count}
          timepicker={timepickerValue}
          setTimerOn={setTimerOn}
          timerOn={timerOn}
          hourFormat={hourFormat}
          timeRemained={(breakmin - livemin) * 60000}
          month={month}
          day={day}
          date={date}
          year={year}
        />
      )}{" "}
    </section>
  );
};
export default DigitalClock;

export const BreakTimePicker = (props) => {
  const { register, handleSubmit, watch } = useForm();
  const time = props.timepickerValue ? props.timepickerValue?.split(":") : "";

  const onhandleSubmit = (e) => {
    props.sethr(e.hr.toString());
    props.setmin(e.min.toString());
  };
  return (
    <>
      <form onSubmit={handleSubmit(onhandleSubmit)} autoComplete="off">
        <div className="inputbreaktime">
          <input
            type="number"
            name="hr"
            defaultValue={time[0]}
            min={props.count?.split(":")[0]}
            required
            {...register("hr")}
          />{" "}
          <span className="blink">:</span>{" "}
          <input
            type="number"
            name="min"
            defaultValue={time[1]}
            min={
              watch("hr") == props.count?.split(":")[0] ?
              1 + +props.count?.split(":")[1] : null
            }
            max={59}
            required
            {...register("min")}
          />
        </div>
        <button type="submit" className="submitbutton">
          Set Break Time
        </button>
      </form>
    </>
  );
};
