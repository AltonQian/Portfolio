import AnimateOnScroll from "./AnimateOnScroll";

interface Project {
  title: string;
  badge?: string;
  summary: string;
  tech: string[];
  github: string;
}

const PROJECTS: Project[] = [
  {
    title: "MC-Hammer",
    summary:
      "An AI-powered VS Code extension that automatically resolves Git merge conflicts directly in the editor using concurrent LLM candidate generation and syntax validation.",
    tech: ["Python", "TypeScript", "VS Code API", "OpenAI API"],
    github: "https://github.com/AltonQian/mc-hammer",
  },
  {
    title: "Real Estate Reality",
    badge: "Hackathon Winner",
    summary:
      "A full-stack Chrome extension with a FastAPI backend that scrapes live Zillow listings to calculate real-time property investment yield metrics.",
    tech: ["FastAPI", "Playwright", "React", "Python"],
    github: "https://github.com/pranavgowrish/real-estate-reality",
  },
  {
    title: "Knight's Code",
    summary:
      "An interactive coding education platform featuring in-browser code execution, Google OAuth authentication, and animated learning modules.",
    tech: ["Next.js", "TypeScript", "React Query", "Framer Motion"],
    github: "https://github.com/pratheek28/Knight-s-Code",
  },
  {
    title: "Reel to Real",
    summary:
      "An autonomous travel agent that converts social media travel videos into time-aware, optimized itineraries using multimodal AI and a custom TSP routing algorithm.",
    tech: ["FastAPI", "React", "Twelve Labs", "Gemini API", "spaCy"],
    github: "https://github.com/pranavgowrish/reeltoreal",
  },
  {
    title: "Drones Space-Y",
    summary:
      "An autonomous drone prototyping project with custom Python flight control logic engineered for competitive agility and budget efficiency.",
    tech: ["Python", "Robotics", "Control Systems"],
    github: "https://github.com/acm-ucr/drones-space-y",
  },
  {
    title: "UCR Fencing Club Website",
    summary:
      "An official club website developed with Next.js and Tailwind CSS featuring automated code quality and deployment pipelines via GitHub Actions.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    github: "https://github.com/acm-ucr/fencing-website",
  },
  {
    title: "UCR Wushu Club Website",
    summary:
      "A modern club landing page built with Next.js and Tailwind CSS that showcases schedules, events, and media with automated linting workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Husky"],
    github: "https://github.com/acm-ucr/wushu-website",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                <span className="text-accent font-mono text-xl mr-2">03.</span>
                Projects
              </h2>
              <div className="h-px bg-card-border max-w-xs" />
            </div>
            <p className="text-xs font-mono text-muted mt-3 sm:mt-0">
              Hover to preview • Click to view source on GitHub
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <AnimateOnScroll key={i} className="h-full">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="group relative flex flex-col justify-between h-[230px] rounded-xl border border-card-border bg-card-bg/85 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(163,230,53,0.22)] hover:-translate-y-1.5 cursor-pointer overflow-hidden"
              >
                {/* Subtle lime green ambient hover glow */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(163, 230, 53, 0.18) 0%, transparent 70%)",
                  }}
                />

                {/* Top Row: Tech Icon / Badge & GitHub Arrow */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    {/* Terminal / Code Icon */}
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>

                    {project.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 font-medium">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* GitHub External Arrow */}
                  <div className="flex items-center gap-1.5 text-muted group-hover:text-accent transition-colors duration-200">
                    <span className="text-[11px] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:inline">
                      GitHub
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>

                {/* Center Content: Project Name (always visible) + 1-Sentence Summary (revealed on hover) */}
                <div className="my-auto transition-transform duration-300">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-200 tracking-tight">
                    {project.title}
                  </h3>

                  {/* 1-Sentence Summary: Expands smoothly on hover */}
                  <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2.5">
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans line-clamp-3">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-card-border/60 group-hover:border-accent/20 transition-colors duration-300">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-background text-muted group-hover:text-accent/90 border border-card-border group-hover:border-accent/30 transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
