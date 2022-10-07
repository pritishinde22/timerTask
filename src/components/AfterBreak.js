import Counter from "./Counter";
import "./DigitalClock.css";

const AfterBreak = (props) => {
  function hourFormat(hr) {
    let hr1 = parseInt(hr);
    if (hr1 > 12) return hr1 - 12;
    else return hr1;
  }
let [hrs,min]=props.timepicker.split(":");
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
            <label className="font-30">
              {" "}
              {hrs > 12 ? hourFormat(hrs) : hourFormat(hrs)}
              <span className="blink">:</span>
              {min} {hrs > 11 ? <span> PM</span> : <span>AM</span>}
            </label>
            <h2 className="blink">You Are On Break!!</h2>
          </div>
        </>
      </div>
      <div>
        <div id="nd-box" className="font-Orbitron">
          <h1 className="fontChange font-30 margin-top-align">
            Break <br />
            Time
          </h1>
        </div>
        <br />

        <div id="rd-box" className="font-Orbitron font-30 fontTimer">
          <div className="margin-top-align">
            {" "}
            <Counter setTimerOn={props.setTimerOn} timerOn={props.timerOn} />
          </div>
        </div>
      </div>
    </>
  );
};
export default AfterBreak;
