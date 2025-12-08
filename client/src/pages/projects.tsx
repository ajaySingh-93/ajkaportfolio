import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Section className="container mx-auto px-4">
      <h1 className="text-5xl font-display font-bold text-white mb-12">
        FEATURED <span className="text-neon-cyan">PROJECTS</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full bg-black/40 backdrop-blur-md border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <CardHeader>
                <CardTitle className="text-2xl font-display text-white group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-white/5 text-gray-300 hover:bg-white/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" className="border-white/20 hover:bg-neon-cyan hover:text-black hover:border-neon-cyan transition-all">
                  <Github className="w-4 h-4 mr-2" /> Code
                </Button>
                <Button variant="outline" size="sm" className="border-white/20 hover:bg-neon-cyan hover:text-black hover:border-neon-cyan transition-all">
                  <ExternalLink className="w-4 h-4 mr-2" /> Demo
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
