import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-sm py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm font-mono">
          © {new Date().getFullYear()} ALEX_DEV. ALL RIGHTS RESERVED.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors hover:text-glow">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors hover:text-glow">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-neon-green transition-colors hover:text-glow">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors hover:text-glow">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
