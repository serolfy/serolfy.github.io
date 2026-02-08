import Image from "next/image";
import { siteConfig, aboutContent } from "@/data/siteData";

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

const About = () => {
  return (
    <section className="section" id="about">
      <h2 className="section-title">{aboutContent.heading}</h2>
      <div className="about-grid">
        <div className="about-text">
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i}>{renderBold(p)}</p>
          ))}

          <div className="about-highlights">
            {aboutContent.highlights.map((h, i) => (
              <div className="highlight-item" key={i}>
                <strong>{h.label}</strong>
                <span>{h.detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-img-wrapper">
          <Image
            src={siteConfig.aboutImage}
            className="about-img"
            width={400}
            height={500}
            alt="About"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
