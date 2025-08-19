import { motion } from "framer-motion";
import { useGitHubUser } from "@/hooks/useGitHubData";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Download, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Hero() {
  const { data: githubUser, isLoading } = useGitHubUser();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-background relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-50"></div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl floating-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl pulse-slow"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div
                className="status-available"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for new opportunities
              </motion.div>

              <div className="space-y-6">
                <motion.p
                  className="text-lg font-medium text-muted-foreground tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Hello, I'm
                </motion.p>
                <h1 className="heading-display">
                  <motion.span
                    className="block gradient-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Mobeen Butt
                  </motion.span>
                </h1>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <motion.h2
                className="heading-lg text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Software Developer & Digital Architect
              </motion.h2>

              <div className="border-accent">
                <motion.p
                  className="text-lead max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  I craft exceptional digital experiences with cutting-edge technologies and innovative solutions.
                  Passionate about building scalable applications that transform ideas into reality and drive meaningful impact.
                </motion.p>
              </div>

              {/* Tech Stack */}
              <motion.div
                className="flex flex-wrap gap-3 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 glass-card rounded-xl text-sm font-medium text-foreground hover:shadow-glow transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <motion.a
                href="#projects"
                className="btn-primary group inline-flex items-center gap-3"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View My Work</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="#contact"
                className="btn-secondary group inline-flex items-center gap-3"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 pt-8"
            >
              <motion.span
                className="text-sm font-semibold text-muted-foreground uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                Connect
              </motion.span>
              <div className="flex gap-4">
                {[
                  { href: "https://github.com/MobeenButt", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
                ].map(({ href, icon: Icon, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass-card rounded-xl hover-lift hover-glow group relative overflow-hidden"
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-300 relative z-10" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative floating">
              {/* Animated Gradient Rings */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-blue-500/15 blur-xl animate-pulse delay-1000"></div>

              {/* Decorative Floating Elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur-sm"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-12 -right-12 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 blur-sm"
                animate={{
                  y: [0, 15, 0],
                  rotate: [360, 180, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>

              {/* Main image container */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
                {isLoading ? (
                  <Skeleton className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl card-glass" />
                ) : (
                  <motion.div className="relative">
                    <motion.img
                      src={`${githubUser?.avatar_url || "https://github.com/MobeenButt.png"}?s=500`}
                      alt="Mobeen Butt - Software Developer"
                      className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl border border-border shadow-modern-xl"
                      whileHover={{ scale: 1.02, rotate: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      loading="eager"
                      fetchPriority="high"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-3xl"></div>
                  </motion.div>
                )}

                {/* Floating Status Badge */}
                <motion.div
                  className="absolute -bottom-6 -left-6 card-glass px-6 py-3 rounded-2xl shadow-glow"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span className="text-sm font-semibold text-foreground">Available for work</span>
                  </div>
                </motion.div>

                {/* Code Snippet Floating Element */}
                <motion.div
                  className="absolute -top-6 -right-6 card-glass px-4 py-2 rounded-xl font-mono text-xs text-green-500"
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>console.log("Hello World!")</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
