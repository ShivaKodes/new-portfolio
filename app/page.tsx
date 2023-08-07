import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-light-black w-full">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Skills /> 
      <Projects />
      <GetInTouch />
       <Footer />
    </main>
  )
}
