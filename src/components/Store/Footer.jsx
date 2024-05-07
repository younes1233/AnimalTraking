import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold text-white mb-2">Animal Tracker</h2>
            <p className="text-gray-200">Explore and monitor the wildlife around the farm.</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="/about" className="text-white hover:text-gray-300">About Us</a></li>
              <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
              <li><a href="/terms" className="text-white hover:text-gray-300">Terms</a></li>
              <li><a href="/privacy" className="text-white hover:text-gray-300">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-200">
          <p>&copy; 2024 Animal Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
