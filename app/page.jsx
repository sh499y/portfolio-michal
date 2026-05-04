import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Produkcje from "./components/Produkcje";
import Kontakt from "./components/Kontakt";

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Skills />
      <Produkcje />
      <Kontakt />
    </>
  );
}
