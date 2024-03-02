import "./App.css";
import { Cursor } from "react-creative-cursor";
import Navbar from "./Components/navbar/navbar.component";
import Hero from "./Components/hero/hero.component";
import About from "./Components/about/about.component";
import "react-creative-cursor/dist/styles.css";
import { Fragment } from "react";

function App() {
  const hasMouse = window.matchMedia("(pointer:fine)").matches;

  return (
    <Fragment>
      <div className="noise"></div>
      <div className="background">
        <div className="rounded one"></div>
        <div className="rounded two"></div>
        <div className="rounded three"></div>
        <div className="rounded four"></div>
      </div>
      <div className="hero">
        {hasMouse && <Cursor isGelly={true} cursorBackgrounColor="purple" />}
        <Navbar />
        <Hero />
      </div>
      <About />
    </Fragment>
  );
}

export default App;
