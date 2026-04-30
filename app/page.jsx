import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Dzialalnosc from "./components/Dzialalnosc";
import Produkcje from "./components/Produkcje";
import Kontakt from "./components/Kontakt";

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Skills />
      <Dzialalnosc />
      <Produkcje />
      <Kontakt />
    </>
  );
}
