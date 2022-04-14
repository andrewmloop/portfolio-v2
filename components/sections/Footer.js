import Image from "next/image";

export default function Footer() {
  return (
    <div id="footer" className="flex flex-col justify-center align-middle w-full h-auto  bg-light-navy">
      <div className="grid grid-cols-2 my-10 mx-auto md:grid-cols-4">
        <div className="h-[6rem] w-[6rem] bg-white rounded-full m-4">
          <div className="relative h-[4rem] w-[4rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <a href="https://www.linkedin.com/in/andrewmloop/" target="_blank" rel="noreferrer">
              <Image src="/icons/linkedin-150.png" alt="LinkedIn logo."
                width={150}
                height={150}
                className="rotate-0 scale-100 duration-1000 hover:rotate-[360deg] hover:scale-105 ease-in-out motion-reduce:transition-none"
              />
            </a>
          </div>
        </div>
        <div className="h-[6rem] w-[6rem] bg-white rounded-full m-4">
          <div className="relative h-[4rem] w-[4rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <a href="https://github.com/andrewmloop" target="_blank" rel="noreferrer">
              <Image src="/icons/github-128.png" alt="Github logo."
                width={128}
                height={128}
                className="rotate-0 scale-100 duration-1000 hover:rotate-[360deg] hover:scale-105 ease-in-out motion-reduce:transition-none"
              />
            </a>
          </div>
        </div>
        <div className="h-[6rem] w-[6rem] bg-white rounded-full m-4">
          <div className="relative h-[4rem] w-[4rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <a href="mailto:andrewmloop@gmail.com">
              <Image src="/icons/at-sign-100.png" alt="@ icon."
                width={100}
                height={100}
                className="rotate-0 scale-100 duration-1000 hover:rotate-[360deg] hover:scale-105 ease-in-out motion-reduce:transition-none"
              />
            </a>
          </div>
        </div>
        <div className="h-[6rem] w-[6rem] bg-white rounded-full m-4">
          <div className="relative h-[4rem] w-[4rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <a>
              <Image src="/icons/resume-96.png" alt="Resum&eacute; icon."
                width={96}
                height={96}
                className="rotate-0 scale-100 duration-1000 hover:rotate-[360deg] hover:scale-105 ease-in-out motion-reduce:transition-none"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-white border-t-2 w-3/4 mx-auto py-4 my-4">Made 2022 by AML. <a href="https://www.github.com/andrewmloop/portfolio-v2" className="text-underline">Code.</a></p>
    </div>
  );
}