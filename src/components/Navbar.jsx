import React from "react";
import './Navbar.css'


function Navbar() {
  return (
    <header className="text-green-400 font-extrabold dark:bg-gray-600 md:sticky top-0 z-10">

      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Fred Jamo.
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work.
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills.
          </a>
          {/* <a href="#reviews" className="mr-5 hover:text-white">
            Testimonials
          </a> */}
        </nav>

        <a
          href="#contact" id="hireme"
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6
        focus:outline-none  rounded text-lg " style={{marginTop:5}}
        >
          Hire me.
        </a>
      </div>
    </header >
  );
}

export default Navbar;
