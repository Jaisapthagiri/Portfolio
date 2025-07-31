import React, { useEffect } from 'react'

const Footer = () => {
    const originalTitle = "Jaisapthagiri";

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = "Visit You Later";
            } else {
                document.title = originalTitle;
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return (
        <>
            <footer className="flex flex-col items-center justify-center w-full mb-15 text-white/70">
                <a href='#about' className='text-violet-500 text-2xl'>Jai</a>
                <div className="flex items-center gap-4 mt-5">
                    <a href="https://www.linkedin.com/in/jaisapthagiri-j-869a25319"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition-all duration-300 ">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-blue-300 hover:fill-blue-500 filter transition-all duration-300">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/i_jai06"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition-all duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-pink-300 hover:fill-pink-700  filter transition-all duration-300">
                            <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="https://github.com/Jaisapthagiri/Jaisapthagiri"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition-all duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="fill-white hover:fill-black filter transition-all duration-300">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 18c-4.51 2-5-2-7-2" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
                <p className="mt-8 text-center">Copyright © {new Date().getFullYear()} Jai. All rights reservered.</p>
            </footer>
        </>
    )
}

export default Footer