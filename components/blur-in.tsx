"use client";
import * as React from "react";
import { motion, HTMLMotionProps, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
export interface TextBlurInProps
  extends Omit<HTMLMotionProps<"p">, "children"> {
  children: string;
  duration?: number;
  delay?: number;
  by?: "character" | "word";
  staggerDelay?: number;
  once?: boolean;
}
export function TextBlurIn({
  children,
  className,
  duration = 0.8,
  delay = 0,
  by = "word",
  staggerDelay = 0.04,
  once = true,
  ...props
}: TextBlurInProps) {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once });
  const units = by === "word" ? children.split(" ") : children.split("");
  return (
    <motion.p ref={ref} className={cn(className)} {...props}>
      {units.map((unit, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
          transition={{
            duration,
            delay: delay + index * staggerDelay,
          }}
          style={{ display: "inline-block" }}
        >
          {unit === " " ? "\u00A0" : unit}
          {by === "word" && index < units.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.p>
  );
}
