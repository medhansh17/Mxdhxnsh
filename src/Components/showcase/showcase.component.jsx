import "./showcase.styles.css";
import About from "../about/about.component";
import { motion, useScroll, useTransform } from "framer-motion";
const Showcase = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  return (
    <motion.div style={{ scaleX: scale }} className="showcaseContainer">
      <div className="rounded showcaseOne"></div>
      <div className="rounded showcaseTwo"></div>
      <About />
    </motion.div>
  );
};

export default Showcase;
