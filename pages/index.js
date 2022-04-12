import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";

export default function Home() {
  return (
    <div id="page-wrapper" className="bg-gray-500">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
