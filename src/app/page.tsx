import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Journey } from "@/components/sections/journey";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Projects />
    </>
  );
}
