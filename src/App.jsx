import "./app.scss";
import { Navbar } from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="About%20Me">Parallax</section>
      <section>About Me</section>
      <section id="Experience">Experience</section>
      <section id="Skills">Skills</section>
      <section id="Projects">Projects</section>
      <section id="Achievements">Achievements</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
