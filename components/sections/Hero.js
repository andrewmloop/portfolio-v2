export default function Hero() {
  return (
    <div id="hero" className="h-[75vh] p-2 lg:p-4">
      <div className="flex flex-col h-full text-center justify-center">
        <p>Hi, I&apos;m</p>
        <h1>Andrew Loop</h1>
        <p>A web developer interested in making fun and aesthetic web-things.</p>
        <a href="#about">
          <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx={12} cy={12} r={9}></circle>
            <line x1={8} y1={12} x2={12} y2={16}></line>
            <line x1={12} y1={8} x2={12} y2={16}></line>
            <line x1={16} y1={12} x2={12} y2={16}></line>
          </svg>
        </a>
      </div>
    </div>
  );
}