import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            <span className="text-accent font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-card-border mb-12 max-w-md" />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <AnimateOnScroll>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m Alton, a third-year Computer Science major at{" "}
                <span className="text-accent font-medium">UC San Diego</span> with a 3.92
                GPA. I recently completed a full-stack software engineering
                internship at{" "}
                <span className="text-accent font-medium">Garmin</span>, where I worked on
                the Marines team building real-time C++ UI components for marine
                chart-plotters.
              </p>
              <p>
                My interests lie at the intersection of{" "}
                <span className="text-accent font-medium">AI/ML engineering</span> and
                practical software development. I&apos;m particularly drawn to
                building tools that leverage large language models, computer
                vision, and intelligent automation to solve real-world problems.
              </p>
              <p>
                Outside of my internship experience, I&apos;ve served as a Data
                Structures &amp; Algorithms grader and an Undergraduate Learning
                Assistant, where I helped hundreds of students master C++,
                object-oriented design, and DevOps workflows.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Profile picture placeholder */}
          <AnimateOnScroll>
            <div className="relative group mx-auto md:mx-0">
              <div className="relative w-64 h-64 rounded-lg overflow-hidden border-2 border-card-border group-hover:border-accent transition-colors duration-300">
                <div className="w-full h-full bg-card-bg flex items-center justify-center text-muted">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-16 h-16 mx-auto mb-2 text-accent/60"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <p className="text-xs text-accent font-mono">Your photo here</p>
                  </div>
                </div>
              </div>
              {/* Decorative border offset */}
              <div className="absolute -bottom-3 -right-3 w-64 h-64 rounded-lg border-2 border-accent -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300 shadow-[0_0_15px_rgba(163,230,53,0.3)]" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
