import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-100 p-5 text-center">
      <h1 className="text-2xl font-bold">Mohit Portfolio</h1>
      <nav className="mt-4">
        <ul className="flex justify-center space-x-4">
          <li><Link to="/" className="text-blue-500 hover:underline">Home</Link></li>
          {/* <li><Link to="/about" className="text-blue-500 hover:underline">About</Link></li>
          <li><Link to="/aksonica" className="text-blue-500 hover:underline">Aksonica</Link></li>
          <li><Link to="/news" className="text-blue-500 hover:underline">News</Link></li>
          <li><Link to="/research" className="text-blue-500 hover:underline">Research</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
