import About from "@/components/home/about";
import Projects from "@/components/home/projects";
import Social from "@/components/home/social";
import Hero from "@/components/home/hero";
import Connect from "@/components/home/connect";
import Skills from "@/components/home/skills";

export default function Home() {
  return (
  <main>
    <div className="p-6">
      <Hero />
      <About />
      <Social />
      <Skills />
      <Projects />
      <Connect />
    </div>
    </main>
  );
}
