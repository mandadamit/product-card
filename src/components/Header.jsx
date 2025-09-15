import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold">MyApp</h1>
                <ul className="flex gap-6">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300' }>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300' }>Contact</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
};

export default Header;
