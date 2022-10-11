import Counter from "./Counter";
import "./DigitalClock.css";

const AfterBreak = (props) => {
  const [hours, minutes, seconds] = props.count.split(":");

  let [hrs, min] = props.timepicker.split(":");
  return (
    <>
      <div id="st-box">
        <>
          <link
            href="https://fonts.googleapis.com/css?family=Orbitron"
            rel="stylesheet"
            type="text/css"
          ></link>
          <div className="font-Orbitron fontChange">
            <h1>
            <strong>
              {props.date} {props.month} {props.year}
            </strong>
            <br />
            <span>{props.day}</span></h1>
          </div>
          <div className="font-Orbitron fontChange">
            <h2 className="font-30">
              {" "}
              {hours}
              <span className="blink">:</span>
              {minutes}
              <span className="blink">:</span>
              {seconds}
            </h2>
            <h3 className="blink">You Are On Break!!</h3>
          </div>
        </>
      </div>
      <div>
        <div id="nd-box" className="font-Orbitron">
          <h2 className="font-25 margin-top-align">
            Break <br />
            Time!
          </h2>
          <strong className="font-25">{props.timepicker}</strong>
        </div>
        <br />

        <div id="rd-box" className="font-Orbitron font-30 fontTimer">
          <div className="margin-top-align">
            {" "}
            <Counter
              setTimerOn={props.setTimerOn}
              timerOn={props.timerOn}
              timeRemained={props.timeRemained}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AfterBreak;
