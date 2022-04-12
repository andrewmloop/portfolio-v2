import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    console.log("Clicked");
    setActive(!active);
  };

  return (
    <nav className="flex w-full justify-between items-center p-2 bg-blue-600 lg:p-4">
      {/* Logo/Name */}
      <div className="p-2 lg:p-4">
        <a href="#home">AML</a>
      </div>
      {/* Mobile Nav Button */}
      <button
        onClick={handleToggle}
        className="p-2 border-2 z-[100] lg:hidden lg:p-4"
      >
        X
      </button>
      {/* Nav Links */}
      <div className={`fixed ${active ? "" : "translate-x-[100vw] lg:translate-x-0"} top-0 right-0 h-screen w-[66vw] bg-yellow-900 transition-transform duration-[400ms] ease-in-out lg:relative lg:h-auto lg:w-auto lg:bg-inherit lg:top-auto`}>
        <div className="flex flex-col h-screen w-full text-center first:mt-[5rem] text-2xl text-white lg:flex-row lg:h-auto lg:first:mt-0 lg:text-left lg:text-xl">
          <NavItem text="About" dest="#about" handleToggle={handleToggle} />
          <NavItem text="Projects" dest="#projects" handleToggle={handleToggle} />
          <NavItem text="Contact" dest="#contact" handleToggle={handleToggle} />
          <button
            className="mx-3 w-auto p-2 text-white bg-sky-900 rounded-lg"
          >Resum&eacute;</button>
        </div>
      </div>
    </nav>
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