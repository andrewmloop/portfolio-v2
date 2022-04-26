export default function About() {
  return (
    <section id="about" className="w-full h-auto px-8 py-12 bg-cetacean">
      
      <div className="max-w-[1000px] flex flex-col md:flex-row justify-center items-center  mx-auto  text-lg text-white">
        <h2 className="mb-6 md:mb-0 md:mr-8 text-3xl text-center leading-relaxed md:whitespace-nowrap">About Me</h2>
        <p>I love making things that anyone in the world with a browser can access. Most of my experience is on the frontend with the React ecosystem, but I&apos;ve been enjoying getting more backend perspective with NodeJS. When I&apos;m not in front of a text editor, you can catch me in the woodshop or at the gym. Please send me any questions or comments <a href="#contact" className="text-gold hover:underline">below</a>!</p>
      </div>
    </section>
  );
}