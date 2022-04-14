import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero" className="h-[75vh] p-2 lg:p-4">
      <div className="flex flex-col h-full text-center justify-center">
        <p className="mt-auto">Hi, I&apos;m</p>
        <h1>Andrew Loop</h1>
        <p>A web developer interested in making fun and aesthetic web-things.</p>
        <a href="#about" className="mt-auto py-4 flex justify-center animate-pulse z-0">
          <Image 
            src="/icons/arrow-down-circle.png" alt="Circle down arrow PNG."
            height={36}
            width={36}
          />
        </a>
      </div>
    </div>
  );
}