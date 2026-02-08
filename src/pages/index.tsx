import { useRef, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Head from "next/head";
import { siteConfig } from "@/data/siteData";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const canScrollToAbout = useRef(true);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          canScrollToAbout.current = true;
        }
      },
      { threshold: 0.8 }
    );

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && canScrollToAbout.current) {
          if (entry.boundingClientRect.top > 0) {
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
            canScrollToAbout.current = false;
          }
        }
      },
      { threshold: 0.15 }
    );

    const heroElement = heroRef.current;
    const aboutElement = aboutRef.current;

    if (heroElement) heroObserver.observe(heroElement);
    if (aboutElement) aboutObserver.observe(aboutElement);

    return () => {
      if (heroElement) heroObserver.unobserve(heroElement);
      if (aboutElement) aboutObserver.unobserve(aboutElement);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteConfig.favicon} />
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
