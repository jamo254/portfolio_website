import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import AccountTreeRoundedIcon from "@material-ui/icons/AccountTreeRounded";
import CodeIcon from '@material-ui/icons/Code';
import './about.css'

function About() {
  return (
    <section id="about">

      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <h4>
              <CodeIcon className="text-9xl  font-black"/> Hello! I am Fred, I love building amazing
              mobile and web applications <CodeIcon /></h4>
          </div>
          <a
            href="#"
            target="_blank"
            className="mb-8 leading-relaxed  animate-pulse"
          >
            View my open source projects <GitHubIcon />
          </a>

          <div className="flex justify-center">
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-900 bg-yellow-500  border-0 py-2 px-6  rounded-full focus:outline-none hover:bg-green-400 hover:text-white rounded text-lg "
            >
              View My Past projects{" "}
              <AccountTreeRoundedIcon className="text-gray-400 animate-ping" />
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img id="image"
            className="object-cover object-center  rounded-t-full"
            alt="hero"
            src="assets/lapi.webp"
          />
        </div>
      </div>
    </section >
  );
}

export default About;
