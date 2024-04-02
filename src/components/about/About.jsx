import {useRef} from 'react'
import "./about.scss";
import { motion, useInView  } from "framer-motion";

export const About = () => {
  const variants = {
    initial: {
      x: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Your Next Intern Awaits! Committed to Continuous
          <br />
          Learning and Professional Development.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            Meet <motion.b whileHover={{ color: "#eb4a7e" }}>Szu Jean</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="contentContainer">
        <div className="box">
          <p>
            <motion.span
              className="contentTitle"
              whileHover={{ color: "#eb4a7e" }}
            >
              What drives me? 🌟
            </motion.span>{" "}
            I&apos;m passionate about exploring the vast possibilities of
            technology, uncovering insights, and crafting innovative solutions
            that make a real impact.
            <br />
            <br />
            <motion.span
              className="contentTitle"
              whileHover={{ color: "#eb4a7e" }}
            >
              Why connect with me? 🤝
            </motion.span>{" "}
            Because I&apos;m not just looking for an internship; I&apos;m on a
            mission to grow, learn, and collaborate with fellow tech
            enthusiasts.
            <br />
            <br />
            Together, let&apos;s dive into the ever-evolving tech landscape and
            create something extraordinary. Ready to embark on this tech journey
            together? Don&apos;t hesitate to reach out if you think I&apos;m a
            match! Let&apos;s innovate, learn, and grow together. 🌱✨
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
