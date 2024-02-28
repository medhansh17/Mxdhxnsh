import "./App.css";
import { Cursor } from "react-creative-cursor";
import Navbar from "./Components/navbar/navbar.component";
import "react-creative-cursor/dist/styles.css";
function App() {
  return (
    <div className="Hero">
      <Cursor isGelly={true} cursorBackgrounColor="purple" />
      <Navbar />
      <div className="heroTitle">
        <div className="primaryTitle six-caps-regular">
          <span className="box">M</span>
          <span>E</span>
          <span>D</span>
          <span>H</span>
          <span>A</span>
          <span>N</span>
          <span>S</span>
          <span>H</span>
        </div>
        <div className="titleDesc">
          <p>
            HEY, I AM A FRONT-END WEB DEVELOPER SKILLED AT CRAFTING DIGITAL
            EXPERIENCES THAT ARE AESTHETIC, EFFECTIVE, AND PURELY ENGAGING FOR
            USERS.
          </p>
        </div>
      </div>
      <div className="heroFooter">
        <span>Scroll to Explore</span>
      </div>
    </div>
  );
}

export default App;
