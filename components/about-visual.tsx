"use client";

import { motion } from "framer-motion";

type OrbitingBadgeProps = {
  highlight: string;
  label: string;
  radius: number;
  duration: number;
  startAngle: number;
  reverse?: boolean;
};

function OrbitingBadge({
  highlight,
  label,
  radius,
  duration,
  startAngle,
  reverse = false,
}: OrbitingBadgeProps) {
  const spinDelta = reverse ? -360 : 360;

  return (
    <motion.div
      className="pointer-events-none absolute top-1/2 left-1/2 z-[1]"
      style={{ width: 150, height: 0 }}
      initial={{ rotate: startAngle }}
      animate={{ rotate: startAngle + spinDelta }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <div style={{ transform: `translateX(${radius}px)` }}>
        <motion.div
          initial={{ rotate: -startAngle }}
          animate={{ rotate: -startAngle - spinDelta }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
        >
          <div className="-translate-x-1/2 -translate-y-1/2 rounded-[10px] border border-orbita-dark-border bg-orbita-dark-card/90 px-5 py-3 font-heading text-[0.85rem] font-semibold tracking-wide whitespace-nowrap text-orbita-silver shadow-[0_8px_32px_rgba(0,0,0,.4)]">
            <span className="block text-[1.2rem] text-orbita-blue-bright">
              {highlight}
            </span>
            {label}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const orbitBadges: OrbitingBadgeProps[] = [
  {
    highlight: "+8",
    label: "Anos de Mercado",
    radius: 178,
    duration: 22,
    startAngle: -35,
  },
  {
    highlight: "ISO",
    label: "9001 Certificada",
    radius: 178,
    duration: 22,
    startAngle: 145,
    reverse: true,
  },
];

export function AboutVisual() {
  return (
    <div className="relative flex h-[400px] items-center justify-center">
      <div className="sobre-hex relative z-[2] flex size-[260px] items-center justify-center rounded-[30px] border border-orbita-blue-bright/30 bg-gradient-to-br from-orbita-blue-bright/15 to-orbita-blue-deep/5 shadow-[0_0_60px_rgba(26,127,232,.1),inset_0_0_40px_rgba(26,127,232,.05)]">
        <span className="text-[5rem]">⚡</span>
      </div>

      {orbitBadges.map((badge) => (
        <OrbitingBadge key={badge.label} {...badge} />
      ))}
    </div>
  );
}
