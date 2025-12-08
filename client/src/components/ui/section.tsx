import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Section({ children, className = "", delay = 0 }: SectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`min-h-[calc(100vh-4rem)] pt-24 pb-12 ${className}`}
    >
      {children}
    </motion.div>
  );
}
