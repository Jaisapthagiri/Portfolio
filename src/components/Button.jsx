import React from 'react'

const Button = ({ children, onClick, href }) => {
    return (
        <>
            <style>{`
            @keyframes shine {
                0% {
                    background-position: 0% 50%;
                }
        
                50% {
                    background-position: 100% 50%;
                }
        
                100% {
                    background-position: 0% 50%;
                }
            }
        
            .button-bg {
                background: conic-gradient(from 0deg, #00F5FF, #FF00C7, #FFD700, #00FF85, #8A2BE2, #00F5FF);
                background-size: 300% 300%;
            }
            
            .button-bg:hover {
                animation: shine 4s ease-out infinite;
            }
        `}</style>

            <div className="button-bg rounded-full p-0.5 mt-2 hover:scale-105 transition duration-300 active:scale-100">
                <div className="px-8 text-sm py-2.5 text-white rounded-full font-medium 
                   transition-all duration-300">
                    {href ? (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-medium text-sm"
                        >
                            {children}
                        </a>
                    ) : (
                        <button
                            onClick={onClick}
                            className="text-white  font-bold text-sm"
                        >
                            {children}
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Button;


