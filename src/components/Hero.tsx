import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // Scroll to the next section when the hero is out of view
          const aboutSection = document.querySelector(".about-container");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the hero is visible
    );

    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  return (
    <div className="hero-container" ref={heroRef}>
      <Image
        src="/images/yair.jpg"
        className="profile-img"
        width={500}
        height={500}
        alt="Yair's Headshot"
      />
      <div className="hero-text">
        <h1>Hi, I&#39;m Yair 👋 (like air with a y) </h1>
        <p>
          I&#39;m a Computer Engineer based in Atlanta, GA, with a strong focus on
          <br></br>software engineering, specializing in full stack development,
          IoT solutions, big data engineering, embedded systems, and computer
          hardware design.
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/serolfy"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yairflores/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="scroll-wheel"></div>
        </div>
        <p> </p>
      </div>
    </div>
  );
};

export default Hero;
