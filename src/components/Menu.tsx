"use client"
import { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => setIsOpen(!isOpen);

return (
<div className="relative">
    {/* Toggle Button */}
    <button className="lg:hidden p-3 text-white bg-blue-500 rounded-full fixed bottom-4 right-4 z-50 shadow-lg"
        onClick={toggleMenu}>
        <svg className='w-5 h-5' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path fill="currentColor" fillRule="evenodd"
                    d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z">
                </path>
            </g>
        </svg>
    </button>
    {/* Absolute Position Menu */}
    <nav className={`fixed bottom-[60px] right-10 w-[100px] max-w-xs bg-gray-800 text-white h-auto transform transition-transform
        ${isOpen ? 'translate-x-0' : 'translate-x-full hidden' } lg:translate-x-0 lg:static lg:w-auto lg:bg-transparent
        lg:text-black lg:flex lg:space-x-4 z-40`} style={{ zIndex: 1000 }}>
        <ul className="space-y-4 lg:space-y-0 lg:flex lg:space-x-4 p-4">
            <li>
                <Link href="/" onClick={()=> setIsOpen(false)}>Home</Link>
            </li>
            <li>
                <Link href="/cv/id" onClick={()=> setIsOpen(false)}>CV</Link>
            </li>
            <li>
                <Link href="/projects" onClick={()=> setIsOpen(false)}>Projects</Link>
            </li>
            
        </ul>
    </nav>
</div>
);
};

export default Menu;