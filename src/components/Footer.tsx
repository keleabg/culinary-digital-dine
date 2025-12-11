import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-500">Jollof Joy</h3>
            <p className="mt-2 text-gray-400">Experience the heart of African cuisine.</p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              <li><Link to="/menu" className="hover:text-orange-400">Menu</Link></li>
              <li><Link to="/reservations" className="hover:text-orange-400">Reservations</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact Us</h4>
            <address className="mt-2 not-italic text-gray-400">
              123 Heritage Road, Lagos, Nigeria<br />
              contact@jollofjoy.com<br />
              +234 800 123 4567
            </address>
          </div>
          <div>
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 border-t border-gray-700 pt-4 mt-8">
          <p>&copy; {new Date().getFullYear()} Jollof Joy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;