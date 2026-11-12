import AnimateOnScroll from "./AnimateOnScroll";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    items: ["C++", "Python", "TypeScript", "Java"],
  },
  {
    title: "Frameworks & Tools",
    items: [
      "NumPy",
      "Pandas",
      "FastAPI",
      "Next.js",
      "React Native",
      "TailwindCSS",
      "Git / GitHub",
    ],
  },
  {
    title: "Technologies",
    items: ["Google Gemini API", "OpenAI API", "OpenCV"],
  },
  {
    title: "Coursework",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Construction",
      "Data Structures & Algorithms",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card-bg/50">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            <span className="text-accent font-mono text-xl mr-2">04.</span>
            Skills &amp; Technologies
          </h2>
          <div className="h-px bg-card-border mb-12 max-w-md" />
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-8 stagger-children">
          {SKILL_CATEGORIES.map((category) => (
            <AnimateOnScroll key={category.title}>
              <div className="bg-card-bg border border-card-border rounded-lg p-6 hover:border-accent/30 transition-colors duration-300 h-full">
                <h3 className="text-lg font-semibold text-accent mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-md bg-background text-foreground/80 border border-card-border hover:border-accent/40 hover:text-accent transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
