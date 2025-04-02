import Link from "next/link";
import { useState, useEffect } from "react";
import Sun from "/public/images/sun_64.svg";

const Navbar = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        // Apply the theme on initial load based on the current state
        document.body.classList.toggle("light-mode", isLightMode);
    }, [isLightMode]);

    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Yair Flores
                </Link>
            </div>
            <a
                href="https://raw.githubusercontent.com/serolfy/serolfy.github.io/main/images/services/YairFloresResume.pdf"
                className="resume-btn"
            >
                Resume
            </a>
            <button onClick={toggleTheme} className="theme-toggle-btn">
                {isLightMode ? <Sun className="icon sun-icon" /> : <i className="fa-solid fa-moon icon moon-icon"></i>}
            </button>
        </div>
    );
};

export default Navbar;