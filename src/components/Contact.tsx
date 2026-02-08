import { siteConfig, contactContent } from "@/data/siteData";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">{contactContent.heading}</h2>
      <p>{contactContent.text}</p>
      <a href={`mailto:${siteConfig.email}`} className="btn btn-primary btn-lg">
        {contactContent.ctaLabel}
      </a>
    </section>
  );
};

export default Contact;
