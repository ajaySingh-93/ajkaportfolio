import { Section } from "@/components/ui/section";
import { experience } from "@/data/experience";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Section className="container mx-auto px-4 max-w-4xl">
      <h1 className="text-5xl font-display font-bold text-white mb-16 text-center">
        CAREER_<span className="text-neon-purple">LOG</span>
      </h1>

      <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-12">
        {experience.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-neon-purple shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            
            <div className="glass-panel p-8 rounded-xl border border-white/10 hover:border-neon-purple/50 transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-neon-purple transition-colors">
                    {job.role}
                  </h3>
                  <h4 className="text-neon-cyan font-mono text-sm mt-1">@{job.company}</h4>
                </div>
                <Badge className="w-fit mt-2 md:mt-0 bg-white/5 text-gray-300 border-white/10">
                  {job.period}
                </Badge>
              </div>
              
              <ul className="space-y-2 list-disc list-inside text-gray-400">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

import { Badge } from "@/components/ui/badge";
