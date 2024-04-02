import "./app.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Parallax } from "./components/parallax/Parallax";
import { About } from "./components/about/About";
import { Experiences } from "./components/experiences/Experiences";
import { Skills } from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax />
      </section>
      <section>
        <About />
      </section>
      <section id="Experience">
        <Experiences />
      </section>
      <section id="Skills"><Skills /></section>
      <section id="Projects">Projects</section>
      <section id="Achievements">Achievements</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
