import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `hover:text-purple-600 hover:border-b-2 hover:border-purple-600 hover:rounded-none bg-transparent ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : ''}`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/all-apps"
                    className={({ isActive }) =>
                        `hover:text-purple-600 hover:border-b-2 hover:border-purple-600 hover:rounded-none bg-transparent ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : ''}`
                    }
                >
                    Apps
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/installed-apps"
                    className="hover:text-purple-600 hover:border-b-2 hover:border-purple-600 hover:rounded-none bg-transparent"
                >
                    Installation
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-white px-4 md:px-8 py-3 border-b border-gray-100 sticky top-0 z-50">
            {/* Navbar Start: Brand Logo */}
            <div className="navbar-start">
                {/* Wrapped logo and text in Link to go Home */}
                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <img
                            src="https://i.ibb.co.com/N2Dv3Z2n/logo.png"
                            alt="Hero.io Logo"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-purple-600">HERO.IO</span>
                </Link>
            </div>

            {/* Navbar Center: Navigation Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 font-medium text-gray-600">
                    {links}
                </ul>
            </div>

            {/* Navbar End: Contribute Button */}
            <div className="navbar-end gap-2">
                <a
                    href="https://github.com/AmeerKhasru"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm md:btn-md bg-[#9333EA] hover:bg-[#7e22ce] text-white border-none normal-case rounded-lg px-6"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    Contribute
                </a>

                {/* Mobile Burger Menu */}
                <div className="dropdown dropdown-end lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;