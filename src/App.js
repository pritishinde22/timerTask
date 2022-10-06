import DigitalClock from "./components/DigitalClock";
import "./App.css";
function App() {
  return (
    <div>
      <header className="header">CLOCK</header>
      <br />
      <section className="container">
        <DigitalClock />
      </section>
    </div>
  );
}

export default App;
