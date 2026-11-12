import AnimateOnScroll from "./AnimateOnScroll";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            <span className="text-accent font-mono text-xl mr-2">05.</span>
            Education
          </h2>
          <div className="h-px bg-card-border mb-12 max-w-md" />
        </AnimateOnScroll>

        <div className="space-y-8">
          {/* UCSD */}
          <AnimateOnScroll>
            <div className="bg-card-bg border border-card-border rounded-lg p-8 hover:border-accent/30 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  University of California, San Diego
                </h3>
                <span className="text-sm font-mono text-accent">
                  Sep. 2026 – Jun. 2028 (Expected)
                </span>
              </div>
              <p className="text-accent/80 font-medium mb-1">
                B.S. in Computer Science
              </p>
              <p className="text-muted mb-4">San Diego, CA</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-accent">▹</span>
                  <span className="text-muted">
                    Cumulative GPA:{" "}
                    <span className="text-foreground font-medium">3.92</span>
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted mb-2">
                  Relevant Coursework:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Software Construction",
                    "Data Structures & Algorithms",
                  ].map((course) => (
                    <span
                      key={course}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-accent/5 text-accent/80 border border-accent/10"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* UCR */}
          <AnimateOnScroll>
            <div className="bg-card-bg border border-card-border rounded-lg p-8 hover:border-accent/30 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  University of California, Riverside
                </h3>
                <span className="text-sm font-mono text-accent">
                  Sep. 2024 – Jun. 2026
                </span>
              </div>
              <p className="text-accent/80 font-medium mb-1">
                Computer Science (Transfer)
              </p>
              <p className="text-muted">Riverside, CA</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
