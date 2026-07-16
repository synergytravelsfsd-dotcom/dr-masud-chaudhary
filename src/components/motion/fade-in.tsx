"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  className,
  delay = 0,
  immediate = false,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; immediate?: boolean }) {
  return (
    <motion.div
      className={cn(className)}
      initial={false}
      {...(immediate
        ? { animate: { opacity: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-10% 0px" },
          })}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      initial={false}
    >
      {children}
    </motion.div>
  );
}
