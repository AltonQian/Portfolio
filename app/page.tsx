import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-foreground overflow-x-hidden selection:bg-accent/25 selection:text-white">
      {/* Ambient background designs (Aura, Cyber Grid, Circuit Traces & Accents) */}
      <BackgroundEffects />

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
