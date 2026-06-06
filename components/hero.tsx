"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { heroStats } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-[1] flex min-h-screen flex-col items-center justify-center overflow-hidden px-10 pt-[120px] pb-20 text-center"
    >
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 40%, rgba(26,127,232,.18) 0%, transparent 70%),
            radial-gradient(ellipse 30% 20% at 70% 20%, rgba(26,127,232,.08) 0%, transparent 70%)
          `,
        }}
      />

      <div className="orbit-ring orbit-ring-r1" />
      <div className="orbit-ring orbit-ring-r2" />
      <div className="orbit-ring orbit-ring-r3" />

      <div className="relative z-[2]">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-[30px] inline-flex items-center gap-2 rounded-full border border-orbita-blue-deep bg-orbita-blue-bright/8 px-[18px] py-1.5 text-[0.78rem] font-semibold tracking-[2px] text-orbita-blue-glow uppercase"
        >
          <span className="badge-dot size-1.5 rounded-full bg-orbita-blue-glow shadow-[0_0_8px_var(--orbita-blue-glow)]" />
          Inovação em Órbita
        </motion.div>

        <motion.h1
          custom={0.15}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-heading text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-bold tracking-[-1px] text-white"
        >
          Tecnologia que
          <br />
          <span className="text-orbita-blue-bright">Orbita</span>{" "}
          <span className="text-orbita-silver">o Futuro</span>
        </motion.h1>

        <motion.p
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-6 max-w-[580px] text-[1.1rem] leading-[1.7] text-orbita-text-muted"
        >
          Desenvolvemos soluções tecnológicas de alta performance que impulsionam
          empresas a um novo patamar digital. Do código ao cosmos.
        </motion.p>

        <motion.div
          custom={0.45}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-11 flex flex-wrap justify-center gap-4"
        >
          <Button
            nativeButton={false}
            render={<Link href="#competencias" />}
            className={cn(
              "h-auto rounded-md px-10 py-4 font-heading text-base font-bold tracking-[2px] uppercase",
              "border-0 bg-gradient-to-br from-orbita-blue-bright to-orbita-blue-deep text-white",
              "shadow-[0_0_30px_rgba(26,127,232,.4)] hover:shadow-[0_0_50px_rgba(26,127,232,.6)] hover:-translate-y-0.5",
            )}
          >
            Explorar Soluções
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="#sobre" />}
            variant="outline"
            className={cn(
              "h-auto rounded-md border-[1.5px] border-orbita-silver/30 bg-transparent px-9 py-4",
              "font-heading text-base font-semibold tracking-[2px] text-orbita-silver uppercase",
              "hover:border-orbita-blue-bright hover:bg-transparent hover:text-orbita-blue-bright",
            )}
          >
            Sobre Nós
          </Button>
        </motion.div>

        <motion.div
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-20 flex flex-wrap justify-center gap-8 border-t border-orbita-blue-bright/10 pt-10 md:gap-16"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-[2.6rem] leading-none font-bold text-orbita-blue-bright">
                {stat.value}
              </div>
              <div className="mt-1.5 text-[0.78rem] tracking-[1.5px] text-orbita-text-muted uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
