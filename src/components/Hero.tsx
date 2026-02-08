import Image from "next/image";
import { siteConfig, heroContent } from "@/data/siteData";

const renderBold = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span className="hover-bold" key={i}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <Image
        src={siteConfig.profileImage}
        className="hero-img"
        width={500}
        height={500}
        alt={`${siteConfig.name} headshot`}
        priority
      />

      <h1 className="hero-greeting">{heroContent.greeting}</h1>
      <p className="hero-subtitle">{heroContent.subtitle}</p>

      <div className="hero-body">
        {heroContent.paragraphs.map((p, i) => (
          <p key={i}>{renderBold(p)}</p>
        ))}
      </div>

      <div className="social-links">
        {siteConfig.socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            aria-label={s.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={s.icon} />
          </a>
        ))}
      </div>

      <div className="scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
