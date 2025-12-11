import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Menu', path: '/menu' },
    { title: 'Chefs', path: '/chefs' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-orange-600">Jollof Joy</Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-orange-500 transition-colors ${isActive ? 'font-semibold text-orange-500' : ''}`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-4">
             <Button asChild>
                <Link to="/reservations">Book a Table</Link>
             </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;