import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero" className="h-screen w-full bg-black text-white overflow-x-hidden">
      <div className="md:bg-hero-bg bg-hero-vert hero-div-1"></div>
      <div className="md:bg-hero-bg bg-hero-vert hero-div-2"></div>
      <div className="md:bg-hero-bg bg-hero-vert hero-div-3"></div>
      <div className="md:bg-hero-bg bg-hero-vert hero-div-4"></div>
      <div className="relative h-full w-full p-4 flex flex-col justify-center z-[4] text-center text-xl lg:text-2xl">
        <p className="mt-auto">Hi, I&apos;m</p>
        <h1 className="text-2xl font-bold mb-2 lg:text-4xl">Andrew Loop</h1>
        <p>A web developer interested in making quality web-things and climbing life&apos;s mountains. </p>
        <a href="#about" className="mt-auto mb-28 py-4 flex justify-center animate-pulse z-10 md:mb-10">
          <Image 
            src="/icons/arrow-down-circle.png" alt="Arrow icon pointing down."
            height={36}
            width={36}
          />
        </a>
      </div>
    </div>
  );
}