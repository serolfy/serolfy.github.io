import { useEffect } from "react";
import NextJs from "/public/images/nextjs-icon.svg";

const Skills = () => {
  useEffect(() => {
    // Select all skill cards
    const skillCards = document.querySelectorAll(".skill-card");

    // Function to generate a random pastel color
    const getRandomPastelColor = () => {
      const hue = Math.floor(Math.random() * 360); // Random hue
      const saturation = 70 + Math.random() * 10; // Saturation between 70% and 80%
      const lightness = 70 + Math.random() * 10; // Lightness between 70% and 80%
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    // Assign a unique random pastel color to each skill card's CSS variable
    skillCards.forEach((card) => {
      const randomColor = getRandomPastelColor();
      (card as HTMLElement).style.setProperty("--hover-color", randomColor);
    });
  }, []);

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card">
          <i className="fa-brands fa-python python-icon"></i>
          <p>Python</p>
        </div>
        <div className="skill-card node">
          <i className="fa-brands fa-node-js node-icon"></i>
          <p>Node</p>
        </div>
        <div className="skill-card typescript">
          <i className="fa-brands fa-js-square typescript-icon"></i>
          <p>TypeScript</p>
        </div>
        <div className="skill-card nextjs">
          <NextJs className="nextjs-icon"/>
          <p>Next.js</p>
        </div>
        <div className="skill-card cpp">
          <i className="fa-solid fa-code cpp-icon"></i>
          <p>C++</p>
        </div>
        <div className="skill-card figma">
          <i className="fa-brands fa-figma figma-icon"></i>
          <p>Figma</p>
        </div>
        <div className="skill-card embedded">
          <i className="fa-solid fa-microchip embedded-icon"></i>
          <p>Embedded</p>
        </div>
        <div className="skill-card iot">
          <i className="fa-solid fa-wifi iot-icon"></i>
          <p>IoT</p>
        </div>
        <div className="skill-card js">
          <i className="fa-brands fa-js-square js-icon"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card react">
          <i className="fa-brands fa-react react-icon"></i>
          <p>React</p>
        </div>
        <div className="skill-card html">
          <i className="fa-brands fa-html5 html-icon"></i>
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <i className="fa-brands fa-css3-alt css-icon"></i>
          <p>CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
