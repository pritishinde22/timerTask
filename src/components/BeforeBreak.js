import "./DigitalClock.css";

const BeforeBreak = (props) => {
  const [hours, minutes, seconds] = props.count.split(":");

  function hourFormat(hr) {
    let hr1 = parseInt(hr);
    if (hr1 > 12) return hr1 - 12;
    else return hr1;
  }

  return (
    <>
      <div id="st-box">
        <>
          <link
            href="https://fonts.googleapis.com/css?family=Orbitron"
            rel="stylesheet"
            type="text/css"
          ></link>
          <div className="font-Orbitron font-30 fontBis">
            <h1>
              {" "}
              {hours > 12 ? hourFormat(hours) : hourFormat(hours)}
              <span className="blink">:</span>
              {minutes}
              <span className="blink">:</span>
              {seconds} {hours > 11 ? <span> PM</span> : <span>AM</span>}
            </h1>
          </div>
        </>
      </div>
      <div>
        <div id="nd-box" className="font-size">
          <div className="margin-top-align">
            <h2 className="font-Orbitron">
              Break Time: <br />
            </h2>
            <h1 >{props.children}</h1>
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
