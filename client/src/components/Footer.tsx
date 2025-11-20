import { Link } from "wouter";
import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <a className="text-3xl font-bold text-white hover:text-gray-300 transition-colors duration-200">
                MB<span className="text-gray-400">.</span>
              </a>
            </Link>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Crafting exceptional digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
            <div className="flex items-center mt-4 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>and lots of chai</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-6">
              Follow my journey and stay updated with my latest projects and insights.
            </p>
            <div className="flex space-x-4">
              {[
                { href: "https://github.com/MobeenButt", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-white text-gray-400 hover:text-black rounded-lg transition-all duration-200"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Mobeen Butt. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
            whileHover={{ y: -2 }}
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
