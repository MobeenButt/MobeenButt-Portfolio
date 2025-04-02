import { motion } from "framer-motion";
import { GraduationCap, Code, Laptop, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Get to know me better</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
              alt="Developer working"
              className="rounded-lg shadow-md"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-4"
              variants={itemVariants}
            >
              Who I Am
            </motion.h3>
            <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
              I'm a passionate software developer with a focus on creating efficient and user-friendly applications. My journey in tech began with a curiosity for how digital systems work, which led me to pursue a career in software development.
            </motion.p>
            <motion.p className="text-gray-600 mb-6" variants={itemVariants}>
              I specialize in building robust applications using modern technologies and best practices. I'm constantly learning and adapting to new technologies to ensure I can provide the best solutions for every project I work on.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <GraduationCap className="text-primary mr-3 h-5 w-5" />
                <span className="text-gray-700">Computer Science Graduate</span>
              </div>
              <div className="flex items-center">
                <Code className="text-primary mr-3 h-5 w-5" />
                <span className="text-gray-700">Full Stack Developer</span>
              </div>
              <div className="flex items-center">
                <Laptop className="text-primary mr-3 h-5 w-5" />
                <span className="text-gray-700">Problem Solver</span>
              </div>
              <div className="flex items-center">
                <Globe className="text-primary mr-3 h-5 w-5" />
                <span className="text-gray-700">Open Source Contributor</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
