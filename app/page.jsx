import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Produkcje from "./components/Produkcje";
import Kontakt from "./components/Kontakt";
import Background from "./components/Background";

export default function Home() {
  return (
    <>
        <Background />
      <Hero />
      <Bio />
      <Skills />
      <Produkcje />
      <Kontakt />
    </>
  );
}
