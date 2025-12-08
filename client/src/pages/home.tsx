import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { GlitchText } from "@/components/ui/glitch-text";
import { profile } from "@/data/profile";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Section className="flex flex-col justify-center items-start container mx-auto px-4">
      <div className="space-y-6 max-w-3xl">
        <h2 className="text-neon-cyan font-mono text-lg tracking-widest animate-pulse">
          &lt;WELCOME_TO_THE_GRID /&gt;
        </h2>
        
        <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-tight">
          HI, I'M <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan">
            <GlitchText text={profile.name} />
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 font-light border-l-4 border-neon-purple pl-6">
          {profile.title}
        </p>

        <p className="text-lg text-gray-500 max-w-xl">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap gap-4 pt-8">
          <Link href="/projects">
            <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white border-0 rounded-none px-8 py-6 text-lg font-bold tracking-wider hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all">
              VIEW WORK <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          
          <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 rounded-none px-8 py-6 text-lg font-bold tracking-wider hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
            RESUME <Download className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
