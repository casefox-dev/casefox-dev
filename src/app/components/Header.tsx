import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-charcoal text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-between items-center">
          <li><a href="#" className="text-2xl font-bold">Logo</a></li>
          <li>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-saffron transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">About</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">Contact</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;