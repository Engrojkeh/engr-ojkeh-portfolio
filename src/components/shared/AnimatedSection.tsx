"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  staggerChildren?: number;
  staggerDirection?: 1 | -1;
  id?: string;
}

const offsets: Record<string, number> = {
  up: 30,
  down: -30,
  left: 30,
  right: -30,
  none: 0,
};

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  staggerChildren,
  staggerDirection = 1,
  id,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const xOffset = direction === "left" || direction === "right" ? offsets[direction] : 0;
  const yOffset = direction === "up" || direction === "down" ? offsets[direction] : 0;

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, x: xOffset, y: yOffset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: xOffset, y: yOffset }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(className)}
    >
      {staggerChildren ? (
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren,
                staggerDirection,
              },
            },
          }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}
