import { useState, useEffect } from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== undefined && (localStorage.theme == "dark" || (!("theme" in localStorage) && 
            window.matchMedia("(prefers-color-scheme: dark)").matches))) { return true; }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }

        else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode(prevState => !prevState);
    };

    return(
        <nav className="fixed top-0 left-0 w-full background-change text-change shadow-md z-50">
            <div className="container mx-auto px-1.5 py-2.5 flex justify-between items-center">
                {/* Left Navbar */}
                <div className="flex items-center space-x-4">
                    <a href="" target="_blank" className="social-icon-link"><FaWhatsapp size={36}/></a>
                    <a href="" target="_blank" className="social-icon-link"><FaLinkedin size={36}/></a>
                    <a href="" target="_blank" className="social-icon-link"><FaGithub size={36}/></a>                    
                </div>

                {/* Middle Navbar */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#projects" className="nav-link">Projects</a>
                </div>

                {/* Right Navbar */}
                <div className="flex items-center">
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                        {isDarkMode ? <FaSun size={36}/> : <FaMoon size={36}/>}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;