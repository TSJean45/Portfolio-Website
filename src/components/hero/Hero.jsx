import "./hero.scss";
import { motion } from "framer-motion";

export const Hero = () => {
  const textVariants = {
    initial:{
      x: -500,
      opacity:0
    },
    animate: {
      x:0,
      opacity:1,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    }
  };

  
  const imgVariants = {
    initial:{
      opacity:0
    },
    animate: {
      opacity:1,
      transition: {
        duration: 2,
      }
    }
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <div className="row">
          <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>
              Hi, I&apos;m <span>Szu Jean</span>
            </motion.h2>
            <motion.p variants={textVariants}>
              Final-year and final-semester student, seeking a{" "}
              <span>data analytics, machine learning, or web development</span>{" "}
              internship from <span>22 July to 13 Oct 2024</span>. Flexible
              regarding duration and additional opportunities.
            </motion.p>
          </motion.div>
          <div className="imageContainer">
            <motion.img
              src="/avatar.png"
              alt="avatar"
              variants={imgVariants}
              initial="initial"
              animate="animate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
