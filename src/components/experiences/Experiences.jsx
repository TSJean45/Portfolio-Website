import "./experiences.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

export const Experiences = () => {
  return (
    <div className="experience">
      <div className="titleContainer">
        <motion.h1>
          My <motion.b whileHover={{ color: "#eb4a7e" }}>Experiences</motion.b>
        </motion.h1>
      </div>
      <div className="timeline">
        <VerticalTimeline layout={"1-column-left"}>
          <div>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                border: "3px solid #eb4a7e",
              }}
              whileHover={{ color: "#eb4a7e" }}
              contentArrowStyle={{ borderRight: "10px solid  #eb4a7e" }}
              date="2/2023 - 4/2023"
              iconStyle={{ background: "#eb4a7e", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Voluntary Research Assistant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                InnovLab Multimedia University Melaka
              </h4>
              <p>
                <ul>
                  <li>
                    Spearheaded efforts to enhance the accuracy of human action
                    recognition, achieving a notable{" "}
                    <span>90% accuracy rate</span>, significantly surpassing
                    initial project benchmarks
                  </li>
                  <li>
                    Explored and experimented with various machine learning
                    algorithms, including <span>SVM, KNN, DT and LR</span>
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>
          </div>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "transparent",
              color: "#fff",
              border: "3px solid #339dc4",
            }}
            contentArrowStyle={{ borderRight: "10px solid  rgb(33, 150, 243)" }}
            date="5/2022 - 9/2022"
            iconStyle={{ background: "#339dc4", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern (Web Development)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Snappymob</h4>

            <p>
              <ul>
                <li>
                  Collaborated with UI/UX designers and front-end developers to
                  refine user experience on the{" "}
                  <a
                    href="https://www.snappymob.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    official website
                  </a>
                </li>
                <li>
                  Developed dynamic web components and integrated new features
                  enhancing Snappymob’s online presence
                </li>
                <li>
                  Produced interactive case studies for client projects,
                  highlighting Snappymob’s service impact
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};
