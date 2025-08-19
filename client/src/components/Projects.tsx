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
          className="bg-gray-50 rounded-lg shadow-sm p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">GitHub Activity</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {isLoadingStats ? (
              <>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="min-w-[200px]">
                    <Skeleton className="h-16 w-full rounded-lg" />
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="bg-white rounded-lg shadow-sm p-4 text-center min-w-[200px]">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stats?.publicRepos || 0}
                  </div>
                  <div className="text-gray-600">Repositories</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 text-center min-w-[200px]">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stats?.followers || 0}
                  </div>
                  <div className="text-gray-600">Followers</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 text-center min-w-[200px]">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stats?.totalStars || 0}
                  </div>
                  <div className="text-gray-600">Stars</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 text-center min-w-[200px]">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stats?.totalForks || 0}
                  </div>
                  <div className="text-gray-600">Forks</div>
                </div>
              </>
            )}
          </div>

          {/* GitHub Contribution Graph */}
          <div className="mt-6 bg-white p-4 rounded-lg overflow-hidden">
            <div className="w-full h-32 bg-white rounded-lg flex items-center justify-center">
              {isLoadingStats ? (
                <Skeleton className="h-full w-full rounded-lg" />
              ) : (
                <img 
                  src={`https://ghchart.rshah.org/2563eb/MobeenButt`} 
                  alt="GitHub Contribution Graph" 
                  className="w-full h-auto"
                />
              )}
            </div>
          </div>
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>{repo.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 mb-4">
                        {repo.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.language && (
                          <Badge variant="secondary">
                            {repo.language}
                          </Badge>
                        )}
                        {repo.stars > 0 && (
                          <Badge variant="outline">
                            ⭐ {repo.stars}
                          </Badge>
                        )}
                        {repo.forks > 0 && (
                          <Badge variant="outline">
                            🍴 {repo.forks}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                      >
                        <a 
                          href={repo.htmlUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Code className="mr-2 h-4 w-4" /> View Code
                        </a>
                      </Button>
                      {repo.homepage && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                        >
                          <a 
                            href={repo.homepage} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild>
            <a
              href="https://github.com/MobeenButt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" /> See More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
