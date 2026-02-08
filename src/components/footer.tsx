import { siteConfig } from "@/data/siteData";

const Footer = () => {
  return (
    <footer className="container">
      <hr className="footer-divider" />
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="social-links">
          {siteConfig.socials.map((s) => (
            <a key={s.label} href={s.url} aria-label={s.label} target="_blank" rel="noopener noreferrer">
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
