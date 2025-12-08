import { Section } from "@/components/ui/section";
import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <Section className="container mx-auto px-4">
      <h1 className="text-5xl font-display font-bold text-white mb-12 text-center">
        TECH_<span className="text-neon-pink">STACK</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-8 rounded-xl border border-white/10 hover:border-neon-pink/50 transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]"
          >
            <h2 className="text-2xl font-bold text-neon-pink mb-6 font-display uppercase tracking-widest border-b border-white/10 pb-4">
              {category.category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => (
                <Badge 
                  key={item}
                  variant="outline" 
                  className="bg-black/40 border-white/20 text-gray-300 px-4 py-2 hover:bg-neon-pink hover:text-white hover:border-neon-pink transition-all duration-300 cursor-default"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
