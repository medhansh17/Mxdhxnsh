import { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./hero.styles.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const myVars = {
    initial: { opacity: 0, scaleY: 0 },
    animate: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
        ease: "easeIn",
      },
    },
  };

  const letterVars = {
    initial: { opacity: 0, scaleY: 0 },
    animate: { opacity: 1, scaleY: 1 },
  };

  return (
    <Fragment>
      <div className="heroTitle">
        <motion.div
          variants={myVars}
          initial="initial"
          animate="animate"
          className="primaryTitle six-caps-regular"
        >
          <motion.span
            variants={letterVars}
            whileHover={{ scaleY: 1.2, transition: { duration: 0.001 } }}
          >
            M
          </motion.span>
          <motion.span
            variants={letterVars}
            whileHover={{ scaleY: 1.2, transition: { duration: 0.001 } }}
          >
            E
          </motion.span>
          <motion.span
            variants={letterVars}
            whileHover={{ scaleY: 1.2, transition: { duration: 0.001 } }}
          >
            D
          </motion.span>
          <motion.span
            variants={letterVars}
            whileHover={{ scaleY: 1.2, transition: { duration: 0.001 } }}
          >
            H
          </motion.span>
          <motion.span
            variants={letterVars}
            whileHover={{ scaleY: 1.2, transition: { duration: 0.001 } }}
          >
            A
          </motion.span>
          <motion.span
            variants={letterVars}
            whileHover={{ scaleY: 1.2, transition: { duration: 0.001 } }}
          >
            N
          </motion.span>
          <motion.span
            variants={letterVars}
            whileHover={{ scaleY: 1.2, transition: { duration: 0.001 } }}
          >
            S
          </motion.span>
          <motion.span
            variants={letterVars}
            whileHover={{ scaleY: 1.2, transition: { duration: 0.001 } }}
          >
            H
          </motion.span>
        </motion.div>
        <div className="titleDesc">
          <p>
            HEY, I AM A FRONT-END WEB DEVELOPER SKILLED AT CRAFTING DIGITAL
            EXPERIENCES THAT ARE AESTHETIC, EFFECTIVE, AND PURELY ENGAGING FOR
            USERS.
          </p>
        </div>
      </div>
      {isVisible && (
        <div className="heroFooter">
          <span>Scroll to Explore</span>
        </div>
      )}
    </Fragment>
  );
};

export default Hero;
