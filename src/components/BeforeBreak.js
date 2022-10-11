import "./DigitalClock.css";

const BeforeBreak = (props) => {
  const [hours, minutes, seconds] = props.count.split(":");

  return (
    <>
      <div id="st-box">
        <>
          <link
            href="https://fonts.googleapis.com/css?family=Orbitron"
            rel="stylesheet"
            type="text/css"
          ></link>
          <div className="font-Orbitron beforeTimeDate fontChange">
            {" "}
            <strong>
              {props.date} {props.month} {props.year}
            </strong>{" "}
            <br />
            <span>{props.day}</span>
          </div>
          <br />
          <div className="font-Orbitron font-30 fontChange">
            <h2>
              {" "}
              {hours}
              <span className="blink">:</span>
              {minutes}
              <span className="blink">:</span>
              {seconds}
            </h2>
          </div>
        </>
      </div>
      <div>
        <div id="nd-box">
          <div className="margin-top-align">
            <h2 className="font-Orbitron">
              Break Time: <br />
            </h2>
            <h2>{props.children}</h2>
          </div>
        </div>
        <br />

        {/* <div id="rd-box" className="font-Orbitron font-30 fontTimer">
          <div className="margin-top-align"> </div>
        </div> */}
      </div>
    </>
  );
};

export default BeforeBreak;
