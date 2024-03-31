import { motion } from "framer-motion";

export const Links = () => {
  const items = [
    "Homepage",
    "About Me",
    "Experience",
    "Skills",
    "Projects",
    "Achievements",
  ];

  
const variants = {
  opened: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants={
  opened: {
    y:0,
    opacity:1,
  },
  closed: {
    y:50,
    opacity:0
  }
}

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          variants={itemVariants}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};
