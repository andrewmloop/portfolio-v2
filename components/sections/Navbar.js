import { useState } from "react";


export default function Navbar() {
  const [active, setActive] = useState(false);
  // Toggle mobile menu
  const handleToggle = () => {
    setActive(!active);
  };

  const [colorChange, setColorChange] = useState(false);
  // Change the navbar's color when scrolling past the hero section
  const handleNavbarColor = () => {
    if (window.scrollY >= window.innerHeight) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleNavbarColor);
  }


  return (
    <div className={`fixed top-0 w-full p-2 md:p-4 z-20 ${colorChange ? "bg-black" : "bg-transparent"} transition-colors duration-[250ms]`}>
      <nav className="flex justify-between items-center">
        {/* Logo/Name */}
        <div className="p-2 md:p-4">
          <a href="#hero" className="px-1 text-xl text-gold font-bold ring-[3px] ring-gold md:text-2xl">AML_</a>
        </div>
        {/* Mobile Nav Button */}
        <button
          onClick={handleToggle}
          className="z-[100] md:hidden"
        >
          {active ? 
            <svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 24 24" strokeWidth={2} stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stroke-gold">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1={18} y1={6} x2={6} y2={18}></line>
              <line x1={6} y1={6} x2={18} y2={18}></line>
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 24 24" strokeWidth={2} stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stroke-gold">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1={4} y1={6} x2={20} y2={6}></line>
              <line x1={4} y1={12} x2={20} y2={12}></line>
              <line x1={4} y1={18} x2={20} y2={18}></line>
            </svg>
          }
        </button>
        {/* Nav Links */}
        <div className={`fixed ${active ? "" : "translate-x-[100vw] md:translate-x-0"} top-0 right-0 h-screen w-[66vw] bg-black transition-transform duration-[400ms] ease-in-out md:relative md:h-auto md:w-auto md:bg-inherit md:top-auto`}>
          <div className="flex flex-col h-screen w-full items-center text-center first:mt-[5rem] text-2xl text-white md:flex-row md:h-auto md:first:mt-0 md:text-left md:text-xl">
            <NavItem text="Home" dest="#hero" handleToggle={handleToggle} />
            <NavItem text="Projects" dest="#projects" handleToggle={handleToggle} />
            <NavItem text="Contact" dest="#contact" handleToggle={handleToggle} />
            <button
              className="mx-3 py-2 px-4 text-white bg-gold rounded-md scale-100 transition-transform duration-300 hover:scale-110"
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
      className="mb-8 md:mb-0 md:mx-1 md:px-4 text-white no-underline transition-all duration-300 hover:text-gold hover:underline"
    >
      {text}
    </a>
  );
}