import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Jahidul Hassan Reshad. All rights reserved.</p>
        <p className="mt-2">Designed and built using React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;