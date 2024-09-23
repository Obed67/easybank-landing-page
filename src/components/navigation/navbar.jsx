import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "../elements/button";
import Logo from "../../assets/images/logo.svg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="">
                <nav className="fixed flex items-center justify-between w-full px-4 py-4 mx-auto bg-white shadow-md">
                    {/* Logo */}
                    <Link to="/" className="font-bold text-gray-800">
                        <img src={Logo} alt="Logo" className="w-auto h-8 sm:h-10 md:h-12 lg:h-11" />
                    </Link>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links - hidden on small screens */}
                    <div className="hidden space-x-8 md:flex">
                        <Link to="/" className="text-gray-600 hover:text-gray-800">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-gray-800">
                            About
                        </Link>
                        <Link to="/contact" className="text-gray-600 hover:text-gray-800">
                            Contact
                        </Link>
                        <Link to="/blog" className="text-gray-600 hover:text-gray-800">
                            Blog
                        </Link>
                        <Link to="/careers" className="text-gray-600 hover:text-gray-800">
                            Careers
                        </Link>
                    </div>

                    {/* Request Invite Button - hidden on small screens */}
                    <div className="hidden md:block">
                        <Button>Request Invite</Button>
                    </div>
                </nav>

                {/* Mobile menu - only visible when the burger menu is clicked */}
                {isOpen && (
                    <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 z-10 w-3/4 px-2 py-4 mx-auto mt-0 text-center bg-white shadow-lg rounded-xl md:hidden">
                        <Link to="/" className="block py-2 text-gray-600 hover:text-gray-800">
                            Home
                        </Link>
                        <Link to="/about" className="block py-2 text-gray-600 hover:text-gray-800">
                            About
                        </Link>
                        <Link to="/contact" className="block py-2 text-gray-600 hover:text-gray-800">
                            Contact
                        </Link>
                        <Link to="/blog" className="block py-2 text-gray-600 hover:text-gray-800">
                            Blog
                        </Link>
                        <Link to="/careers" className="block py-2 text-gray-600 hover:text-gray-800">
                            Careers
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
