import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 fixed w-full z-20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-400">Jahidul Hassan Reshad</h1>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#achievements">Achievements</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4 space-y-2">
          <NavLink href="#home" mobile>Home</NavLink>
          <NavLink href="#skills" mobile>Skills</NavLink>
          <NavLink href="#achievements" mobile>Achievements</NavLink>
          <NavLink href="#about" mobile>About</NavLink>
          <NavLink href="#projects" mobile>Projects</NavLink>
          <NavLink href="#contact" mobile>Contact</NavLink>
        </nav>
      )}
    </header>
  );
};

const NavLink = ({ href, children, mobile = false }) => (
  <a
    href={href}
    className={`hover:text-purple-400 transition-colors ${
      mobile ? 'block py-2' : ''
    }`}
    onClick={() => mobile && setIsMenuOpen(false)}
  >
    {children}
  </a>
);

export default Header;