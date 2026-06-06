"use client";

import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative z-[1] overflow-hidden bg-orbita-dark px-6 py-[120px] text-center md:px-[60px]"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 50% 50%, rgba(26,127,232,.12) 0%, transparent 70%)",
        }}
      />

      <Reveal className="relative z-[1] mx-auto max-w-[680px]">
        <p className="font-heading text-[0.78rem] font-bold tracking-[3px] text-orbita-blue-bright uppercase">
          Pronto para Decolar?
        </p>
        <h2 className="font-heading mt-3 text-[clamp(2.4rem,5vw,4rem)] leading-tight font-bold text-white">
          Vamos Construir o Próximo{" "}
          <span className="text-orbita-blue-bright">Grande Projeto</span> Juntos
        </h2>
        <p className="mt-5 mb-11 text-[1.05rem] leading-[1.7] text-orbita-text-muted">
          Deixe seu contato e um especialista OrbitaTech entrará em contato em até
          24 horas para entender como podemos alavancar o seu negócio.
        </p>

        <form
          className="mx-auto flex max-w-[480px] flex-col gap-3 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            className={cn(
              "h-auto flex-1 rounded-md border-orbita-dark-border bg-orbita-dark-card/80 px-5 py-4",
              "text-[0.95rem] text-white placeholder:text-orbita-text-muted",
              "focus-visible:border-orbita-blue-bright focus-visible:ring-orbita-blue-bright/30",
            )}
          />
          <Button
            nativeButton={false}
            render={<Link href="#" />}
            className={cn(
              "h-auto shrink-0 rounded-md px-10 py-4 font-heading text-base font-bold tracking-[2px] whitespace-nowrap uppercase",
              "border-0 bg-gradient-to-br from-orbita-blue-bright to-orbita-blue-deep text-white",
              "shadow-[0_0_30px_rgba(26,127,232,.4)] hover:shadow-[0_0_50px_rgba(26,127,232,.6)] hover:-translate-y-0.5",
            )}
          >
            Entrar em Órbita
          </Button>
        </form>
      </Reveal>
    </section>
  );
}
