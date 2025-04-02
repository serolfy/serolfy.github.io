import { useRef, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import Head from "next/head";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (entry.boundingClientRect.top < 0) {
            // Scrolling down: Scroll to About
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
          } else {
            // Scrolling up: Scroll to Hero
            heroRef.current?.scrollIntoView({ behavior: "smooth" });
          }
        }
      },
      { threshold: 0.98 } // Trigger when 98% of the element is visible
    );

    const heroElement = heroRef.current;
    const aboutElement = aboutRef.current;

    if (heroElement) {
      observer.observe(heroElement);
    }

    if (aboutElement) {
      observer.observe(aboutElement);
    }

    return () => {
      if (heroElement) observer.unobserve(heroElement);
      if (aboutElement) observer.unobserve(aboutElement);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Yair&apos;s Portfolio</title>
        <meta name="description" content="Yair Flores" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <div>
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
