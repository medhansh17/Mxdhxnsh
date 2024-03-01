import "./backgroundGrid.styles.css";
import { useState, useEffect } from "react";
const Grid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 1000);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible ? <div className="background"></div> : null;
};

export default Grid;
