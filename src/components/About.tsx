import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <br></br>
      <br></br>
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            As a computer engineer, I am passionate about developing innovative
            solutions that bridge the gap between software and hardware.{" "}
            <br></br>I have a strong foundation in both software development and
            computer hardware design, which allows me to create comprehensive
            and effective solutions to complex problems. I specialize in full
            stack development, IoT solutions, big data engineering, and embedded
            systems. My technical skills include proficiency in Python,
            JavaScript, Node.js, C/C++, C#/.NET, React, and NextJS, along with
            experience in VHDL, ASM (Assembly Language), MATLAB, and Java. I am
            adept at using various software tools such as Figma, Docker,
            Kubernetes, and IBM Planning Analytics.
          </p>
          <p>
            Throughout my career, I have worked on a diverse range of projects,
            from leading initiatives at AT&T to enhance customer experience and
            operational efficiency to contributing to the reduction of the the
            Total Cost of Ownership for Vehicle-to-Everything (V2X) Roadside
            Equipment by developing a solution that supports IoT edge computing.
          </p>
          <p>
            My experience includes managing all aspects of development,
            including data architecture, engineering, UI/UX design, and
            stakeholder management. I am committed to iterative development
            processes, incorporating stakeholder feedback, and ensuring
            alignment with business needs. I am always eager to learn and
            explore new technologies, continuously seeking opportunities to
            enhance my skills and knowledge. With a background in both
            engineering and business, I bring a unique perspective to
            problem-solving and project management, ensuring the highest level
            of quality and efficiency in all my endeavors.
          </p>
        </div>
        <div className="about-img">
          <Image
            src="/images/mtn.jpg"
            className="profile-img"
            width={300}
            height={500}
            alt="Cool Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
