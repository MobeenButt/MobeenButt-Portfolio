import { motion } from "framer-motion";
import { useGitHubUser } from "@/hooks/useGitHubData";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Hero() {
  const { data: githubUser, isLoading } = useGitHubUser();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-blue-50"
    >
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="text-accent font-semibold"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4"
              variants={itemVariants}
            >
              Mobeen Butt
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl text-gray-700 mb-6"
              variants={itemVariants}
            >
              Software Developer
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-lg mb-8"
              variants={itemVariants}
            >
              I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly applications with modern technologies.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
            <motion.div
              className="flex mt-8 space-x-4"
              variants={itemVariants}
            >
              <a
                href="https://github.com/MobeenButt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-sm"></div>
              {isLoading ? (
                <Skeleton className="relative w-64 h-64 rounded-full" />
              ) : (
                <img
                  src={githubUser?.avatar_url || "https://github.com/MobeenButt.png"}
                  alt="Mobeen Butt"
                  className="relative w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
