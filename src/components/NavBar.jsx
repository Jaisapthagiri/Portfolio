import { useState } from 'react';
import NavLink from './NavLink';
import Button from './Button';
import Li from './Li';

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="fixed lg:top-0 bg-black top-3 w-full md:px-16 xl:px-32 flex items-center justify-between z-20 transition-all md:top-2">
                <NavLink to="/home" className="text-red-600 mt-2 font-bold text-5xl">Jai</NavLink>

                <ul className="md:flex md:gap-10 p-2 md:right-10 hidden items-center ml-25 gap-10">
                    <Li to="#about" label="About" />
                    <Li to="#skill" label="Skills" />
                    <Li to="#projects" label="Projects" />
                    <Li to="#education" label="Education" />
                    <Li to="#contact" label="Contact" />
                </ul>

                <div className='hidden sm:block'>
                    <a href='https://github.com/Jaisapthagiri/Jaisapthagiri'><Button>GitHub</Button></a>
                </div>

                <button
                    aria-label="menu-btn"
                    type="button"
                    onClick={toggleMobileMenu}
                    className="md:hidden active:scale-90 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff">
                        <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                    </svg>
                </button>

                <div
                    className={`fixed top-[60px] left-0 right-0 bg-gray-800/50 rounded-md w-full shadow-lg text-white transition-all duration-300 ease-in-out z-50 ${isMenuOpen ? 'block' : 'hidden'
                        } md:hidden`}
                >
                    <ul className="flex flex-col items-start px-4 py-2 gap-2">
                        <Li to="#about" label="About" className="text-lg p-1 text-amber-200" />
                        <Li to="#skill" label="Skills" className="text-lg p-1" />
                        <Li to="#projects" label="Projects" className="text-lg p-1" />
                        <Li to="#education" label="Education" className="text-lg p-1" />
                        <Li to="#contact" label="Contact" className="text-lg p-1" />
                        <li>
                            <a
                                href="https://github.com/Jaisapthagiri/Jaisapthagiri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg p-1 text-blue-400 hover:text-blue-300"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;


