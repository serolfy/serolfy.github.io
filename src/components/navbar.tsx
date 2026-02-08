import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteData";

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-mode", isLightMode);
  }, [isLightMode]);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo">
          {siteConfig.name}
        </Link>
        <div className="nav-actions">
          <a href={`mailto:${siteConfig.email}`} className="btn btn-primary">
            Email
          </a>
          <a
            href={siteConfig.resumePath}
            target="_blank"
            className="btn btn-primary"
          >
            Resume
          </a>
          <button
            onClick={() => setIsLightMode(!isLightMode)}
            className="btn-icon"
            aria-label="Toggle theme"
          >
            <i
              className={isLightMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
