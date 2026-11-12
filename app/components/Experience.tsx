import AnimateOnScroll from "./AnimateOnScroll";

const EXPERIENCES = [
  {
    title: "Software Engineering Intern",
    company: "Garmin",
    team: "Fullstack Development — Marines Team",
    period: "Jun. 2026 – Sep. 2026",
    bullets: [
      "Engineered and shipped four real-time C++ UI components for marine chart-plotters, architecting state-driven menus and controls that interface with embedded backend APIs to process live system data.",
      "Refactored a core base class to handle disabled-state rendering via a unified API, eliminating redundant text-rendering logic across 100+ inheriting child widgets in collaboration with UI/UX designers.",
      "Extended the existing communication interface to route backend data to newly developed UI components, enabling real-time data updates for the frontend display.",
      "Utilized custom GitHub Copilot agents for dependency mapping and code review, reducing initial feature planning and architecture discovery time by approximately 50%.",
    ],
  },
  {
    title: "Data Structures & Algorithms Grader",
    company: "University of California, Riverside",
    period: "Nov. 2025 – Jun. 2026",
    bullets: [
      "Evaluated 1,000+ C++ programming submissions for 500+ students, providing targeted code review on memory leaks, algorithmic efficiency, and advanced data structures (graphs, heaps, Binary Trees, stacks/queues).",
      "Conducted technical mock interviews for labs and programming assignments, assessing students' ability to communicate algorithmic tradeoffs and solution architecture in real-time.",
    ],
  },
  {
    title: "Undergraduate Learning Assistant",
    company: "University of California, Riverside",
    period: "Sep. 2025 – Jun. 2026",
    bullets: [
      "Led technical sessions and code architecture clinics for 500+ students in upper-division C++ Software Construction, teaching Object-Oriented Design, SOLID principles, and memory safety using Valgrind.",
      "Facilitated weekly workshops on DevOps workflows, training students in Git branching strategies, CMake build configurations, and automated GitHub Actions CI/CD pipelines.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card-bg/50">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            <span className="text-accent font-mono text-xl mr-2">02.</span>
            Experience
          </h2>
          <div className="h-px bg-card-border mb-12 max-w-md" />
        </AnimateOnScroll>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-card-border" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <AnimateOnScroll key={i}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-[6px] rounded-full bg-accent shadow-[0_0_8px_rgba(163,230,53,0.55)]" />

                  <div className="bg-card-bg border border-card-border rounded-lg p-6 hover:border-accent/30 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <span className="text-sm font-mono text-accent">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-accent/80 font-medium mb-1">
                      {exp.company}
                    </p>
                    {exp.team && (
                      <p className="text-muted text-sm mb-4">{exp.team}</p>
                    )}
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-muted text-sm leading-relaxed flex gap-2"
                        >
                          <span className="text-accent mt-1 shrink-0">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
