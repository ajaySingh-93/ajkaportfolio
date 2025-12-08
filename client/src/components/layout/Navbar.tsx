import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SKILLS", path: "/skills" },
  { name: "PROJECTS", path: "/projects" },
  { name: "EXPERIENCE", path: "/experience" },
  { name: "CONTACT", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan hover:text-glow transition-all">
            ALEX_DEV
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={`text-sm font-medium tracking-widest hover:text-neon-cyan transition-colors ${
                  location === item.path ? "text-neon-cyan text-glow" : "text-gray-400"
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
          <Button variant="outline" size="sm" className="hidden lg:flex gap-2 border-white/20 hover:border-neon-purple hover:bg-neon-purple/10">
            <Command className="w-4 h-4" /> CMD+K
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-neon-purple transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-display tracking-widest ${
                      location === item.path ? "text-neon-cyan" : "text-gray-400"
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
