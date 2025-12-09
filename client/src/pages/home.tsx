import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Section className="flex flex-col justify-center items-center md:items-start container mx-auto px-4">
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between md:gap-16 gap-8">
        {/* Mobile: Image centered above heading */}
        <div className="flex justify-center md:hidden mb-6">
          <img src="/ajay-profile.jpg" alt="Ajay Kumar" className="hero-avatar" />
        </div>

        {/* Text Content */}
        <div className="space-y-6 max-w-3xl flex-1 md:flex-none">
          <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-tight">
            HI, I'M AJAY
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
                View My Projects <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 rounded-none px-8 py-6 text-lg font-bold tracking-wider hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
              Download Resume <Download className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Desktop: Image on the right - balanced with neon sphere */}
        <div className="hidden md:flex md:justify-center md:items-center flex-shrink-0 relative">
          <img src="/ajay-profile.jpg" alt="Ajay Kumar" className="hero-avatar" />
        </div>
      </div>
    </Section>
  );
}
