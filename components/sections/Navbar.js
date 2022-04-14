import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    console.log("Clicked");
    setActive(!active);
  };

  return (
    <div className="sticky top-0 w-full p-2 lg:p-4 bg-navy z-10">
      <nav className="flex justify-between items-center">
        {/* Logo/Name */}
        <div className="p-2 lg:p-4 text-white">
          <a href="#hero">AML</a>
        </div>
        {/* Mobile Nav Button */}
        <button
          onClick={handleToggle}
          className="z-[100] lg:hidden"
        >
          {active ? 
            <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth={2} stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1={18} y1={6} x2={6} y2={18}></line>
              <line x1={6} y1={6} x2={18} y2={18}></line>
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth={2} stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1={4} y1={6} x2={20} y2={6}></line>
              <line x1={4} y1={12} x2={20} y2={12}></line>
              <line x1={4} y1={18} x2={20} y2={18}></line>
            </svg>
          }
        </button>
        {/* Nav Links */}
        <div className={`fixed ${active ? "" : "translate-x-[100vw] lg:translate-x-0"} top-0 right-0 h-screen w-[66vw] bg-gold transition-transform duration-[400ms] ease-in-out lg:relative lg:h-auto lg:w-auto lg:bg-inherit lg:top-auto`}>
          <div className="flex flex-col h-screen w-full items-center text-center first:mt-[5rem] text-2xl text-white lg:flex-row lg:h-auto lg:first:mt-0 lg:text-left lg:text-xl">
            <NavItem text="About" dest="#about" handleToggle={handleToggle} />
            <NavItem text="Projects" dest="#projects" handleToggle={handleToggle} />
            <NavItem text="Contact" dest="#contact" handleToggle={handleToggle} />
            <button
              className="mx-3 w-auto p-2 text-white bg-[#8f7143] rounded-lg"
            >Resum&eacute;</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavItem(props) {
  const text = props.text;
  const dest = props.dest;

  return (
    <a href={dest}
      onClick={props.handleToggle}
      className="mb-8 lg:mb-0 lg:mx-3 lg:px-4"
    >
      {text}
    </a>
  );
}