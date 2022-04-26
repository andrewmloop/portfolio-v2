import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <div id="page-wrapper" className="bg-gray-500">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
