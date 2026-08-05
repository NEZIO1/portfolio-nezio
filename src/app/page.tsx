import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Journey } from "@/components/sections/journey";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Certificates } from "@/components/sections/certificates";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Certificates />
    </>
  );
}
