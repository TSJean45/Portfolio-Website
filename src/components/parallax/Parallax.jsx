import React, {useRef} from 'react'
import "./parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"

export const Parallax = () => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yBg=useTransform(scrollYProgress,[0,1],["0%", "100%"])
    const yText=useTransform(scrollYProgress,[0,1],["0%", "500%"])
    const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className='parallax'>
        <motion.h1 style={{y: yText}}>About Me</motion.h1>
        <motion.div className="tree"></motion.div>
        <motion.div style={{y: yBg}} className="moon"></motion.div>
        <motion.div style={{ x: xStars, y: yBg }} className="stars"></motion.div>
    </div>
  )
}
