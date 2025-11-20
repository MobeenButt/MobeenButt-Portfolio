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
    <section id="about" className="section-padding animated-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black gradient-text mb-8 text-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full shadow-neon"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p 
            className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about crafting digital experiences that make a difference in the world
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Animated Background Glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl"></div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90"
                  alt="Developer working on modern setup"
                  className="relative rounded-3xl shadow-neon-lg w-full h-auto border border-white/10"
                  loading="lazy"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                className="absolute -bottom-8 -right-8 card-gradient p-6 rounded-2xl shadow-neon border border-white/20"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="text-3xl font-black gradient-text mb-2">1+</div>
                <div className="text-sm text-gray-300 font-medium">Years Experience</div>
                <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3"></div>
              </motion.div>

              {/* Code Snippet Floating Element */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card px-4 py-3 rounded-xl border border-white/10 font-mono text-sm text-green-400"
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>const passion = "coding";</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.h3 
                className="text-4xl md:text-5xl font-black gradient-text-primary text-glow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Crafting Digital Excellence
              </motion.h3>
              <div className="professional-border space-y-6">
                <motion.p 
                  className="text-xl text-gray-300 leading-relaxed font-light"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  I'm a passionate software developer with a focus on creating efficient, scalable, 
                  and user-centric applications. My journey in technology began with curiosity about 
                  how digital systems work and evolved into a career dedicated to building exceptional 
                  software solutions.
                </motion.p>
                <motion.p 
                  className="text-xl text-gray-300 leading-relaxed font-light"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  I specialize in modern web technologies and full-stack development, constantly 
                  learning and adapting to new frameworks and best practices. Every project is an 
                  opportunity to create something meaningful and impactful.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {[
                { icon: GraduationCap, title: "Computer Science Graduate", desc: "Strong foundation in CS principles" },
                { icon: Code, title: "Full Stack Developer", desc: "End-to-end application development" },
                { icon: Laptop, title: "Problem Solver", desc: "Creative solutions to complex challenges" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="card-gradient p-6 hover-lift group relative overflow-hidden"
                  whileHover={{ y: -4, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-neon group-hover:shadow-neon-lg transition-all duration-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg group-hover:gradient-text transition-all duration-300">{item.title}</h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a href="#contact" className="btn-primary text-lg">
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
