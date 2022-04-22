import Image from "next/image";
import MoodTrackSS from "/public/screenshots/mood-track-750.png";
import PokemonMemGameSS from "/public/screenshots/pokemon-mem-game-1000.png";
import UncommonGreensSS from "/public/screenshots/uncommon-greens-1000.png";

export default function Projects() {
  const featuredProjects = [
    {
      title: "Workout Tracker",
      githubLink: "https://github.com/andrewmloop/workout-tracker",
      liveLink: "",
      description: "A full-stack web app built with MongoDB for a database, NodeJs and ExpressJS for the back-end API, and ReactJS for the front-end client. Javascript Web Tokens offer user-session persistence as users can record their workout progress from any browser.",
      image: "",
      alt: "A screenshot of a workout-tracking web app.",
      tags: ["MongoDB", "NodeJS", "ExpressJS", "NextJS", "JWT", "TailwindCSS"]
    }
  ];

  const otherProjects = [
    {
      title: "Un/Common Greens",
      githubLink: "",
      liveLink: "",
      description: "A business site for Un/Common Greens LLC. - a business offering sustainably grown food. Built with NextJS for quick navigation between pages and styled with TailwindCSS.",
      image: UncommonGreensSS,
      alt: "A screenshot of the Un/Common Greens LLC. home page.",
      tags: ["NextJS", "TailwindCSS"]
    },
    {
      title: "Mood Track",
      githubLink: "https://github.com/andrewmloop/mood-track",
      liveLink: "https://www.mood-track.com",
      description: "A web app that recommends songs to a user based off their mood (their most recently played songs). Built with NodeJS and ExpressJS for routing, HandlebarsJS to render the HTML, and the Spotify API.",
      image: MoodTrackSS,
      alt: "A screenshot of a web app that recommends songs based off of mood.",
      tags: ["NodeJS", "ExpressJS", "HandlebarsJS"]
    },
    {
      title: "Pokemon Memory Game",
      githubLink: "https://github.com/andrewmloop/pokemon-memory-game",
      liveLink: "https://andrewmloop.github.io/pokemon-memory-game/",
      description: "A simple memory game inspired by the Pokemon franchise and built with ReactJS.",
      image: PokemonMemGameSS,
      alt: "A screenshot of a memory game inspired by the Pokemon franchise.",
      tags: ["React"]
    },
    {
      title: "This Portfolio Site",
      githubLink: "https://github.com/andrewmloop/portfolio-v2",
      liveLink: "",
      description: "This site built with NextJS and styled with TailwindCSS.",
      image: "",
      alt: "A folder icon.",
      tags: ["NextJS", "TailwindCSS"]
    }
  ];


  return (
    <section id="projects" className="w-full h-auto px-4 py-8 text-white bg-navy">
      <div className="max-w-[1000px] flex flex-col mx-auto my-8">
        {/* Featured Projects */}
        <div>
          <h3 className="mb-6 lg:mb-12 text-3xl text-center">Featured Projects</h3>
          <div className="flex flex-col">
            { 
              featuredProjects.map( (project, i) => {
                return <ProjectItem project={project} key={i} />;
              })
            }
          </div>
        </div>
        {/* Other Projects */}
        <div className="max-w-[1000px] flex flex-col mx-auto my-10">
          <h3 className="mb-6 lg:mb-12 text-3xl text-center">Other Projects</h3>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:gap-16 lg:mx-6">
            { 
              otherProjects.map( (project, i) => {
                return <ProjectItem project={project} key={i} />;
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectItem(props) {
  const proj = props.project;

  return (
    <div className="flex flex-col bg-cetacean rounded-md">
      <div className="relative lg:left-[-20px] lg:top-[-20px] text-[0px] mb-2  scale-100 transition-transform duration-300 lg:hover:scale-105">
        {proj.image && 
        <Image src={proj.image} alt={proj.alt} placeholder="blur"
          className="rounded-t-md lg:rounded-md" />
        }
      </div>
      <div className="flex flex-col justify-start px-4 pb-4">
        <h4 className="text-xl font-bold py-2">{proj.title}</h4>
        <p className="leading-relaxed mb-4">{proj.description}</p>
        <div className="flex flex-row-reverse justify-between items-center">
          <div className="flex justify-end">
            {
              proj.githubLink &&
              <a href={proj.githubLink} target="_blank" rel="noreferrer"
                className="mx-2 scale-100 transition-transform duration-300 hover:scale-110"
              >
                <Image 
                  src="/icons/github-128-gold.png" alt="Github logo." 
                  height={40} width={40}
                />
              </a>
            }
            {
              proj.liveLink && 
              <a href={proj.liveLink} target="_blank" rel="noreferrer"
                className="mx-2 scale-100 transition-transform duration-300 hover:scale-110"
              >
                <Image 
                  src="/icons/linking-100-gold.png" alt="An external link icon." height={40} width={40} 
                />
              </a>
            }
          </div>
          <div className="flex flex-wrap justify-start">
            {
              proj.tags.map( (tag, i) => {
                return <p key={i} className="mr-3 font-light">{tag}</p>;
              })
            }
          </div>
        </div>
      </div>      
    </div>
  );
}