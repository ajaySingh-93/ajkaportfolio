import { motion } from "framer-motion";

export const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-pink opacity-0 group-hover:opacity-70 group-hover:animate-pulse translate-x-[2px]">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-cyan opacity-0 group-hover:opacity-70 group-hover:animate-pulse -translate-x-[2px]">
        {text}
      </span>
    </div>
  );
};
