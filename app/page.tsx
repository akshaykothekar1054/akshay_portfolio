import Navbar from "@/components/Navbar";
import HeroAboutTransition from "@/components/sections/HeroAboutTransition";
import MarqueeBanner from "@/components/sections/MarqueeBanner";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroAboutTransition />
        <MarqueeBanner />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
