"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SkillBarProps = {
  label: string;
  percentage: number;
};

export function SkillBar({ label, percentage }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mt-5 first:mt-0">
      <div className="mb-2 flex justify-between">
        <span className="text-[0.75rem] font-semibold tracking-wider text-orbita-silver uppercase">
          {label}
        </span>
        <span className="text-[0.75rem] font-semibold tracking-wider text-orbita-blue-bright uppercase">
          {percentage}%
        </span>
      </div>
      <div className="h-[3px] rounded-sm bg-orbita-blue-bright/10">
        <motion.div
          className="relative h-[3px] rounded-sm bg-gradient-to-r from-orbita-blue-deep to-orbita-blue-bright"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.1,
          }}
        >
          <span className="absolute top-1/2 right-0 size-1.5 -translate-y-1/2 rounded-full bg-orbita-blue-bright shadow-[0_0_8px_var(--orbita-blue-bright)]" />
        </motion.div>
      </div>
    </div>
  );
}
