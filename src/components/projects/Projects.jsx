import React, { useState } from "react";
import "./projects.scss";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import { projectContent } from "./projectContent";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  // Filter projects based on the selected category
  const filteredProjects =
    filter === "all"
      ? projectContent
      : projectContent.filter((project) => project.category === filter);

  // Create a map to track unique project IDs
  const uniqueProjectIds = new Set();

  // Filter out duplicate projects based on their IDs
  const uniqueProjects = filteredProjects.filter((project) => {
    if (!uniqueProjectIds.has(project.id)) {
      uniqueProjectIds.add(project.id);
      return true;
    }
    return false;
  });

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  return (
    <div className="projects">
      <div className="titleContainer">
        <motion.h1>
          My <motion.b whileHover={{ color: "#339dc4" }}>Projects</motion.b>
        </motion.h1>
      </div>
      <div className="filterTabs">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("web")}
          className={filter === "web" ? "active" : ""}
        >
          Web
        </button>
        <button
          onClick={() => setFilter("mobile")}
          className={filter === "mobile" ? "active" : ""}
        >
          Mobile
        </button>
        <button
          onClick={() => setFilter("ml")}
          className={filter === "ml" ? "active" : ""}
        >
          Machine Learning
        </button>
      </div>
      <div className="wrapper">
        <div className="slider-container">
          <Slider {...settings}>
            {uniqueProjects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
