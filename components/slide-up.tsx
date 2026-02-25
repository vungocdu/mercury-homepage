"use client";
import * as React from "react";
import { motion, HTMLMotionProps, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
export interface TextSlideUpProps
  extends Omit<HTMLMotionProps<"p">, "children"> {
  children: string;
  duration?: number;
  delay?: number;
  by?: "character" | "word";
  staggerDelay?: number;
  distance?: number;
  once?: boolean;
}
export function TextSlideUp({
  children,
  className,
  duration = 0.5,
  delay = 0,
  by = "word",
  staggerDelay = 0.03,
  distance = 20,
  once = true,
  ...props
}: TextSlideUpProps) {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once });
  const units = by === "word" ? children.split(" ") : children.split("");
  return (
    <motion.p ref={ref} className={cn(className)} {...props}>
      {units.map((unit, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: distance }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
          transition={{
            duration,
            delay: delay + index * staggerDelay,
          }}
          style={{ display: "inline-block" }}
        >
          {unit}
          {by === "word" && index < units.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.p>
  );
}
