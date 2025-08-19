import { motion } from "framer-motion";
import { useGitHubRepos, useGitHubStats } from "@/hooks/useGitHubData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Code, Github } from "lucide-react";

export default function Projects() {
  const { data: repos, isLoading: isLoadingRepos } = useGitHubRepos();
  const { data: stats, isLoading: isLoadingStats } = useGitHubStats();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
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
            className="heading-xl gradient-text mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full shadow-glow"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p 
            className="text-lead max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A showcase of my recent work and contributions to the developer community
          </motion.p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          className="card-glass p-8 mb-16 hover-lift"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3 
            className="heading-md gradient-text-static mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            GitHub Activity
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {isLoadingStats ? (
              <>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="text-center">
                    <Skeleton className="h-20 w-full rounded-2xl mb-3" />
                    <Skeleton className="h-4 w-20 mx-auto" />
                  </div>
                ))}
              </>
            ) : (
              <>
                <motion.div 
                  className="card-gradient p-6 text-center hover-lift group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                >
                  <div className="text-3xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stats?.publicRepos || 0}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Repositories</div>
                </motion.div>
                <motion.div 
                  className="card-gradient p-6 text-center hover-lift group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                >
                  <div className="text-3xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stats?.followers || 0}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Followers</div>
                </motion.div>
                <motion.div 
                  className="card-gradient p-6 text-center hover-lift group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                >
                  <div className="text-3xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stats?.totalStars || 0}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Stars</div>
                </motion.div>
                <motion.div 
                  className="card-gradient p-6 text-center hover-lift group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                >
                  <div className="text-3xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stats?.totalForks || 0}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Forks</div>
                </motion.div>
              </>
            )}
          </div>

          {/* GitHub Contribution Graph */}
          <motion.div 
            className="card-modern p-6 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-center">Contribution Activity</h4>
            <div className="w-full h-32 flex items-center justify-center bg-muted/30 rounded-xl">
              {isLoadingStats ? (
                <Skeleton className="h-full w-full rounded-xl" />
              ) : (
                <img 
                  src={`https://ghchart.rshah.org/2563eb/MobeenButt`} 
                  alt="GitHub Contribution Graph" 
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {isLoadingRepos
            ? Array(3)
                .fill(0)
                .map((_, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-24 w-full mb-4" />
                      <div className="flex gap-2">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-16" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Skeleton className="h-9 w-full" />
                    </CardFooter>
                  </Card>
                ))
            : repos?.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full"
                >
                  <div className="card-glass p-6 h-full flex flex-col hover-lift hover-glow group relative overflow-hidden">
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text-static transition-all duration-300">
                          {repo.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed flex-grow">
                          {repo.description || "No description available"}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {repo.language && (
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-foreground text-sm font-medium rounded-full border border-border">
                            {repo.language}
                          </span>
                        )}
                        {repo.stars > 0 && (
                          <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full border border-border">
                            ⭐ {repo.stars}
                          </span>
                        )}
                        {repo.forks > 0 && (
                          <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full border border-border">
                            🍴 {repo.forks}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-3 mt-auto">
                        <motion.a
                          href={repo.htmlUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex-1 text-center inline-flex items-center justify-center gap-2 text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Code className="h-4 w-4" />
                          View Code
                        </motion.a>
                        {repo.homepage && (
                          <motion.a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex-1 text-center inline-flex items-center justify-center gap-2 text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/MobeenButt"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
            <span>Explore More Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
