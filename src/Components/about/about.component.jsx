import { useRef } from "react";
import "./about.styles.css";
// import underline from "./llline.svg";
import { motion, useInView } from "framer-motion";
const About = () => {
  const Ref = useRef(null);
  const inView = useInView(Ref, { amount: 0.3 });
  const sendEmail = () => {
    window.location.assign("mailto:medhanshjain2010@gmail.com");
  };
  const animationOnView = {
    hidden: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  const descOnView = {
    hidden: {
      // y: "60vh,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      // y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.8,
      },
    },
  };
  return (
    <div className="aboutSection">
      <div className="mask">
        {/* <img src={underline} className="underline" /> */}
        <motion.h1
          id="about"
          className="manrope"
          variants={animationOnView}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          About Me
        </motion.h1>
      </div>
      <div className="mask" id="aboutDesc" ref={Ref}>
        <motion.div
          className="manrope"
          variants={descOnView}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Hey there! I'm Medhansh Jain, a passionate{" "}
          <span className="underline">front-end</span> web developer delving
          into the dynamic realm of backend technologies. Crafting visually
          appealing and user-friendly interfaces brings me immense satisfaction.
          Beyond coding, I find joy in the thrilling world of sports and the
          soulful notes of music. Currently expanding my skills in backend
          development, I invite you to join me on this exciting journey. Let's
          not only build powerful digital experiences but also share the
          excitement of tech, sports, and melodies.{" "}
          <span id="connect" onClick={sendEmail}>
            Connect
          </span>{" "}
          with me, let's collaborate, and together, let's create something truly
          remarkable!
        </motion.div>
      </div>
    </div>
  );
};

export default About;
