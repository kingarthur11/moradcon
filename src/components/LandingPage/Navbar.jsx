import React, { useState, useEffect } from 'react';
import WorkspaceLogo from '../../assets/Workspace_Logo.png';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsHidden(true);
    } else {
      // Scrolling up
      setIsHidden(false);
      setIsTransparent(currentScrollY > 0); 
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={` transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${isTransparent ? 'bg-gray-400/50' : 'bg-gray-400 dark:bg-gray-900'} text-slate-50`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <img src={WorkspaceLogo} alt="Workspace Logo" className="h-8" />
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition">Pricing</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition">About</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Login and Signup Buttons */}
        {/* <div className="hidden md:flex space-x-4">
          <button className="text-gray-200 hover:text-gray-300">Login</button>
          <button className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition">Sign Up</button>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
