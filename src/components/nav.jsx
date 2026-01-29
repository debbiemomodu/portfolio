 import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // state for mobile menu

  return (
    <nav className="w-full bg-white shadow px-6 py-4">
      <div className="flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-blue-600">MY PORTFOLIO</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li>
            <a href="#home" className="hover:text-blue-600">Home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"} 
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-gray-700 md:hidden">
          <li>
            <a href="#home" className="hover:text-blue-600">Home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}




export default Navbar;

