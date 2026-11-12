import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16"
    >
      {/* Central hero aura halo */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[350px] sm:h-[450px] rounded-full blur-[110px] -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(163, 230, 53, 0.18) 0%, rgba(132, 204, 22, 0.08) 50%, transparent 75%)",
        }}
      />

      <div className="relative max-w-3xl text-center">
        <AnimateOnScroll>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent font-mono text-xs mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(163,230,53,0.18)]">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>Seeking Summer 2027 SWE Internships</span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <p className="text-accent font-mono text-sm mb-3 tracking-wider">
            Hi, my name is
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-4 tracking-tight drop-shadow-[0_0_35px_rgba(163,230,53,0.2)]">
            Alton Qian
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <h2 className="text-2xl sm:text-4xl font-semibold text-muted mb-6">
            Software Engineer &amp; CS Student
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Third-year Computer Science major at UC San Diego with full-stack
            internship experience. Passionate about building impactful software
            and exploring AI/ML engineering.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-accent text-black font-semibold hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(163,230,53,0.5)] transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md border border-accent/60 text-accent font-medium hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_15px_rgba(163,230,53,0.25)] transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-1">
        <span className="text-[10px] font-mono text-muted/60 tracking-widest uppercase">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-accent/70"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
}
