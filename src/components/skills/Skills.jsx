import "./skills.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillContent } from "./skillContent";

export const Skills = () => {
  const variants = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
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
      className="skills"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <div className="titleContainer">
        <motion.h1>
          My <motion.b whileHover={{ color: "#339dc4" }}>Skills</motion.b>
        </motion.h1>
      </div>
      <div className="wrapper">
        <div className="skillContainer">
          {skillContent.map((item, index) => (
            <div key={index} className="skillCard">
              <h2 className="skillTitle">{item.title}</h2>
              <div className="skillList">
                {item.skills.map((skill, idx) => (
                  <div key={idx} className="skillItem">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="h-6 w-6"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
