import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-6 border-t border-gray-300 dark:border-gray-700 background-change">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-change">

                {/* Left Side: Copyright */}
                <div className="text-sm text-center md:text-left">
                    <p>&copy; {currentYear} Victor Yuji Mimura. All rights reserved.</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Made using React, Vite & Tailwind CSS
                    </p>
                </div>

                {/* Right Side: Contacts */}
                <div className="flex items-center space-x-6">
                    <a href="https://wa.me/5519995209278" target="_blank" className="social-icon-link"><FaWhatsapp size={36} /></a>
                    <a href="https://www.linkedin.com/in/victor-mimura-44a654384/" target="_blank" className="social-icon-link"><FaLinkedin size={36} /></a>
                    <a href="https://github.com/VictorYJM" target="_blank" className="social-icon-link"><FaGithub size={36} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;