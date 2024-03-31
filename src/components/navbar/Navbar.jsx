import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import { Sidebar } from "../sidebar/Sidebar";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="logo"
        >
          <img src="/WBL.png" alt="logo" />
        </motion.a>
        <div className="social">
          <a href="#">
            <img src="/linkedin.png" alt="linkedin logo" />
          </a>
          <a href="#">
            <img src="/github.png" alt="github logo" />
          </a>
          <a href="#">
            <button>Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};
