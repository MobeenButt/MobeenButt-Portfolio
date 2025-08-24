import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  // Add page title
  useEffect(() => {
    document.title = "Mobeen Butt | Portfolio";
    console.log("Home component mounted successfully!");
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </motion.main>
        <Footer />
        <ScrollToTop />
      </div>
    </AnimatePresence>
  );
}
