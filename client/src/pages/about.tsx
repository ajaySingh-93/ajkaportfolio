import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <Section className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-display font-bold text-white mb-8">
            ABOUT <span className="text-neon-green">ME</span>
          </h1>
          
          <div className="prose prose-invert prose-lg glass-panel p-8 rounded-xl border-l-4 border-neon-green">
            <p className="text-gray-300 leading-relaxed">
              {profile.about}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-black/50 border-white/10 hover:border-neon-green/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold text-neon-green mb-2">5+</h3>
                <p className="text-sm text-gray-400 font-mono">YEARS CODING</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-white/10 hover:border-neon-green/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold text-neon-green mb-2">50+</h3>
                <p className="text-sm text-gray-400 font-mono">PROJECTS SHIPPED</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-green to-neon-purple opacity-20 blur-3xl rounded-full" />
          <div className="relative z-10 glass-panel p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-display mb-6">PERSONAL_STATS</h3>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-500">LOCATION</span>
                <span className="text-neon-cyan">CYBERSPACE</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-500">CURRENT_STATUS</span>
                <span className="text-neon-pink animate-pulse">AVAILABLE FOR HIRE</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-500">INTERESTS</span>
                <span className="text-white">RAVE, CODE, AI</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-sm text-gray-500 mb-4">EDUCATION</h4>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border-l-2 border-neon-purple">
                  <h5 className="font-bold text-white">B.S. Computer Science</h5>
                  <p className="text-xs text-gray-400">Future Tech University • 2020-2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
