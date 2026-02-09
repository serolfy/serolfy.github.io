import { useEffect } from "react";
import NextJs from "/public/images/nextjs-icon.svg";

const Skills = () => {
  useEffect(() => {
    const skillCards = document.querySelectorAll(".skill-card");

    const getRandomPastelColor = () => {
      const hue = Math.floor(Math.random() * 360);
      const saturation = 70 + Math.random() * 10;
      const lightness = 70 + Math.random() * 10;
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    skillCards.forEach((card) => {
      const randomColor = getRandomPastelColor();
      (card as HTMLElement).style.setProperty("--hover-color", randomColor);
    });
  }, []);

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="grid-skills">
        <div className="skill-card">
          <i className="fa-brands fa-python"></i>
          <p>Python</p>
        </div>
        <div className="skill-card">
          <i className="fa-brands fa-node-js"></i>
          <p>Node</p>
        </div>
        <div className="skill-card">
          <i className="fa-brands fa-js-square"></i>
          <p>TypeScript</p>
        </div>
        <div className="skill-card">
          <NextJs className="nextjs-icon"/>
          <p>Next.js</p>
        </div>
        <div className="skill-card">
          <i className="fa-solid fa-code"></i>
          <p>C++</p>
        </div>
        <div className="skill-card">
          <i className="fa-brands fa-figma"></i>
          <p>Figma</p>
        </div>
        <div className="skill-card">
          <i className="fa-solid fa-microchip"></i>
          <p>Embedded</p>
        </div>
        <div className="skill-card">
          <i className="fa-solid fa-wifi"></i>
          <p>IoT</p>
        </div>
        <div className="skill-card">
          <i className="fa-brands fa-js-square"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <i className="fa-brands fa-react"></i>
          <p>React</p>
        </div>
        <div className="skill-card">
          <i className="fa-brands fa-html5"></i>
          <p>HTML</p>
        </div>
        <div className="skill-card">
          <i className="fa-brands fa-css3-alt"></i>
          <p>CSS</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
